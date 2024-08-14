import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Wrapper from "../Wrapper";

export function FAQ() {
  return (
    <section className="text-black">
      <Wrapper>
        <p className="text-xl ">Common Questions</p>
        <h1 className="text-3xl sm:text-5xl  font-semibold !text-[#4B1D8C]">FAQs</h1>
        <div className="max-w-[700px]">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="md:pb-5">
              <AccordionTrigger className="text-lg md:text-2xl text-left">
                Whom does Ezeemedia serve?
              </AccordionTrigger>
              <AccordionContent>
                Ezeemedia PR services are best suited for personal brands who
                are looking forward to growing their credibility and being
                consistently visible in the digital media arena.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="md:py-5">
              <AccordionTrigger className="text-lg md:text-2xl text-left">
                How is Ezeemedia different?
              </AccordionTrigger>
              <AccordionContent>
                Securing features in nationally recognized publications,
                podcasts, and TV networks is 100% guaranteed. We implement
                guarantees tailored to our client’s specific goals, ensuring the
                domination of the first page of Google with published articles
                using a powerful SEO strategy. This is a 100% done-for-you
                service, allowing you to focus on your business while we manage
                your online presence!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="md:py-5">
              <AccordionTrigger className="text-lg md:text-2xl text-left">
                What is the expected ROI?
              </AccordionTrigger>
              <AccordionContent>
                Think of it like this: A Gucci product compared to an unbranded
                item. A more credible brand provides you with the leverage to
                charge premium prices and sets you apart from competitors.
                Similarly, you gain more sales and opportunities. With
                exceptional personal branding, people begin to trust you more
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="md:py-5">
              <AccordionTrigger className="text-lg md:text-2xl text-left">
                How can I get started?
              </AccordionTrigger>
              <AccordionContent>
                It all begins with a FREE CONSULTATION CALL.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="md:py-5">
              <AccordionTrigger className="text-lg md:text-2xl text-left">
                How does Ezeemedia process the payment cycles?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  You can pay via debit card, credit card, or PayPal. Please
                  note that the debit/credit card information is verified and
                  secured by Stripe.
                </p>

                <p>
                  Yes, we boast a 99% success rate. In the event that we are
                  unable to secure placement for you, we offer a 100% money-back
                  guarantee.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Wrapper>
    </section>
  );
}
