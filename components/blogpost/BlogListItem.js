import { Card, Link, Text, Row, Spacer } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function CheckoutForm(props) {
  const router = useRouter();

  return (
    <Card>
      <Link onClick={() => router.push("/blog/test")}>
        <Card.Body style={{ paddingLeft: 25 }}>
          <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
            <div style={{ float: "left", width: "65%", paddingRight: 30 }}>
              <Row>
                <Text h3 style={{ fontWeight: 675 }}>
                  {props.title}
                </Text>
              </Row>
              <Row>
                <Text>{props.description}</Text>
              </Row>
              <Spacer y={1} />
              <Row>
                <Text h6>Feb 13th · 3 min read</Text>
              </Row>
            </div>
            <div
              style={{
                float: "right",
                width: "35%",
                height: "100%",
                paddingRight: 20,
              }}
            >
              <img
                src={props.image}
                alt="your image"
                style={{ height: "100%", borderRadius: 10 }}
              />
            </div>
          </div>
        </Card.Body>
      </Link>
    </Card>
  );
}
