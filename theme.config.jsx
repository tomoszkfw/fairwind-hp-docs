import { useRouter } from "next/router";

export default {
    useNextSeoProps() {
        const { asPath } = useRouter();
        if (asPath !== "/") {
            return {
                titleTemplate: "%s | FairWind Website Docs",
            };
        }
    },
    logo: <span>FairWind Website Docs</span>,
    project: {
        link: "https://github.com/tomoszkfw/fairwind-hp-docs",
    },
    head: (
        <>
            <meta property="og:title" content="FairWind Website Docs" />
            <meta
                property="og:description"
                content="FairWind HP担当 管理セクションの講習に使用するドキュメントです。"
            />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1920" />
            <meta property="og:image:height" content="1080" />
            <meta property="og:image" content="/opengraph-image.jpeg" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="FairWind Website Docs" />
            <meta
                name="twitter:description"
                content="FairWind HP担当 管理セクションの講習に使用するドキュメントです。"
            />
            <meta name="twitter:image:type" content="image/png" />
            <meta name="twitter:image:width" content="1920" />
            <meta name="twitter:image:height" content="1080" />
            <meta name="twitter:image" content="/twitter-image.jpeg" />
            <link
                rel="icon"
                href="/favicon.ico"
                type="image/x-icon"
                sizes="192x192"
            />
            <meta name="next-size-adjust" />
            <meta
                property="description"
                content="FairWind HP担当 管理セクションの講習に使用するドキュメントです。"
            />
            <meta property="og:site_name" content="FairWind Website Docs" />
            <meta
                property="og:url"
                content="https://fairwind-hp-docs.vercel.app/"
            />
            <meta name="robots" content="noindex, nofollow, noarchive" />
        </>
    ),
    toc: {
        backToTop: true,
    },
    footer: {
        text: (
            <span>
                Copyright &copy; {new Date().getFullYear()} FairWind Website
                Division
            </span>
        ),
    },
};
