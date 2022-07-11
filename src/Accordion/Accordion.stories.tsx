import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./Accordion";

export default { title: "Accordion" };

export const DefaultAccordion = () => {
	return (
		<Accordion type="single" defaultValue="item-1" collapsible>
			<AccordionItem value="item-1">
				<AccordionTrigger>Default Trigger type is primary</AccordionTrigger>
				<AccordionContent>Yes. It adheres to the WAI-ARAI design pattern.</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item-2">
				<AccordionTrigger triggerType={"primary"}>Is it unstyled?</AccordionTrigger>
				<AccordionContent>
					Yes. Its unstyled by default, giving you freedom over the look and feel.
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item-3">
				<AccordionTrigger triggerType={"secondary"}>Can it be animated?</AccordionTrigger>
				<AccordionContent>
					Yes! You can animate the Accordion with CSS or JavaScript.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};
