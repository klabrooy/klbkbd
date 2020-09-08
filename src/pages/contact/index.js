import Layout from '../../components/Layout'
import React from 'react'
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleCheckboxChange = (e) => {
    this.setState({ [e.target.name]: document.getElementById(e.target.name).checked })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="contact-form">
              <h1>Get in touch</h1>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'instantMessaging'}>
                    Preffered communication platform and username (recommended, for speedy communication)
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'instantMessaging'}
                      name={'instantMessaging'}
                      onChange={this.handleChange}
                      id={'instantMessaging'}
                      required={false}
                      placeholder='[reddit / discord / instagram]: [your username]'
                    />
                  </div>
                </div>
                <div className='field'>
                  <fieldset >
                    <legend>Please select one or more message subjects</legend>
                    <div>
                      <input type='checkbox' id='switchLubing' name='switchLubing' value='switchLubing' onChange={this.handleCheckboxChange}
                      />
                      <label for='switchLubing'>Switch lubing</label>
                    </div>
                    <div>
                      <input type='checkbox' id='switchFilming' name='switchFilming' value='switchFilming' onChange={this.handleCheckboxChange}
                      />
                      <label for='switchFilming'>Switch filming</label>
                    </div>
                    <div>
                      <input type='checkbox' id='partSourcing' name='partSourcing' value='partSourcing' onChange={this.handleCheckboxChange}
                      />
                      <label for='partSourcing'>Part sourcing</label>
                    </div>
                    <div>
                      <input type='checkbox' id='keyboardAssembly' name='keyboardAssembly' value='keyboardAssembly' onChange={this.handleCheckboxChange}
                      />
                      <label for='keyboardAssembly'>Keyboard assembly</label>
                    </div>
                    <div>
                      <input type='checkbox' id='generalEnquiry' name='generalEnquiry' value='generalEnquiry' onChange={this.handleCheckboxChange}
                      />
                      <label for='generalEnquiry'>General enquiry</label>
                    </div>
                  </fieldset>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
