import { Helmet, HelmetProvider } from "react-helmet-async";
import { OverviewInterface } from "../data/DataInterfaces";

// TODO: Fill data for name and occupation, changes tab name
export const SEO = ({
  summary: { name, occupation, description },
}: OverviewInterface) => {
  return (
    <HelmetProvider>
      <Helmet>
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon.svg"
          // data-react-helmet="href"
        />
        <title>
          {name} - {occupation}
        </title>
        <meta name="description" content={description} />
      </Helmet>
    </HelmetProvider>
  );
};
