import React, { Component } from 'react';
import './App.css';

import {
  Page,
  Header,
  Heading,
  Main,
  Text,
  Paragraph,
  Strong,
  Row,
  Column,
  Card,
  TextField,
  Accordion,
  FooterItem,
  Link,
  Footer
} from "@lbg/constellation";

// Import theme
import "@lbg/constellation/dist/lloyds.css";

class App extends Component {
  render() {
    return (
      <Page>
        <Header />
        <Main>
          <Text variation="large-emphasized">
            You're about to start using Constellation
          </Text>
          <Heading>
            Stand by, Chewie, Here We Go
          </Heading>
          <Paragraph variation="intro">
            <Strong>
              Step 1 of 6
            </Strong>
             &nbsp;that sounds like an R2 unit in there
          </Paragraph>
          <Row>
            <Column grow="2">
              <Card>
                <Heading variation="h4">
                  Red Leader Standing By
                </Heading>
                <Paragraph>
                  Tee chuta hhat yudd! Goodness gracious me! <Strong>Artoo Detoowha</Strong> bo Seethreepiowha ey toota odd mischka Jabba du Hutt. I don't think they're going to let us in, Artoo.
                </Paragraph>
                <Paragraph>
                  You are unwise to lower your defenses. Your thoughts betray you, father. I feel the good in you...the conflict. There is no conflict. You couldn't bring yourself to kill me before, and I don't believe you'll destroy me now.
                </Paragraph>
              </Card>
              <Card>
                <Heading variation="h4">
                  Gray Leader Standing By
                </Heading>
                <TextField label="Hey down there, could you give us a hand with this?" name="cost" />
                <TextField label="Why aren't you at your post?" name="deposit" />
                <Heading variation="h4">
                  Green Leader Standing By
                </Heading>
                <Paragraph>
                  My lord, the fleet has moves out of light-speed.
                </Paragraph>
                <Paragraph>
                  The tractor beam is coupled to the main reactor in seven locations.
                </Paragraph>
              </Card>
            </Column>
            <Column>
              <Accordion label="Need help?" variation="sidebar">
                Nothing to see here...
              </Accordion>
            </Column>
          </Row>
        </Main>
        <Footer>
          <FooterItem>
            <Link href="https://lloydsbank.com" onColor>
            Security
            </Link>
          </FooterItem>
          <FooterItem>
            <Link href="https://lloydsbank.com" onColor>
            Cookies
            </Link>
          </FooterItem>
          <FooterItem>
            <Link href="https://lloydsbank.com" onColor>
            Privacy
            </Link>
          </FooterItem>
          <FooterItem>
            <Link href="https://lloydsbank.com" onColor>
            Rates & Charges
            </Link>
          </FooterItem>
          <FooterItem>
            <Link href="https://lloydsbank.com" onColor>
            www.lloydsbankinggroup.com
            </Link>
          </FooterItem>
        </Footer>
      </Page>
    );
  }
}

export default App;
