import { Button, Footer, FooterTab, Icon, Text } from "native-base";
import React from "react";

export default function Nav() {
  return (
    <Footer style={{ zIndex: 1000 }}>
      <FooterTab>
        <Button vertical>
          <Icon type="FontAwesome" name="book" />
          <Text>Apps</Text>
        </Button>
        <Button vertical>
          <Icon type="FontAwesome" name="calendar-check-o" />
          <Text>Camera</Text>
        </Button>
        <Button vertical>
          <Icon type="FontAwesome" name="list-alt" />
          <Text>Navigate</Text>
        </Button>
        <Button vertical>
          <Icon name="person" />
          <Text>Contact</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}
