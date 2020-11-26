import React, { useState, useEffect, useCallback, ChangeEvent } from 'react'
import { FaHome } from 'react-icons/fa'

import api from '../../services/api'

import {
  Container,
  NavBar,
  Header,
  Navigation,
  NavigationButton,
  Content,
  IntroductText,
  IntroductArea,
  InputParagraph,
  InputTitle,
  CardText,
  TextCardCard,
  Slider,
  ImageContent,
  CardNumber
} from './styles'
import { FiCamera } from 'react-icons/fi'
import { useToast } from '../../hooks/toast'

interface CardTextProps {
  id: number
  tile: string
  paragraph: string
  url: string
}

interface CardNumberProps {
  id: number
  number_text: string
  paragraph: string
  url: string
}

interface ImageSliderProps {
  id: number
  url: string
}

const Dashboard: React.FC = () => {
  const { addToast } = useToast()

  const [imageSlider, setImageSlider] = useState<ImageSliderProps[]>([])
  const [titleTextIntroduct, setTitleTextIntroduct] = useState('')
  const [paragraphTextIntroduct, setParagraphTextIntroduct] = useState('')
  const [cardText, setCardText] = useState<CardTextProps[]>([])
  const [cardNumber, setCardNumber] = useState<CardNumberProps[]>([])
  const [cardTextTitle1, setCardTextTitle1] = useState('')
  const [cardTextTitle2, setCardTextTitle2] = useState('')
  const [cardTextTitle3, setCardTextTitle3] = useState('')
  const [cardTextParagraph1, setCardTextParagraph1] = useState('')
  const [cardTextParagraph2, setCardTextParagraph2] = useState('')
  const [cardTextParagraph3, setCardTextParagraph3] = useState('')
  const [cardNumberTitle1, setCardNumberTitle1] = useState('')
  const [cardNumberTitle2, setCardNumberTitle2] = useState('')
  const [cardNumberTitle3, setCardNumberTitle3] = useState('')
  const [cardNumberTitle4, setCardNumberTitle4] = useState('')
  const [cardNumberParagraph1, setCardNumberParagraph1] = useState('')
  const [cardNumberParagraph2, setCardNumberParagraph2] = useState('')
  const [cardNumberParagraph3, setCardNumberParagraph3] = useState('')
  const [cardNumberParagraph4, setCardNumberParagraph4] = useState('')

  useEffect(() => {
    async function getCardNumber() {
      const response = await api.get('/card-number')

      setCardNumber(response.data)
    }

    getCardNumber()

    function loadCardNumber() {
      setCardNumberTitle1(cardNumber[0]?.number_text)
      setCardNumberTitle2(cardNumber[1]?.number_text)
      setCardNumberTitle3(cardNumber[2]?.number_text)
      setCardNumberTitle4(cardNumber[3]?.number_text)
      setCardNumberParagraph1(cardNumber[0]?.paragraph)
      setCardNumberParagraph2(cardNumber[1]?.paragraph)
      setCardNumberParagraph3(cardNumber[2]?.paragraph)
      setCardNumberParagraph4(cardNumber[3]?.paragraph)
    }

    loadCardNumber()
  }, [])

  useEffect(() => {
    async function getImageSlider() {
      const response = await api.get('/image')

      setImageSlider(response.data)
    }

    getImageSlider()
  }, [])

  useEffect(() => {
    async function handleGetCardText() {
      const response = await api.get('/card-text')

      setCardText(response.data)
    }

    handleGetCardText()

    function loadCardText() {
      setCardTextTitle1(cardText[0]?.tile)
      setCardTextTitle2(cardText[1]?.tile)
      setCardTextTitle3(cardText[2]?.tile)

      setCardTextParagraph1(cardText[0]?.paragraph)
      setCardTextParagraph2(cardText[1]?.paragraph)
      setCardTextParagraph3(cardText[2]?.paragraph)
    }

    loadCardText()
  }, [])

  useEffect(() => {
    async function handleGetTitleTextIntroduct() {
      const response = await api.get('/introduction-text')

      setTitleTextIntroduct(response.data[0].title)
      setParagraphTextIntroduct(response.data[0].paragraph)
    }

    handleGetTitleTextIntroduct()
  }, [])

  async function handleUpdateTextIntroduct() {
    try {
      api
        .put(
          '/introduction-text',
          {
            id: 1,
            title: titleTextIntroduct,
            paragraph: paragraphTextIntroduct
          },
          { maxContentLength: 99999999999, maxBodyLength: 999999999999 }
        )
        .then(response => {
          addToast({
            type: 'success',
            title: 'Alteração realizada com sucesso'
          })
        })
    } catch (err) {
      addToast({ type: 'error', title: 'Falha ao realizar alteração' })
    }
  }

  const handleUpdateCardText = useCallback(
    async (id: number, title?: string, paragraph?: string) => {
      try {
        await api.put('/card-text', {
          id,
          title,
          paragraph
        })
        addToast({ type: 'success', title: 'Alteração realizada com sucesso' })
      } catch {
        addToast({ type: 'error', title: 'Falha ao realizar alteração' })
      }
    },
    []
  )

  async function handleDeleteImage(id: any) {
    try {
      await api.put('/image', {
        id
      })

      const response = await api.get('/image')

      setImageSlider(response.data)
      addToast({ type: 'success', title: 'Alteração realizada com sucesso' })
    } catch {
      addToast({ type: 'error', title: 'Falha ao realizar alteração' })
    }
  }

  const handleAvatarChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        try {
          const data = new FormData()

          data.append('image', e.target.files[0])

          await api.patch('/image', data)

          const response = await api.get('/image')

          setImageSlider(response.data)

          addToast({ type: 'success', title: 'Imagem adicionada com sucesso' })
        } catch {
          addToast({ type: 'error', title: 'Falha ao adicionar imagem ' })
        }
      }
    },
    []
  )

  async function handleUpdateCardNumber(
    id: number,
    number_text: string,
    paragraph: string
  ) {
    try {
      await api.put('/card-number', {
        id,
        number_text: number_text,
        paragraph
      })

      const response = await api.get('/card-number')

      setCardNumber(response.data)

      addToast({ type: 'success', title: 'Alteração realizada com sucesso' })
    } catch {
      addToast({ type: 'error', title: 'Falha ao realizar alteração' })
    }
  }

  return (
    <Container>
      <NavBar>
        <Header>
          <h1>Painel de administração - Colégio nossa senhora de fátima</h1>
        </Header>

        <Navigation>
          <NavigationButton to="/dashboard">
            <FaHome color="#efffef" size={50} />
            <strong>Início</strong>
          </NavigationButton>
        </Navigation>
      </NavBar>

      <Content>
        <IntroductText>
          <strong>Texto introdutório</strong>
          <IntroductArea>
            <InputTitle
              type="text"
              placeholder={titleTextIntroduct}
              onChange={e => {
                setTitleTextIntroduct(e.target.value)
              }}
            />
            <InputParagraph
              placeholder={paragraphTextIntroduct}
              rows={10000}
              cols={10000}
              maxLength={10000}
              onChange={e => {
                setParagraphTextIntroduct(e.target.value)
              }}
            />
          </IntroductArea>

          <button type="button" onClick={handleUpdateTextIntroduct}>
            Confirmar alterações
          </button>
        </IntroductText>

        <CardText>
          <strong>Cards de Texto</strong>

          <aside>
            <TextCardCard>
              <input
                placeholder={cardText[0] ? cardText[0].tile : ''}
                onChange={e => {
                  setCardTextTitle1(e.target.value)
                }}
              ></input>
              <img
                src={cardText[0] ? cardText[0].url : ''}
                alt={cardText[0] ? cardText[0].tile : ''}
              />

              <textarea
                placeholder={cardText[0] ? cardText[0].paragraph : ''}
                onChange={e => {
                  setCardTextParagraph1(e.target.value)
                }}
              ></textarea>

              <button
                type="button"
                onClick={() => {
                  handleUpdateCardText(
                    cardText[0].id,
                    cardTextTitle1,
                    cardTextParagraph1
                  )
                }}
              >
                Confirma alterações
              </button>
            </TextCardCard>

            <TextCardCard>
              <input
                placeholder={cardText[1] ? cardText[1].tile : ''}
                onChange={e => {
                  setCardTextTitle2(e.target.value)
                }}
              ></input>
              <img
                src={cardText[1] ? cardText[1].url : ''}
                alt={cardText[1] ? cardText[1].tile : ''}
              />

              <textarea
                placeholder={cardText[1] ? cardText[1].paragraph : ''}
                onChange={e => {
                  setCardTextParagraph2(e.target.value)
                }}
              ></textarea>

              <button
                type="button"
                onClick={() => {
                  handleUpdateCardText(
                    cardText[1].id,
                    cardTextTitle2,
                    cardTextParagraph2
                  )
                }}
              >
                Confirma alterações
              </button>
            </TextCardCard>

            <TextCardCard>
              <input
                placeholder={cardText[2] ? cardText[2].tile : ''}
                onChange={e => {
                  setCardTextTitle3(e.target.value)
                }}
              ></input>
              <img
                src={cardText[2] ? cardText[2].url : ''}
                alt={cardText[2] ? cardText[2].tile : ''}
              />

              <textarea
                placeholder={cardText[2] ? cardText[2].paragraph : ''}
                onChange={e => {
                  setCardTextParagraph3(e.target.value)
                }}
              ></textarea>

              <button
                type="button"
                onClick={() => {
                  handleUpdateCardText(
                    cardText[2].id,
                    cardTextTitle3,
                    cardTextParagraph3
                  )
                }}
              >
                Confirma alterações
              </button>
            </TextCardCard>
          </aside>
        </CardText>

        <Slider>
          <strong>Slider de imagens</strong>

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" onChange={handleAvatarChange} />
          </label>

          <aside>
            {imageSlider.map(imageSlide => (
              <ImageContent key={imageSlide.id}>
                <img src={imageSlide.url} alt={imageSlide.url} />
                <button
                  type="button"
                  onClick={() => {
                    handleDeleteImage(imageSlide.id)
                  }}
                >
                  Apagar imagem
                </button>
              </ImageContent>
            ))}
          </aside>
        </Slider>

        <CardNumber>
          <strong>Cards de números</strong>
          <aside>
            <TextCardCard>
              <img
                src={cardNumber[0] ? cardNumber[0].url : ''}
                alt={cardNumber[0] ? cardNumber[0].paragraph : ''}
              />
              <input
                placeholder={cardNumber[0] ? cardNumber[0].number_text : ''}
                onChange={e => {
                  setCardNumberTitle1(e.target.value)
                }}
              ></input>

              <textarea
                placeholder={cardNumber[0] ? cardNumber[0].paragraph : ''}
                onChange={e => {
                  setCardNumberParagraph1(e.target.value)
                }}
              ></textarea>

              <button
                type="button"
                onClick={() => {
                  handleUpdateCardNumber(
                    cardNumber[0].id,
                    cardNumberTitle1,
                    cardNumberParagraph1
                  )
                }}
              >
                Confirma alterações
              </button>
            </TextCardCard>

            <TextCardCard>
              <img
                src={cardNumber[1] ? cardNumber[1].url : ''}
                alt={cardNumber[1] ? cardNumber[1].paragraph : ''}
              />
              <input
                placeholder={cardNumber[1] ? cardNumber[1].number_text : ''}
                onChange={e => {
                  setCardNumberTitle2(e.target.value)
                }}
              ></input>

              <textarea
                placeholder={cardNumber[1] ? cardNumber[1].paragraph : ''}
                onChange={e => {
                  setCardNumberParagraph2(e.target.value)
                }}
              ></textarea>

              <button
                type="button"
                onClick={() => {
                  handleUpdateCardNumber(
                    cardNumber[1].id,
                    cardNumberTitle2,
                    cardNumberParagraph2
                  )
                }}
              >
                Confirma alterações
              </button>
            </TextCardCard>

            <TextCardCard>
              <img
                src={cardNumber[2] ? cardNumber[2].url : ''}
                alt={cardNumber[2] ? cardNumber[2].paragraph : ''}
              />
              <input
                placeholder={cardNumber[2] ? cardNumber[2].number_text : ''}
                onChange={e => {
                  setCardNumberTitle3(e.target.value)
                }}
              ></input>

              <textarea
                placeholder={cardNumber[2] ? cardNumber[2].paragraph : ''}
                onChange={e => {
                  setCardNumberParagraph3(e.target.value)
                }}
              ></textarea>

              <button
                type="button"
                onClick={() => {
                  handleUpdateCardNumber(
                    cardNumber[2].id,
                    cardNumberTitle3,
                    cardNumberParagraph3
                  )
                }}
              >
                Confirma alterações
              </button>
            </TextCardCard>

            <TextCardCard>
              <img
                src={cardNumber[3] ? cardNumber[3].url : ''}
                alt={cardNumber[3] ? cardNumber[3].paragraph : ''}
              />
              <input
                placeholder={cardNumber[3] ? cardNumber[3].number_text : ''}
                onChange={e => {
                  setCardNumberTitle4(e.target.value)
                }}
              ></input>

              <textarea
                placeholder={cardNumber[3] ? cardNumber[3].paragraph : ''}
                onChange={e => {
                  setCardNumberParagraph4(e.target.value)
                }}
              ></textarea>

              <button
                type="button"
                onClick={() => {
                  handleUpdateCardNumber(
                    cardNumber[3].id,
                    cardNumberTitle4,
                    cardNumberParagraph4
                  )
                }}
              >
                Confirma alterações
              </button>
            </TextCardCard>
          </aside>
        </CardNumber>
      </Content>
    </Container>
  )
}

export default Dashboard
