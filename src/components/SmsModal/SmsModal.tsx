import {
  Button,
  Modal,
  ModalContent,
  ModalProps,
  ModalTitle,
  Label,
  PhoneInputField,
  TextField,
} from "@admiral-ds/react-ui";
import { Form, Formik, FastField } from "formik";
import React, { FC } from "react";
import Styled from "./SmsModal.styles";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  phone: Yup.string().test(
    "phone",
    "Некорректное значение телефона",
    (val) => !val || val.replaceAll(" ", "").length >= 8
  ),
  message: Yup.string().required("Сообщение не должно быть пустым"),
});

export const SmsModal: FC<ModalProps & { onSubmit?: (data: any) => void }> = (
  props
) => {
  const getValidStatus = (error, touched) => {
    if (touched) {
      return error ? "error" : "success";
    }
    return undefined;
  };

  return (
    <Modal dimension="xl" {...props}>
      <ModalTitle>Отправка SMS</ModalTitle>
      <ModalContent>
        <Styled.Form>
          <Formik
            initialValues={{ phone: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                props.onClose!();
              }, 400);
            }}
          >
            {({ values, errors, isSubmitting }) => (
              <Form>
                <Styled.FormField>
                  <Label>Номер телефона</Label>
                  <FastField name="phone">
                    {({ field, meta }) => (
                      <PhoneInputField
                        {...field}
                        defaultCountry="RUS"
                        dimension="s"
                        status={getValidStatus(meta.error, meta.touched)}
                        extraText={meta.touched && meta.error}
                      />
                    )}
                  </FastField>
                </Styled.FormField>

                <Styled.FormField>
                  <Label>Сообщение</Label>

                  <FastField name="message">
                    {({ field, meta }) => (
                      <TextField
                        {...field}
                        dimension="s"
                        status={getValidStatus(meta.error, meta.touched)}
                        extraText={meta.touched && meta.error}
                      />
                    )}
                  </FastField>
                </Styled.FormField>

                <Styled.Controls>
                  <Button
                    appearance="secondary"
                    type="submit"
                    dimension="s"
                    disabled={isSubmitting}
                  >
                    Отправить
                  </Button>
                </Styled.Controls>
              </Form>
            )}
          </Formik>
        </Styled.Form>
      </ModalContent>
    </Modal>
  );
};
