import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { Box, Skeleton, Stack } from '@mui/material';
import { triviaCategoriesAtom, triviaPreferencesAtom } from '../../atoms';
import { fetchCategories } from '../../api';
import styles from './Setup.styles';

export default function TriviaCategories({
  handleNextStep,
}: {
  handleNextStep: () => void;
}) {
  const [categories, setCategories] = useAtom(triviaCategoriesAtom);
  const [preferences, setPreferences] = useAtom(triviaPreferencesAtom);

  const [loading, setLoading] = useState(false);

  const handleCategoryChange = (categoryId: string) => {
    setPreferences((prev) => ({
      ...prev,
      category: categoryId,
    }));
    handleNextStep();
  };

  useEffect(() => {
    if (categories.length === 0) {
      const handleFetchCategories = async () => {
        setLoading(true);

        try {
          const categories = await fetchCategories();
          setCategories(categories);
        } catch (err) {
          console.error('Failed to fetch trivia categories.');
        } finally {
          setLoading(false);
        }
      };

      handleFetchCategories();
    }
  }, [categories.length, setCategories]);

  if (loading) return <TriviaCategoriesSkeleton />;

  return (
    <Stack direction='row' flexWrap='wrap' gap={2}>
      {categories
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((category) => (
          <Box
            key={category.id}
            onClick={() => handleCategoryChange(category.id.toString())}
            borderColor={
              preferences.category === category.id.toString()
                ? 'primary.light'
                : 'information.main'
            }
            sx={styles.stepButton}
          >
            {category.name}
          </Box>
        ))}
    </Stack>
  );
}

function TriviaCategoriesSkeleton() {
  return (
    <Box sx={styles.categoriesSkeletonContainer}>
      {[...Array(6)].map((_, index) => (
        <Skeleton
          variant='rectangular'
          height={47}
          width={200}
          sx={styles.categoriesSkeletonItem}
        />
      ))}
    </Box>
  );
}
