import { editRifa } from '../axios/apiRifas'
import { FormEditRifa } from './Forms'

const FormFormik = ({ dataRifa, indexArr, closeModal }) => {
  const handleSubmit = (values) => {
    const body = {
      paid: values.paid,
      name: values.name,
      number: indexArr,
    }
    console.log(body)
    editRifa(
      dataRifa._id,
      body,
      closeModal,
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    )
  }

  return (
    <>
      <FormEditRifa
        dataRifa={dataRifa}
        indexArr={indexArr}
        handleSubmit={handleSubmit}
        closeModal={closeModal}
      />
    </>
  )
}

export default FormFormik
