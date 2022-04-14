import { Button, Flex, Grid, Heading, Text } from "@buildarea-ui/react";

function App() {
  return (
    <Flex align="center" dir="column">
      <Heading 
        css={{
          fontVariant: 'all-small-caps',
          marginTop: '$4',
          textAlign: 'center'
        }}
        fontSize="4"
      >
        This awesome website is build using buildarea ui.
      </Heading>
      <Button size="sm" css={{
        marginBottom: '$2',
        cursor: 'pointer',
        padding: '$3'
      }}>
        Awesome Button
      </Button>
      <a href="https://sb.buildarea-ui.com/">Learn BuildArea UI</a>
      <Grid>
        <Text css={{
            color: '$secondary'
          }}
          fontSize="xl"
        >
          Components currently available:
        </Text>
        <ul>
          <li>Box</li>
          <li>Button</li>
          <li>Flex</li>
          <li>Heading</li>
          <li>Paragraph</li>
          <li>Span</li>
        </ul>
      </Grid>
    </Flex>
  );
}

export default App;
