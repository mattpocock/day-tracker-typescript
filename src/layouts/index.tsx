import * as React from 'react';
import Helmet from 'react-helmet';
import * as Grid from 'react-bootstrap/lib/Grid';

// import './index.css';
import Wrapper from '../components/Wrapper';
import ContentBox from '../components/ContentBox';
import ThemeProvider from '../components/Theme';

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children?: any;
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, {}> {
  public render() {
    return (
      <div>
        <Helmet
          title="Day Tracker"
          // meta={[
          //   { name: 'description', content: 'Sample' },
          //   { name: 'keywords', content: 'sample, something' },
          // ]}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
            crossOrigin="anonymous"
          />
        </Helmet>
        <ThemeProvider>
          <div style={{ overflow: 'hidden' }}>
            <Wrapper>
              <Grid>
                <ContentBox>{this.props.children}</ContentBox>
              </Grid>
            </Wrapper>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default DefaultLayout;
