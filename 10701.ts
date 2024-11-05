const  componentOption = {
  button: [
    {
      title: "Button Primary",
      image: "/assets/buttonV1.png",
      variant: "ButtonV1",
    },
    {
      title: "Button Secondary",
      image: "/assets/buttonV2.png",
      variant: "ButtonV2",
    },
    {
      title: "Button Tertiary",
      image: "/assets/buttonV3.png",
      variant: "ButtonV3",
    },
  ],
  header: [
    {
      title: "Header Primary",
      image: "/assets/headerV1.png",
      variant: "HeaderV1",
    },
    {
      title: "Header Secondary",
      image: "/assets/headerV2.png",
      variant: "HeaderV2",
    },
  ],
} as const; // used to make readonly so that properties are not altered

// Generic type to extract variants for a given key
type ExtractVariants<T, K extends keyof T> = T[K] extends readonly {
  variant: infer V;
}[]
  ? V
  : never;

type ButtonVariants = ExtractVariants<typeof componentOption, "button">; 
type HeaderVariants = ExtractVariants<typeof componentOption, "header">; 

const buttonVariant: ButtonVariants = "ButtonV1"; // Valid usage
const headerVariant: HeaderVariants = "HeaderV2"; // Valid usage
