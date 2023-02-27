import { Card, Grid, Text, Spacer } from "@nextui-org/react";

export default function Blog() {
  return (
    <Card>
      <Card.Body style={{ paddingLeft: 45, paddingTop: 30, marginBottom: 30 }}>
        <Grid.Container>
          <Grid xs={8}>
            <Text h1>
              5 common resume mistakes that could be costing you your dream job
            </Text>
          </Grid>
          <Grid xs={8}>
            <Text p size="$lg">
              When it comes to landing your dream job, your resume is often the
              first impression you'll make on potential employers. It's
              essential to ensure that your resume presents your qualifications,
              skills, and achievements in the best possible light. However, even
              the smallest errors or mistakes can cost you the job you've been
              dreaming of. Here are five common resume mistakes that could be
              costing you your dream job.
              <br />
              <br />
              <b>
                1. Typos and Grammatical Errors <br />
              </b>
              <br />
              Typos and grammatical errors are the most common resume mistakes
              that job seekers make. Such errors can make you appear careless
              and unprofessional. Make sure you proofread your resume multiple
              times to catch any mistakes before you submit it. It is also
              helpful to ask someone else to review your resume for you, as a
              fresh pair of eyes can spot errors that you might have missed.
              <br />
              <br />
              <b>
                2. Lack of Focus <br />
              </b>
              <br />A common mistake that many job seekers make is trying to
              appeal to too many job openings with a single resume. A scattered
              or unfocused resume can give the impression that you lack
              direction or are unsure of what you want. Instead, tailor your
              resume to the specific job you're applying for. Customize it by
              highlighting relevant skills and experiences that match the job
              requirements. This will show employers that you're focused and
              have the skills they're looking for.
              <br />
              <br />
              <b>3. Including Irrelevant Information</b>
              <br />
              <br />
              While you want your resume to be comprehensive, including
              irrelevant information can work against you. For instance, it's
              not necessary to include your high school achievements if you've
              already graduated from college. Similarly, if you're applying for
              a job in marketing, your experience in retail sales may not be
              relevant. Keep your resume focused on the skills and experiences
              that are relevant to the job you're applying for.
              <br />
              <br />
              <b>4. Using Buzzwords and Clichés</b>
              <br />
              <br />
              Using buzzwords and clichés can be tempting, but it can also make
              your resume appear generic and unremarkable. Words like "team
              player" and "detail-oriented" are so overused that they've lost
              their meaning. Instead, focus on specific achievements that
              showcase your skills. For instance, rather than saying you're a
              "problem solver," provide examples of how you solved a particular
              problem or challenge in your previous job.
              <br />
              <br />
              <b>5. Lack of Quantifiable Results</b>
              <br />
              <br />
              Employers want to see measurable results on your resume. They want
              to know what you achieved and how you contributed to your previous
              organization's success. Including quantifiable results in your
              resume, such as revenue growth, percentage increase in sales, or
              cost savings, can give potential employers a clear idea of what
              you can bring to their organization.
            </Text>
            <Spacer y={3} />
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
  );
}
