import Head from 'next/head'
import Image from 'next/image'
import googleLogo from '../public/google.png'
import add from '../public/add.png'
import styles from '../styles/Home.module.css'

import {
  Modal,
  Form,
  FormGroup,
  Input,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  CustomInput,
  Label
} from "reactstrap";
import { useState } from 'react'

export default function Home() {
  const [visible, setVisible] = useState(false)

  const links = [
    {
      label: 'add',
      icon: add,
    }
  ]

  const submit = () => {

  }

  function LinkBox({ label, icon }) {
    return (
      <div className={styles.tile} onClick={() => setVisible(true)}>
        <div className={styles.tileIcon}>
          <Image src={icon} alt="image"width={24} height={24} />
        </div>
        <div className={styles.tileTitle }>
          <span>{label}</span>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Image src={googleLogo} alt="Google Logo" width={272} height={92} />
      <div className={styles.searchContainer}>
        <input
          className={styles.search}
          type="search"
          placeholder="Search Google or type a URL"
        />
      </div>
      <div className={styles.tileWrap}>
        {
          links.map( (item,index) => <LinkBox key={index} {...item} />)
        }

      </div>
      <Modal
        isOpen={visible}
        toggle={() => setVisible(false)}
      >
        <ModalHeader>
          <h6 className=" modal-title" id="modal-title-default">
            Add shortcut
          </h6>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <label className=" form-control-label" htmlFor="example-search-input">
                Name
              </label>
              <Input placeholder="Name" type="text"></Input>
            </FormGroup>
            <FormGroup>
              <label className=" form-control-label" htmlFor="example-search-input">
                URL
              </label>
              <Input placeholder="URL" type="text"></Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleCustomFileBrowser">icon</Label>
              <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="Yo, pick a file!" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={() => setVisible(false)}
          >
            Close
          </Button>
          <Button
            color="primary"
            type="button"
            onClick={submit}
          >
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
