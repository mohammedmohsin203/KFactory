import { OWNER_EMAIL } from "@/lib/constants";

export default function ReturnRefundPolicy() {
  return (
    <section className="flex flex-col gap-2 px-2 py-4">
      <h2 className="p-4 text-3xl font-medium">Return and Refund Policy 📋</h2>

      <section>
        <h3 className="p-2 text-2xl">Important Notice ⚠️</h3>
        <p className="p-2">
          At K-Factory Enterprises, we kindly request our valued customers to carefully
          examine all product details, specifications, and images before making a purchase.
          As we strive to maintain quality and transparency, we want to ensure you make
          well-informed decisions. Please note that we maintain a strict no-refund policy
          to ensure business sustainability and maintain our competitive pricing.
        </p>
      </section>

      <section>
        <h3 className="p-2 text-2xl">Quality Products 🌟</h3>
        <p className="p-2">
          At K-Factory Enterprises, we take immense pride in delivering high-quality
          products. Each item undergoes thorough quality checks before dispatch. We
          encourage you to review product specifications, dimensions, and materials
          thoroughly before placing your order.
        </p>
      </section>

      <section>
        <h3 className="p-2 text-2xl">Product Inspection 🔍</h3>
        <p className="p-2">
          To ensure complete satisfaction, we recommend:
        </p>
        <ul className="list-disc p-2">
          <li>Carefully reviewing all product images and descriptions</li>
          <li>Checking product dimensions and specifications</li>
          <li>Reading through material descriptions and care instructions</li>
          <li>Contacting our support team for any clarifications before purchase</li>
        </ul>
      </section>

      <section>
        <h3 className="p-2 text-2xl">In the Uncommon Occurrence That ⚡</h3>
        <ul className="list-disc p-2">
          <li>
            Wrong product has been delivered to you (i.e., the product differs significantly
            from what was ordered)
          </li>
          <li>The product received has manufacturing defects</li>
          <li>
            Please note: Minor variations in appearance due to display settings or
            manufacturing processes are considered normal and not grounds for return
          </li>
        </ul>
      </section>

      <section>
        <h3 className="p-2 text-2xl">Contact Process 📞</h3>
        <p className="p-2">
          If you receive a wrong product, please notify us within 24 hours:
        </p>
        <ol className="list-disc p-2">
          <li>
            Send an email to{" "}
            <a href={`mailto:${OWNER_EMAIL}`}>${OWNER_EMAIL}</a> with clear photos
            of the received product
          </li>
          <li>
            Include your order number and detailed description of the issue
          </li>
        </ol>
      </section>

      <section>
        <h3 className="p-2 text-2xl">Resolution Process 🤝</h3>
        <p className="p-2">
          Our team will review your case within 48 hours and provide appropriate
          resolution. Please note that:
        </p>
        <ul className="list-disc p-2">
          <li>
            Product replacement guidance will only be considered in cases of wrong product
            delivery or manufacturing defects
          </li>
          <li>
            All decisions regarding product issues will be made at the discretion
            of K-Factory Enterprises management
          </li>
          <li>
            Transportation costs for any authorized returns will be borne by the customer
          </li>
        </ul>
      </section>

      <section>
        <h3 className="p-2 text-2xl">Customer Support 💫</h3>
        <p className="p-2">
          Our dedicated customer support team is available to assist you with any
          pre-purchase queries. We encourage you to reach out to us for any
          clarifications before placing your order to ensure a satisfactory
          shopping experience.
        </p>
      </section>

      <section>
        <h3 className="p-2 text-2xl">Final Note 📝</h3>
        <p className="p-2">
          By placing an order with K-Factory Enterprises, you acknowledge that you
          have read, understood, and agreed to our no-refund policy. We remain
          committed to providing you with quality products and excellent service.
        </p>
      </section>
    </section>
  );
}