// Explicitly mark componentOption as a constant readonly object
var componentOption = {
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
}; // Important to use `as const` here
// Usage example
var buttonVariant = "ButtonV1";
var headerVariant = "HeaderV2";
