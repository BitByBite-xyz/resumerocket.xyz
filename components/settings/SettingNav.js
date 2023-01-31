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
      <Button onPress={() => router.push("/account")}>
        {pathname === "/account" ? (
          <b style={{ fontWeight: 800 }}>Account</b>
        ) : (
          "Account"
        )}
      </Button>
      <Button onPress={() => router.push("/billing")}>
        {pathname === "/billing" ? (
          <b style={{ fontWeight: 800 }}>Billing</b>
        ) : (
          "Billing"
        )}
      </Button>
      <Button onPress={() => router.push("/settings")}>
        {pathname === "/settings" ? (
          <b style={{ fontWeight: 800 }}>Settings</b>
        ) : (
          "Settings"
        )}
      </Button>
    </Button.Group>
  );
}
