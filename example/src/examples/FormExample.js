import React, { Component } from 'react';

import {
  Checkbox,
  FormBox,
  FormItem,
  FormLabel,
  FormRow,
  Grid,
  Radio,
  Spacer,
  Select,
  Textarea,
  Textfield,
  Datepicker,
  FileSelect,
} from 'orbit-style';

export default class FormExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      lastName: '',
      zipCode: '',
      address: '',
      number: '',
      complement: '',
      message: '',
      list: null,
      listMultiple: null,
      listSource: null,
      listSourceMultiple: null,
      date: [],
      dateWithTime: [],
      file: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, callback) {
    const {
      name,
      type,
      value,
      checked,
      files,
    } = e.target;

    let val;
    switch (type) {
      case 'checkbox':
        val = checked;
        break;
      case 'file':
        val = files[0]; //eslint-disable-line
        break;
      default:
        val = value;
    }

    this.setState({ [name]: val }, callback);
  }

  render () {
    const {
      name,
      lastName,
      zipCode,
      address,
      number,
      complement,
      message,
      list,
      listMultiple,
      listSource,
      listSourceMultiple,
      date,
      dateWithTime,
      time,
    } = this.state;
    return (
      <Grid fluid>
        <Spacer mtLg={2} mtMd={2}>
          <FormBox>
            <FormRow>
              <FormItem>
                <FileSelect name="file" onChange={this.handleChange} />
                <FormLabel htmlFor="file">Arquivo</FormLabel>
              </FormItem>
            </FormRow>
          </FormBox>
        </Spacer>
        <Spacer mtLg={2} mtMd={2}>
          <FormBox>
            <FormRow>
              <FormItem>
                <Textfield name="name" value={name} onChange={this.handleChange} />
                <FormLabel htmlFor="name">Name</FormLabel>
              </FormItem>
            </FormRow>
            <FormRow>
              <FormItem>
                <Textfield name="lastName" value={lastName} onChange={this.handleChange} />
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
              </FormItem>
            </FormRow>
          </FormBox>
        </Spacer>
        <Spacer mtLg={2} mtMd={2}>
          <FormBox>
            <FormRow>
              <FormItem lg={2} md={4} sm={6}>
                <Textfield name="zipCode" value={zipCode} onChange={this.handleChange} mask="99999-999" />
                <FormLabel htmlFor="zipCode">ZipCode</FormLabel>
              </FormItem>
              <FormItem lg={4} md={8} sm={6}>
                <Textfield name="address" value={address} onChange={this.handleChange} />
                <FormLabel htmlFor="address">Address</FormLabel>
              </FormItem>
              <FormItem lg={3} md={6}>
                <Textfield type="number" name="number" value={number} onChange={this.handleChange} />
                <FormLabel htmlFor="number">Number</FormLabel>
              </FormItem>
              <FormItem lg={3} md={6}>
                <Textfield name="complement" value={complement} onChange={this.handleChange} />
                <FormLabel htmlFor="complement">Complement</FormLabel>
              </FormItem>
            </FormRow>
          </FormBox>
        </Spacer>
        <Spacer mtLg={2} mtMd={2}>
          <FormBox>
            <FormRow>
              <FormItem>
                <Textarea name="message" value={message} onChange={this.handleChange} rows={1} />
                <FormLabel htmlFor="message">Message</FormLabel>
              </FormItem>
            </FormRow>
          </FormBox>
        </Spacer>
        <Spacer mtLg={2} mtMd={2}>
          <FormBox>
            <FormRow>
              <FormItem>
                <Select
                  name="list"
                  options={[
                    { label: 'Option 1', value: '1' },
                    { label: 'Option 2', value: '2' },
                    { label: 'Option 3', value: '3' },
                  ]}
                  value={list}
                  onChange={this.handleChange}
                />
                <FormLabel htmlFor="list">List</FormLabel>
              </FormItem>
              <FormItem>
                <Select
                  name="listMultiple"
                  options={[
                    { label: 'Option 1', value: '1' },
                    { label: 'Option 2', value: '2' },
                    { label: 'Option 3', value: '3' },
                  ]}
                  value={listMultiple}
                  onChange={this.handleChange}
                  multiple
                />
                <FormLabel htmlFor="listMultiple">List Multiple</FormLabel>
              </FormItem>
            </FormRow>
            <FormRow>
              <FormItem>
                <Select
                  name="listSource"
                  value={listSource}
                  onChange={this.handleChange}
                  async
                  asyncData={(inputValue) => {
                    const data = [{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }, { value: 'c', label: 'C' }];
                    return new Promise((resolve) => {
                      setTimeout(
                        () => resolve(data.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))),
                        1000,
                      );
                    });
                  }}
                  loadingMessage={() => 'Carregando..'}
                  noOptionsMessage={() => 'Não encontrado.'}
                />
                <FormLabel htmlFor="listSource">List external source</FormLabel>
              </FormItem>
              <FormItem>
                <Select
                  multiple
                  name="listSourceMultiple"
                  value={listSourceMultiple}
                  onChange={this.handleChange}
                  async
                  asyncData={(inputValue) => {
                    const data = [{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }, { value: 'c', label: 'C' }];
                    return new Promise((resolve) => {
                      setTimeout(
                        () => resolve(data.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))),
                        1000,
                      );
                    });
                  }}
                />
                <FormLabel htmlFor="listSourceMultiple">List external source multiple</FormLabel>
              </FormItem>
            </FormRow>
          </FormBox>
        </Spacer>
        <Spacer mtLg={2} mtMd={2}>
          <FormBox>
            <FormRow>
              <FormItem isActive>
                <Spacer mrLg={4} inline>
                  <Checkbox id="arquived">Archived</Checkbox>
                </Spacer>
                <Checkbox id="not_arquived">Not Archived</Checkbox>
                <FormLabel htmlFor="archiving">Archiving</FormLabel>
              </FormItem>
              <FormItem isActive>
                <Spacer mrLg={4} inline>
                  <Radio id="radio1" name="radio">Radio 1</Radio>
                </Spacer>
                <Radio id="radio2" name="radio">Radio 2</Radio>
                <FormLabel htmlFor="radio">Radio</FormLabel>
              </FormItem>
            </FormRow>
          </FormBox>
        </Spacer>
        <Spacer mtLg={2} mtMd={2}>
          <FormBox>
            <FormRow>
              <FormItem>
                <Datepicker
                  name="date"
                  onChange={this.handleChange}
                  options={{
                    dateFormat: 'd/m/Y',
                  }}
                  value={date}
                />
                <FormLabel htmlFor="date">Some date</FormLabel>
              </FormItem>
              <FormItem>
                <Datepicker
                  name="time"
                  onChange={this.handleChange}
                  options={{
                    altFormat: 'H:i',
                  }}
                  value={time}
                  withTime
                  withDate={false}
                />
                <FormLabel htmlFor="time">Some time</FormLabel>
              </FormItem>
              <FormItem>
                <Datepicker
                  name="dateWithTime"
                  onChange={this.handleChange}
                  options={{
                    dateFormat: 'F j, Y - H:i',
                  }}
                  value={dateWithTime}
                  withTime
                />
                <FormLabel htmlFor="dateWithTime">Some date with time</FormLabel>
              </FormItem>
            </FormRow>
          </FormBox>
        </Spacer>
      </Grid>
    );
  }
}
