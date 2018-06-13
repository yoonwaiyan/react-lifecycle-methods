import React from 'react';
import {
  Footer as BloomerFooter,
  Container,
  Content,
  Columns,
  Column
} from 'bloomer';

const Footer = () => (
  <BloomerFooter id="footer">
    <Container>
      <Content>
        <Columns>
          <Column isFull>
            <p>
              Made by <a href="https://waiyanyoon.com">Wai Yan Yoon</a>
            </p>
          </Column>
        </Columns>
        <Content isSize="small">
          <p>
            Much thanks to{' '}
            <a href="https://twitter.com/dan_abramov/status/981712092611989509">
              Dan Abramov's Tweet
            </a>{' '}
            for the original React lifecycle diagram! The diagrams included in
            this site is copied and modified from the diagram provided by Dan
            Abramov.
          </p>
          <p>
            The source code is licensed under <a target="_blank">MIT</a>.
          </p>
          <p>
            The website content is licensed under{' '}
            <a target="_blank">CC ANS 4.0</a>.
          </p>
        </Content>
      </Content>
    </Container>
  </BloomerFooter>
);

export default Footer;
