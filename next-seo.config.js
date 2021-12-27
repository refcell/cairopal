/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "cairopal",
  titleTemplate: "%s",
  defaultTitle: "cairopal",
  description: "Flexible Starknet Dapp Template",
  canonical: "https://nextarter-chakra.sznm.dev",
  openGraph: {
    url: "https://nextarter-chakra.sznm.dev",
    title: "cairopal",
    description: "Flexible Starknet Dapp Template",
    images: [
      {
        url: "https://cairopal.xyz/cairopal.png",
        alt: "cairopal cairopal",
      },
    ],
    site_name: "cairopal",
  },
  twitter: {
    handle: "@a5f9t4",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
