import { Box } from "../components/layout/Box.js";
import { Text, Spacer } from "@nextui-org/react";
import FileUpload from "../components/fileupload/FileUpload.js";
import CLForm from "../components/form/CLForm.js";

export default function Home() {
  return (
    <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
      <Text h1>Create Cover Letter</Text>
      <Spacer y={1.5} />
      <FileUpload />
      <Spacer y={1.5} />
      <CLForm />
      <Text size="$lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis
        blandit turpis. Augue neque gravida in fermentum et sollicitudin ac
        orci. Et sollicitudin ac orci phasellus egestas. Elementum tempus
        egestas sed sed risus pretium quam vulputate. Interdum velit euismod in
        pellentesque massa placerat duis ultricies.
      </Text>
      <Text size="$lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis
        blandit turpis. Augue neque gravida in fermentum et sollicitudin ac
        orci. Et sollicitudin ac orci phasellus egestas. Elementum tempus
        egestas sed sed risus pretium quam vulputate. Interdum velit euismod in
        pellentesque massa placerat duis ultricies. Elementum tempus egestas sed
        sed risus pretium quam vulputate. Interdum velit euismod in pellentesque
        massa placerat duis ultricies.
      </Text>
    </Box>
  );
}
