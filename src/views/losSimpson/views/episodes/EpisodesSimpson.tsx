import { FC, useContext } from "react";
import { Card, Col, Row } from "react-bootstrap";

import { SpinnerLoading } from "../../../../components";
import { FrikiWorldContext } from "../../../../context/FrikiWorldContext";
import { IEpisodeSimpson } from "../../models/IEpisodeSimpson";
import "./EpisodesSimpson.scss";
import { useEpisodeSimpson } from "./hooks/useEpisodeSimpson";

export const EpisodesSimpson: FC = () => {
  const { simpsonEpisode } = useEpisodeSimpson();
  const { loadingView } = useContext(FrikiWorldContext);

  return (
    <>
      {loadingView ? (
        <Row className="row-spinner-simpson">
          <SpinnerLoading />
        </Row>
      ) : (
        <Row>
          {simpsonEpisode?.map((elem: IEpisodeSimpson) => {
            return (
              <Col xs={6} lg={3} className="mb-2" key={elem.id}>
                <Card className="w-100 h-100">
                  <Card.Img
                    variant="top"
                    src={elem.thumbnailUrl}
                    onError={(e: any) =>
                      (e.target.src = "/images/no-image.jpg")
                    }
                  />
                  <Card.Body>
                    <Card.Title>{elem.name}</Card.Title>
                    <Card.Text>{elem.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};
