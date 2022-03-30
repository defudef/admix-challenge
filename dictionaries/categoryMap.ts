import categories from './categories';

const categoryMap = new Map<string, string>()

categories.forEach(({ name, describe }) => {
  categoryMap.set(name, describe);
});

export default categoryMap;

