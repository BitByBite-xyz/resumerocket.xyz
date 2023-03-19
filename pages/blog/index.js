import { Grid, Text, Spacer } from "@nextui-org/react";
import BlogListItem from "../../components/blogpost/BlogListItem";

export default function Blog() {
  return (
    <Grid.Container>
      <Grid xs={12}>
        <Text h1>Blog</Text>
      </Grid>
      <Grid xs={12}>
        <Text h5>
          Unlock the Power of Your Resume with Expert Tips and Insights
        </Text>
        <Spacer y={3} />
      </Grid>
      <Grid xs={8} style={{ marginBottom: 20 }}>
        <BlogListItem
          title="5 Common Resume Mistakes That Could Be Costing You Your Dream Job"
          description="In which I attempt to calculate the remaining years of my life
                  and plan for the final act"
          image="https://www.careeraddict.com/uploads/article/58727/illustration-cv-mistakes.jpg"
        />
      </Grid>
      <Grid xs={8} style={{ marginBottom: 20 }}>
        <BlogListItem
          title="The Power of Tailoring Your Resume and Cover Letter to Each Job Application"
          description="In which I attempt to calculate the remaining years of my life
                  and plan for the final act"
          image="https://www.thebalancemoney.com/thmb/vhtGaPLgH3h4EooODXKIs3M_iCI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cropped-hand-of-manager-writing-over-resume-at-office-1214886799-4232997ed47c459ebc29a2eafcd64468.jpg"
        />
      </Grid>
      <Grid xs={8} style={{ marginBottom: 20 }}>
        <BlogListItem
          title="Why Hiring a Professional Resume and Cover Letter Writer is Worth the Investment"
          description="In which I attempt to calculate the remaining years of my life
                  and plan for the final act"
          image="https://www.mediabistro.com/wp-content/uploads/2016/02/getting-your-resume-into-human-hands.jpg"
        />
      </Grid>
      <Grid xs={8} style={{ marginBottom: 20 }}>
        <BlogListItem
          title="How to Address Employment Gaps in Your Resume and Cover Letter"
          description="In which I attempt to calculate the remaining years of my life
                  and plan for the final act"
          image="https://cdn.aarp.net/content/dam/aarp/work/job-search/2020/06/1140-resume-employment-history.jpg"
        />
      </Grid>
    </Grid.Container>
  );
}
