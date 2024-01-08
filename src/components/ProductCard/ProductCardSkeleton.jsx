import ContentLoader from 'react-content-loader';

export const ProductCardSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width='100%'
      height='100%'
      viewBox="0 0 320 360"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="5" rx="0" ry="0" width='100%' height="270" />
      <rect x="0" y="290" rx="0" ry="0" width="220" height="10" />
      <rect x="0" y="310" rx="0" ry="0" width="150" height="10" />
      <rect x="0" y="325" rx="0" ry="0" width="60" height="10" />
      <circle cx="300" cy="313" r="20" />
    </ContentLoader>
  );
};
