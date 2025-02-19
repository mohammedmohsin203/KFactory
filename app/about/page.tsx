import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default function About() {
  return (
    <section className="px-2 py-4">
      <h2 className="p-4 text-3xl font-medium">About Us</h2>
      <ul className="flex list-inside list-disc flex-col gap-2">
        <li>
          Established in 2003, K-Factory Enterprises has been a trusted name in
          automobile spare parts sales and service, specializing in auto rickshaws
          and motorcycles.
        </li>
        <li>
          Located at 1768, 115/1, General Kumaramangalam Colony, Perambur,
          Chennai, Tamil Nadu 600082, our facility serves as a comprehensive
          hub for all your automotive needs.
        </li>
        <li>
          At K-Factory Enterprises, we take pride in our extensive inventory of
          genuine spare parts and our expert service capabilities for both auto
          rickshaws and motorcycles. Our commitment to quality service and
          authentic parts sets us apart in the industry.
        </li>
        <li>
          Each repair and maintenance service is conducted with utmost precision
          by our team of experienced mechanics who understand the intricacies of
          auto rickshaws and motorcycles.
        </li>
        <li>
          With years of experience and expertise, we have built strong
          relationships with individual vehicle owners, fleet operators, and
          service centers across Chennai.
        </li>
        <li>
          We understand the critical nature of vehicle maintenance and repairs,
          which is why we offer efficient service turnaround times and bulk
          supply capabilities for spare parts dealers and service centers.
        </li>
        <li>
          Our dedication to customer satisfaction drives us to maintain an
          extensive inventory of genuine parts and provide expert technical
          guidance for all your automotive needs.
        </li>
        <li>
          Whether you are an auto rickshaw driver looking for reliable repairs,
          a motorcycle owner seeking quality maintenance, or a business
          requiring bulk spare parts, K-Factory Enterprises is your trusted
          partner.
        </li>
        <li>
          As a responsible business in the automotive sector, we are committed
          to proper disposal of automotive waste and promoting sustainable
          maintenance practices. We strive to provide economical solutions while
          ensuring the longevity of your vehicles.
        </li>
      </ul>
    </section>
  );
}