import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function SettingNav(props) {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Button.Group
      style={{ position: "fixed", marginTop: 30 }}
      size="lg"
      vertical
      flat
    >
      <Button onPress={() => router.push("/account")}>Acccount</Button>
      <Button onPress={() => router.push("/billing")}>Billing</Button>
      <Button onPress={() => router.push("/settings")}>Settings</Button>
    </Button.Group>
  );
}
