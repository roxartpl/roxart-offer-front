import React from "react";
import AppContext from "../../context";
import {Link} from "react-router-dom";
import Button from "../../components/Button/Button";
import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import styled from "styled-components";
import StronaBriefContent from "./StronaBriefContent";
import KatalogBriefContent from "./KatalogBriefContent";

const BriefWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  max-width: 990px;
  margin: auto;
  box-shadow: ${props => `${props.theme.boxShadow}`};
`;

const Row = styled.div`
  padding: 20px 0;
  display: grid;
  grid-template-columns: 100%;

  &:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.05);
  }
  @media (max-width: 767px) {
    grid-template-columns: 100%;
  }
`;

const Label = styled.span`
  display: block;
  margin-bottom: 20px;
  padding: 0 20px;
  font-weight: 700;
  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

const Content = styled.span`
  padding: 0 20px;
  form {
    display: flex;
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  max-width: 200px;
  text-align: center;
  font-size: 10px;
  text-decoration: none;
  padding: 7px 12px;
  font-weight: 500;
  background: none;
  border: ${props => `2px solid ${props.theme.colors.mainBlue}`};
  color: ${props => `${props.theme.colors.mainBlue}`};
  cursor: pointer;
  margin-right: 5px;
  transition: 0.2s ease-out all;
  margin-bottom: ${props => props.marginBottom || "unset"};
  &:hover {
    background: ${props => `${props.theme.colors.mainBlue}`};
    color: #fff;
  }
`;

class SingleBriefView extends React.Component {
  state = {};

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  render() {
    const {match} = this.props;
    return (
      <AppContext.Consumer>
        {context => (
          <>
            {context.brief.map(item => (
              <>
                {context.user.username ? (
                  <>
                    {item.id == match.params.id ? (
                      <BriefWrapper key={item.id}>
                        <form
                          id="editBrief"
                          autoComplete="off"
                          className=""
                          onSubmit={e =>
                            context.editItem(e, match.params.id, this.state)
                          }>
                          <Row>
                            <Label>Id:</Label>
                            <Content>{match.params.id}</Content>
                          </Row>
                          <Row>
                            <Label>Kategoria:</Label>
                            <Content>{item.kategoria.name}</Content>
                          </Row>
                          {item.user ? (
                            <Row>
                              <Label>Dodane przez:</Label>
                              <Content>{item.user.email}</Content>
                            </Row>
                          ) : null}

                          <Row>
                            <Label>Nazwa firmy:</Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_nazwa"
                                  defaultValue={item.wsp_nazwa}
                                />
                              ) : (
                                item.title
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>Adres:</Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_adres"
                                  tag="textarea"
                                  defaultValue={item.wsp_adres}
                                />
                              ) : (
                                item.wsp_adres
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>Adres e-mail osoby kontaktowej:</Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_email"
                                  defaultValue={item.wsp_email}
                                />
                              ) : (
                                item.wsp_email
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>Utworzono:</Label>
                            <Content>{item.created_at}</Content>
                          </Row>
                          <Row>
                            <Label>Status:</Label>
                            <Content>{item.wsp_status}</Content>
                          </Row>

                          <Row>
                            <Label>
                              Jaki jest adres (URL) Twojej strony internetowej?
                              (obecny lub planowany):
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_adres_url"
                                  tag="textarea"
                                  defaultValue={item.wsp_adres_url}
                                />
                              ) : (
                                item.wsp_adres_url
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>Czym zajmuje się Twoja firma?</Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_czym_zajmuje"
                                  tag="textarea"
                                  defaultValue={item.wsp_czym_zajmuje}
                                />
                              ) : (
                                item.wsp_czym_zajmuje
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>W jakiej branży działa Twoja firma?</Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_branza"
                                  tag="textarea"
                                  defaultValue={item.wsp_branza}
                                />
                              ) : (
                                item.wsp_branza
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Ile lat Państwa firma jest na rynku i ilu
                              zatrudnia pracowników?
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_ile_lat"
                                  tag="textarea"
                                  defaultValue={item.wsp_ile_lat}
                                />
                              ) : (
                                item.wsp_ile_lat
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Jakie produkty/usługi oferuje Twoja firma swoim
                              klientom?
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_jakie_produkty"
                                  tag="textarea"
                                  defaultValue={item.wsp_jakie_produkty}
                                />
                              ) : (
                                item.wsp_jakie_produkty
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Kim są Twoi klienci (dotychczasowi lub
                              potencjalni) oraz jaka jest grupa docelowa?
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_kim_sa_klienci"
                                  tag="textarea"
                                  defaultValue={item.wsp_kim_sa_klienci}
                                />
                              ) : (
                                item.wsp_kim_sa_klienci
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Kim są główni konkurenci (lokalnie i globalnie)?
                              (można podać adresy internetowe)
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_konkurenci"
                                  tag="textarea"
                                  defaultValue={item.wsp_konkurenci}
                                />
                              ) : (
                                item.wsp_konkurenci
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Jaki jest określony budżet na realizację projektu
                              netto?
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_budzet"
                                  tag="textarea"
                                  defaultValue={item.wsp_budzet}
                                />
                              ) : (
                                item.wsp_budzet
                              )}
                            </Content>
                          </Row>

                          <Row>
                            <Label>
                              Jaki jest określony czas zakończenia realizacji
                              projektu?
                            </Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_czas_realizacji"
                                  tag="textarea"
                                  defaultValue={item.wsp_czas_realizacji}
                                />
                              ) : (
                                item.wsp_czas_realizacji
                              )}
                            </Content>
                          </Row>

                          {item.kategoria.id === 1 ? (
                            <StronaBriefContent context={context} item={item} />
                          ) : null}

                          {item.kategoria.id === 2 ? (
                            <KatalogBriefContent
                              context={context}
                              item={item}
                            />
                          ) : null}

                          <Row>
                            <Label>Inne ważne uwagi:</Label>
                            <Content>
                              {context.user.role.name === "Administrator" ||
                              context.user.role.name === "Handlowiec" ? (
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_uwagi"
                                  tag="textarea"
                                  defaultValue={item.wsp_uwagi}
                                />
                              ) : (
                                item.wsp_uwagi
                              )}
                            </Content>
                          </Row>
                        </form>

                        <Row>
                          <Label>Status wyceny grafika:</Label>
                          <Content>
                            {item.wsp_status_grafika === "nie_wycenione"
                              ? "Nie wycenione"
                              : null}
                            {item.wsp_status_grafika === "zwrot_do_handlowca"
                              ? "Zwrot"
                              : null}
                            {item.wsp_status_grafika === "wycenione"
                              ? "Wycenione"
                              : null}
                          </Content>
                        </Row>

                        <Row>
                          <Label>Wycena grafika:</Label>
                          <Content>{item.wsp_wycena_grafika}</Content>
                        </Row>

                        {context.user.role.name === "Grafik" ? (
                          <Row>
                            <Label>Nowa wycena grafika:</Label>
                            <Content>
                              <form
                                autoComplete="off"
                                className=""
                                id="wycenGrafik"
                                onSubmit={e =>
                                  context.wycen(
                                    e,
                                    match.params.id,
                                    item.title,
                                    item.user,
                                    this.state
                                  )
                                }>
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_wycena_grafika"
                                  tag="textarea"
                                  defaultValue={item.wsp_wycena_grafika}
                                  marginBottom="10px"
                                />
                                <Select
                                  name="wsp_status_grafika"
                                  value={this.state.wsp_status_grafika}
                                  onChange={this.handleInputChange}>
                                  <option value="nie_wycenione">
                                    Nie wycenione
                                  </option>
                                  <option value="wycenione">Wycenione</option>
                                  <option value="zwrot_do_handlowca">
                                    Zwrot do handlowca
                                  </option>
                                </Select>
                                <Button type="submit" form="wycenGrafik">
                                  Wyceń
                                </Button>
                              </form>
                            </Content>
                          </Row>
                        ) : null}

                        <Row>
                          <Label>Status wyceny kodera:</Label>
                          <Content>
                            {item.wsp_status_kodera === "nie_wycenione"
                              ? "Nie wycenione"
                              : null}
                            {item.wsp_status_kodera === "zwrot_do_handlowca"
                              ? "Zwrot"
                              : null}
                            {item.wsp_status_kodera === "wycenione"
                              ? "Wycenione"
                              : null}
                          </Content>
                        </Row>

                        <Row>
                          <Label>Wycena kodera:</Label>
                          <Content>{item.wsp_wycena_kodera}</Content>
                        </Row>

                        {context.user.role.name === "Koder" ? (
                          <Row>
                            <Label>Nowa wycena kodera:</Label>
                            <Content>
                              <form
                                autoComplete="off"
                                id="wycenKoder"
                                onSubmit={e =>
                                  context.wycen(
                                    e,
                                    match.params.id,
                                    item.title,
                                    item.user,
                                    this.state
                                  )
                                }>
                                <Input
                                  onChange={this.handleInputChange}
                                  name="wsp_wycena_kodera"
                                  tag="textarea"
                                  defaultValue={item.wsp_wycena_kodera}
                                  marginBottom="10px"
                                />
                                <Select
                                  name="wsp_status_kodera"
                                  value={this.state.wsp_status_kodera}
                                  onChange={this.handleInputChange}>
                                  <option value="nie_wycenione">
                                    Nie wycenione
                                  </option>
                                  <option value="wycenione">Wycenione</option>
                                  <option value="zwrot_do_handlowca">
                                    Zwrot do handlowca
                                  </option>
                                </Select>
                                <Button type="submit" form="wycenKoder">
                                  Wyceń
                                </Button>
                              </form>
                            </Content>
                          </Row>
                        ) : null}

                        <Row>
                          <Label>Działania</Label>
                          <Content>
                            {context.user.role.name === "Administrator" ||
                            context.user.role.name === "Handlowiec" ? (
                              <>
                                {/* <Button
                                      onClick={e =>
                                        context.removeItem(
                                          e,
                                          match.params.id,
                                          item.title
                                        )
                                      }>
                                      Usuń brief
                                    </Button> */}
                                <Button form="editBrief">Zapisz zmiany</Button>
                              </>
                            ) : null}

                            <StyledLink to={"/"} secondary>
                              powrót
                            </StyledLink>
                          </Content>
                        </Row>
                      </BriefWrapper>
                    ) : null}
                  </>
                ) : null}
              </>
            ))}
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default SingleBriefView;
