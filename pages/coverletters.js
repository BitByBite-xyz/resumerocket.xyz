import { useEffect, useState } from "react";

import { Grid, Text, Spacer } from "@nextui-org/react";
import { useRouter } from "next/router";

import { onAuthStateChanged, getAuth } from "firebase/auth";
import { collection, doc, getDocs } from "firebase/firestore";
import { database } from "../config/firebaseConfig";

import CoverLetter from "../components/coverletter/CoverLetter";

export default function CoverLetters() {
  const [coverLetters, setCoverLetters] = useState([]);
  const auth = getAuth();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDocRef = doc(database, "users", auth.currentUser.uid);
        const coverLettersQuerySnapshot = await getDocs(
          collection(userDocRef, "cover_letters")
        );
        const coverLettersData = coverLettersQuerySnapshot.docs.map((doc) =>
          doc.data()
        );
        setCoverLetters(coverLettersData);
      } else {
        router.push("/login");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Grid.Container gap={2}>
      <Grid xs={12}>
        <Text h1>Cover Letters</Text>
      </Grid>
      {coverLetters.map((coverLetter) => (
        <>
          <Grid xs={12}>
            <Text h3>
              {coverLetter.jobTitle} position at {coverLetter.company}
            </Text>
          </Grid>
          <Grid xs={12} key={coverLetter.createdAt.toDate().getTime()}>
            <CoverLetter text={coverLetter.coverLetter} />
          </Grid>
          <Spacer y={1.5} />
        </>
      ))}
    </Grid.Container>
  );
}
