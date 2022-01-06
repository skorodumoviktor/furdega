import { FC, useRef, useState } from "react"
import { Button } from "react-bootstrap"
import ReactScrollspy from "react-scrollspy"
import { ReactComponent as DotsIcon } from "../../assets/svg/dots.svg"
import { useOnClickOutside } from "../../utils/use-on-click-outside"
import { ScrollspyAnchor } from "../../types/scrollspy-anchor"
import styles from "./scrollspy.module.scss"
import { Social } from "../social"
import { useHistory } from "react-router-dom"

type ScrollspyProps = {
  shown: boolean
  anchors: ScrollspyAnchor[]
}

const Scrollspy: FC<ScrollspyProps> = ({ shown, anchors }) => {
  const [activeId, setActiveId] = useState("")
  const [smallShown, setSmallShown] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const history = useHistory()

  useOnClickOutside(wrapperRef, () => {
    setSmallShown(false)
  })

  if (!shown) return null

  return (
    <>
      <div
        ref={wrapperRef}
        className={`${
          smallShown ? styles["wrapper-shown"] : styles["wrapper"]
        }`}
      >
        <div className="d-flex flex-column" style={{ position: "relative" }}>
          <ReactScrollspy
            items={anchors.map((anchor) => anchor.id)}
            className={`${styles["scrollspy"]}`}
            currentClassName="active"
            onUpdate={(item) => {
              setActiveId(item?.id || "")
            }}
          >
            {anchors.map((anchor, index) => {
              const isActive = activeId === anchor.id

              return (
                <li
                  key={`scrollspy-li-${index}`}
                  className={styles["scrollspy-li"]}
                >
                  <a
                    href={anchor.id === "examples" ? "" : `#${anchor.id}`}
                    className={`d-flex text-body ${
                      isActive
                        ? styles["scrollspy-link-active"]
                        : styles["scrollspy-link"]
                    }`}
                    onClick={(event) => {
                      if (anchor.id === "examples") {
                        event.preventDefault()
                        history.push("/portfolio")
                      }
                      setSmallShown(false)
                    }}
                  >
                    <span>{index + 1}</span>
                    <span
                      className={
                        isActive
                          ? styles["scrollspy-link-active-name"]
                          : styles["scrollspy-link-name"]
                      }
                    >
                      {anchor.name}
                    </span>
                  </a>
                </li>
              )
            })}
          </ReactScrollspy>

          <Button
            size="lg"
            className={`fw-demibold my-4 px-2 d-sm-block d-none ${styles.button}`}
            href="https://mrqz.me/618984d8c8ea35003f260c76"
          >
            бесплатная консультация
          </Button>

          <Social />

          <div
            className={styles["small-toggle"]}
            onClick={() => {
              setSmallShown(!smallShown)
            }}
          >
            <div>
              <DotsIcon />
            </div>
            <div className="opacity-50">меню</div>
          </div>
        </div>
      </div>

      {smallShown ? <div className={styles.backdrop}></div> : null}
    </>
  )
}

export { Scrollspy }
