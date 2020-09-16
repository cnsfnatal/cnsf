import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { useDropzone } from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'

import { Container } from './styles'

export default function Dropzone({ onFileUploaded }) {
  const [selectedFileUrl, setSelectedFileUrl] = useState('')

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0]

      const fileUrl = URL.createObjectURL(file)

      setSelectedFileUrl(fileUrl)
      onFileUploaded(file)
    },
    [onFileUploaded]
  )
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  })

  return (
    <Container
      className="dropzone"
      {...getRootProps()}
      selectedFileUrl={selectedFileUrl}
    >
      <input {...getInputProps()} accept="image/*" />

      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Foto de Perfil" />
      ) : (
        <p>
          <FiUpload />
          Sua foto de perfil
        </p>
      )}
    </Container>
  )
}

Dropzone.propTypes = {
  onFileUploaded: PropTypes.func,
}
