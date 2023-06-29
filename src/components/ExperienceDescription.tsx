type DescriptionText = { desc: string };

export const Description = ({ desc }: DescriptionText) => {
  return <p className="experience__description">{desc}</p>;
};
