import { Dispatch, FC, SetStateAction } from "react"
import { Col, Row, Button, Image } from "react-bootstrap"

import { AdminSectionMode } from "../../../../const/admin"
import { MainHomeSectionResponse } from "../../../../types/home/main"
import { ReactComponent as YellowSnakeIcon } from "../../../../assets/svg/yellow-snake.svg"

type ViewProps = {
  data: MainHomeSectionResponse
  setMode: Dispatch<SetStateAction<AdminSectionMode>>
}

const View: FC<ViewProps> = ({ data, setMode }) => {
  const isDataEmpty = Object.values(data).every((val) => val === null)

  if (isDataEmpty)
    return (
      <Button
        size="lg"
        onClick={() => {
          setMode(AdminSectionMode.edit)
        }}
      >
        Создать
      </Button>
    )

  const { header, image } = data

  return (
    <Row className="flex-column gy-3">
      <Col className="d-flex justify-content-end">
        <Button
          onClick={() => {
            setMode(AdminSectionMode.edit)
          }}
        >
          Редактировать
        </Button>
      </Col>

      <Col>
        <h4 className="fw-bold">Заголовок секции</h4>
        <div>{header}</div>
      </Col>

      <Col>
        <YellowSnakeIcon />
      </Col>

      <Col>
        <h4 className="fw-bold">Изображение</h4>
        <Image fluid src={image?.imageUrl} />
      </Col>
    </Row>
  )
}

export { View }
