import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
  } from "react-icons/rx";

  import Link from 'next/link'
  
  export const ServiceData = [
    {
      icon: RxCrop,
      title: "Development",
      content: "This is Amazon Development.",
      backgroundImage: "https://www.w3schools.com/aws/images/awscert.png",
      linkTo: "/Deals"
    },
    {
      icon: RxPencil2,
      title: "Branding",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: "https://intellectualpoint.com/wp-content/uploads/2019/04/AWS-Cloud-Practitioner.jpg",
      linkTo: "/Deals"
    },
    {
      icon: RxDesktop,
      title: "Design",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: "https://kodekloud.com/community/uploads/db1265/original/3X/2/c/2c29ae1625169ad21fad71beb14faec6ff97a858.jpeg",
      linkTo: "/Deals"
    },
    {
      icon: RxReader,
      title: "Seo",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: "https://towardsthecloud.com/wp-content/uploads/aws-cloud-practitioner.webp",
      linkTo: "/Deals"
    },
    {
      icon: RxAccessibility,
      title: "Management",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: "https://media.amazonwebservices.com/blog/2017/tc_transcript_1.png",
      linkTo: "/Deals"
    },
    {
      icon: RxRocket,
      title: "Production",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: "https://miro.medium.com/v2/resize:fit:1400/1*Iq0Akc5KjUn3vre7SSMkSA.jpeg",
      linkTo: "/Deals"
    },
  ];

  {ServiceData.map((item, index) => (
    <Link href={item.linkTo} key={index}>
        <img src={item.backgroundImage} alt={item.title} />
    </Link>
  ))}