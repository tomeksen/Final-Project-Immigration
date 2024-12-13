'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@clerk/nextjs";
import { Edit2, Plus, Save, X } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  isEditing?: boolean;
}

const faqPage = () => {
  const user = useUser();
  const isAdminUser = user.user?.publicMetadata?.role ? user.user?.publicMetadata?.role === "admin" : false;
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      id: "item-1",
      question: "What are the types of visas available for Canada?",
      answer: `
        <p class="mb-3">
          Canada offers several types of visas depending on the purpose of your visit. The most common types include:
        </p>
        <ul class="space-y-2 list-disc pl-5">
          <li>
            <span class="font-medium">Visitor Visa (Temporary Resident Visa):</span> For tourists, family visits, or business trips.
          </li>
          <li>
            <span class="font-medium">Student Visa:</span> For those who wish to study at a Canadian educational institution.
          </li>
          <li>
            <span class="font-medium">Work Visa:</span> For individuals who have a job offer from a Canadian employer.
          </li>
          <li>
            <span class="font-medium">Permanent Resident Visa:</span> For those looking to immigrate to Canada permanently.
          </li>
          <li>
            <span class="font-medium">Transit Visa:</span> For travelers passing through Canada on their way to another destination.
          </li>
        </ul>
      `
    },
    {
      id: "item-2",
      question: "How long does it take to process a Canadian visa application?",
      answer: `
        <p class="mb-3">
          The processing time for a Canadian visa varies depending on the type of visa you are applying for and the country from which you are applying. On average:
        </p>
        <ul class="space-y-2 list-disc pl-5">
          <li>
            <span class="font-medium">Visitor Visa:</span> Typically takes between 14 to 30 days.
          </li>
          <li>
            <span class="font-medium">Student Visa:</span> Can take between 4 to 8 weeks.
          </li>
          <li>
            <span class="font-medium">Work Visa:</span> Generally processed within 4 to 8 weeks.
          </li>
          <li>
            <span class="font-medium">Permanent Resident Visa:</span> The process can take several months to over a year, depending on the specific immigration program and your individual circumstances.
          </li>
        </ul>
        <p class="mt-3">
          It's important to apply well in advance of your planned travel date to ensure timely processing.
        </p>
      `
    },
    {
      id: "item-3",
      question: "What should I do if my Canada visa application is refused?",
      answer: `
        <p class="mb-3">
          If your Canada visa application is refused, you have several options:
        </p>
        <ul class="space-y-2 list-disc pl-5">
          <li>
            <span class="font-medium">Review the refusal letter:</span> Carefully read the reasons for refusal provided in the letter from Immigration, Refugees and Citizenship Canada (IRCC).
          </li>
          <li>
            <span class="font-medium">Address the concerns:</span> If possible, gather additional documentation or information to address the reasons for refusal.
          </li>
          <li>
            <span class="font-medium">Reapply:</span> You can submit a new application, ensuring you've addressed the concerns raised in the refusal letter.
          </li>
          <li>
            <span class="font-medium">Appeal the decision:</span> In some cases, you may be able to appeal the decision to the Immigration Appeal Division (IAD) of the Immigration and Refugee Board of Canada.
          </li>
          <li>
            <span class="font-medium">Seek legal advice:</span> Consider consulting with a Canadian immigration lawyer or registered consultant for guidance on your specific case.
          </li>
        </ul>
        <p class="mt-3">
          Remember, each case is unique, and the best course of action depends on your individual circumstances and the specific reasons for refusal.
        </p>
      `
    }
  ]);

  const addNewFAQ = () => {
    const newFAQ: FAQItem = {
      id: `item-${faqs.length + 1}`,
      question: "New FAQ Question",
      answer: "New FAQ Answer",
      isEditing: true
    };
    setFaqs([...faqs, newFAQ]);
  };

  const updateFAQ = (id: string, field: 'question' | 'answer', value: string) => {
    setFaqs(faqs.map(faq => 
      faq.id === id ? { ...faq, [field]: value } : faq
    ));
  };

  const toggleEdit = (id: string) => {
    setFaqs(faqs.map(faq => 
      faq.id === id ? { ...faq, isEditing: !faq.isEditing } : faq
    ));
  };

  return (
    <div className="h-full p-6 bg-gray-100 rounded-lg">
      {isAdminUser ? (
        <div>
        <h1 className="text-2xl font-semibold mb-6">FAQ</h1>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border rounded-lg  bg-white px-6">
              <AccordionTrigger className="hover:no-underline py-4 text-left">
                {faq.isEditing ? (
                  <Input
                    value={faq.question}
                    onChange={(e) => updateFAQ(faq.id, 'question', e.target.value)}
                    className="w-full text-base font-medium"
                  />
                ) : (
                  <span className="text-base font-medium">{faq.question}</span>
                )}
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2 text-sm leading-relaxed">
                {faq.isEditing ? (
                  <Textarea
                    value={faq.answer}
                    onChange={(e) => updateFAQ(faq.id, 'answer', e.target.value)}
                    className="w-full min-h-[100px]"
                  />
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                )}
                <div className="mt-4 flex justify-end space-x-2">
                  {faq.isEditing ? (
                    <>
                      <Button size="sm" variant="outline" onClick={() => toggleEdit(faq.id)}>
                        <Save className="w-4 h-4 mr-2" />
                        Save
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => toggleEdit(faq.id)}>
                        <X className="w-4 h-4 mr-2" />
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <Button size="sm" variant="outline" onClick={() => toggleEdit(faq.id)}>
                      <Edit2 className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-6">
          <Button className="w-full sm:w-auto" onClick={addNewFAQ}>
            <Plus className="w-4 h-4 mr-2" />
            Add New FAQ
          </Button>
        </div>
      </div>
      ) : (
        <div>
        <h1 className="h-full text-2xl font-semibold mb-6">FAQ</h1>
          <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border rounded-lg bg-white px-6">
              <AccordionTrigger className="hover:no-underline py-4 text-left">
                <span className="text-base font-medium">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2 text-sm leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
          
        </div>
      )}
    </div>
  );
};
  
export default faqPage  ;
