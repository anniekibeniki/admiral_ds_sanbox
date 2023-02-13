import { CheckboxField, Label, Link, T, TabMenu } from "@admiral-ds/react-ui";
import React, { useState } from "react";
import Styled from "./CommonInfo.styles";
import { ReactComponent as LockSolid } from "@admiral-ds/icons/build/security/LockSolid.svg";

export const CommonInfo = () => {
  const [selected, setSelected] = useState<string>("1");
  const tabs = [
    {
      id: "1",
      content: "Тип контрагента",
    },
    {
      id: "2",
      content: "Адреса",
    },
    {
      id: "3",
      content: "Реквизиты",
      badge: 5,
    },
  ];

  const onChangeTab = (id: string) => {
    setSelected(id);
    console.warn(`selected: ${id}`);
  };

  const renderLockIcon = () => {
    return <LockSolid />;
  };

  return (
    <>
      <TabMenu activeTab={selected} onChange={onChangeTab} tabs={tabs} />
      <Styled.TabContent>
        {selected === "1" && (
          <div style={{ display: "flex" }}>
            <div style={{ width: "30%" }}>
              <Styled.Field>
                <Label>Лизингополучатель</Label>
                <CheckboxField dimension="s" defaultChecked>
                  &nbsp;
                </CheckboxField>
              </Styled.Field>
              <Styled.Field>
                <Label>Поставщик легкового транспорта</Label>
                <CheckboxField dimension="s" defaultChecked disabled />
              </Styled.Field>
            </div>
            <div style={{ width: "30%" }}>
              <Styled.Field>
                <Label>Годовой доход</Label>
                <T font="Body/Body 2 Short" as="div">
                  --
                </T>
              </Styled.Field>
              <Styled.Field>
                <Label>Состояние контрагента</Label>
                <T font="Body/Body 2 Short" as="div">
                  В работе
                </T>
              </Styled.Field>
            </div>
            <div style={{ width: "30%" }}>
              <Styled.Field>
                <Label>Комментарий к БП</Label>
                <T font="Body/Body 2 Short" as="div">
                  Тест коммент к БП
                </T>
              </Styled.Field>
              <Styled.Field>
                <Label>Ответственный за поставщика</Label>
                <Link href="#" dimension="s">
                  Тестовый Тест Тестович
                </Link>
              </Styled.Field>
            </div>
          </div>
        )}
        {selected === "2" && (
          <div>
            <Styled.Field>
              <Label>Фактический адрес</Label>
              <Link href="#" dimension="s">
                г. Москва, ул. Золоторожский Вал, д. 11, помещение А56
              </Link>
            </Styled.Field>
            <Styled.Field>
              <Label>Юридический адрес</Label>
              <Link href="#" dimension="s">
                {" "}
                г. Москва, ул. Золоторожский Вал, д. 11, помещение А56
              </Link>
            </Styled.Field>
            <Styled.Field>
              <Label>Совпадает с фактическим</Label>
              <CheckboxField dimension="s" defaultChecked>
                &nbsp;
              </CheckboxField>
            </Styled.Field>
          </div>
        )}
        {selected === "3" && <div>no data</div>}
      </Styled.TabContent>
    </>
  );
};
