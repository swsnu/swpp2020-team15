import React from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';

import TotalScoreBullet from './TotalScoreBullet';

const DetailOverview = (props) => {
  const data = [
    {
      id: '',
      ranges: [0, 50, 60, 100],
      measures: [],
      markers:
        props.stock && props.fs_score && props.fs_score.score
          ? [
              /*Math.sqrt(
                (props.stock.score * props.stock.score +
                  ((props.fs_score.score + 8) / 16) *
                    50 *
                    (((props.fs_score.score + 8) / 16) * 50)) /
                  2,
              ),*/
              props.stock.score,
            ]
          : [],
    },
  ];

  return (
    <div data-testid="DetailOverview">
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <Header as="h3">Overall Assessment</Header>
              <div style={{ height: '30px' }}>
                <TotalScoreBullet data={data} />
              </div>
              <br />
              <p>
                {
                  /*'This stock is ' + data[0].markers.length
                  ? data[0].markers[0] >= 60 || data[0].markers[0] + ' likely to show a ' + '' + '.'
  : 'not assessable due to lack of data.'*/
                  props.stock && props.stock.score >= 60
                    ? 'It is likely to show a relatively big rise or a small drop'
                    : props.stock && props.stock.score <= 50
                    ? 'It is likely to show a relatively small rise or a big drop'
                    : 'It is likely to show a standard rise or a standard drop'
                }
              </p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        {}
      </Grid>
    </div>
  );
};
/* This goes to the empty bracket
<Grid.Row columns={3}>
          <Grid.Column>
            <Segment>{'place for graph showing ML score in some way'}</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>{'place for graph showing FS score in some way'}</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>{'place for graph showing news score in some way'}</Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Segment>{'place for graph comparing saleGrowthRate and saleGrowthRateAvg'}</Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>{'place for graph comparing operatingMarginRate and ...Avg'}</Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>{'place for graph comparing crawledPER and ...Avg'}</Segment>
          </Grid.Column>
        </Grid.Row>
        */

export default DetailOverview;
