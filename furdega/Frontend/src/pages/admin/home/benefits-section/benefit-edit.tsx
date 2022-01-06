import { FC } from "react"
import { Col, Form, Row } from "react-bootstrap"

import { CompanyBenefitResponse } from "../../../../types/home/benefits"
import { FormInputEvent } from "../../../../types/utils"
import { fileToBase64 } from "../../../../utils/file-to-base64"

type BenefitEditProps = {
  value: CompanyBenefitResponse
  onChange: (
    newBenefit: CompanyBenefitResponse,
    newImageBase64?: string
  ) => void
}

const BenefitEdit: FC<BenefitEditProps> = ({ value, onChange }) => {
  const onImageChange = async (event: FormInputEvent) => {
    const files = (event.currentTarget as HTMLInputElement).files
    if (!files) return null

    const file = files[0]
    const fileUrl = URL.createObjectURL(file)
    const base64 = await fileToBase64(file)

    onChange(
      {
        ...value,
        image: { ...value.image, imageUrl: fileUrl },
      },
      base64
    )
  }

  return (
    <Row className="flex-column gy-3">
      <Col>
        <Form.Group>
          <Form.Label>Заголовок</Form.Label>
          <Form.Control
            type="text"
            value={value.title}
            onChange={(e) => {
              onChange({
                ...value,
                title: e.target.value,
              })
            }}
          />
        </Form.Group>
      </Col>

      <Col>
        <Form.Group>
          <Form.Label>Описание</Form.Label>
          <Form.Control
            type="input"
            value={value.description}
            onChange={(e) => {
              onChange({
                ...value,
                description: e.target.value,
              })
            }}
          />
        </Form.Group>
      </Col>

      <Col>
        <Form.Label>Изображение</Form.Label>

        <Row className="flex-column gy-2">
          <Col>
            <img
              src={value.image?.imageUrl}
              alt=""
              className="img-fluid w-100"
            />
          </Col>

          <Col>
            <Form.Control
              type="file"
              accept=".jpeg, .jpg, .png"
              onChange={onImageChange}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export { BenefitEdit }
