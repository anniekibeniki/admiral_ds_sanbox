import React from "react";
import Styled, {
  accordionMixin,
  accordionTitleMixin,
} from "./ClientPage.styles";
import { SubMenu } from "components/SubMenu/SubMenu";
import { ClientCardHead } from "./ClientCardHead/ClientCardHead";
import { Accordion, AccordionItem } from "@admiral-ds/react-ui";
import { FinanceInfo } from "./FinanceInfo/FinanceInfo";
import { CommonInfo } from "./CommonInfo/CommonInfo";

export const ClientPage = () => {
  return (
    <Styled.ClientPage>
      <SubMenu />
      <Styled.Main>
        <ClientCardHead />
        <Accordion hideTopDivider iconPosition="left" css={accordionMixin}>
          <AccordionItem
            title="Общая информация"
            defaultExpanded
            css={accordionTitleMixin}
          >
            <CommonInfo />
          </AccordionItem>

          <AccordionItem
            title="Финансовые параметры"
            defaultExpanded
            css={accordionTitleMixin}
          >
            <FinanceInfo />
          </AccordionItem>

          <AccordionItem
            title="Дополнительная информация"
            defaultExpanded
            css={accordionTitleMixin}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            culpa fugit porro molestiae quo recusandae incidunt ab suscipit rem
            quibusdam tempora pariatur, quisquam perspiciatis illo totam
            similique minus harum nihil. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Officiis dolore ratione magnam blanditiis
            distinctio, porro, accusantium praesentium est accusamus, tenetur
            rerum harum libero cum corrupti consequuntur. Quod necessitatibus
            excepturi ab?
          </AccordionItem>
        </Accordion>
      </Styled.Main>
    </Styled.ClientPage>
  );
};
