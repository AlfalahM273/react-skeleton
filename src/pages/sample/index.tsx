import { Button } from "../../ui/components/button";
import { Container } from "../../ui/components/container";
import { TableHead } from "../../ui/components/table/head";
import { ModalConfirmation } from "../../ui/components/modal/confirmation";
import { Modal } from "../../ui/components/modal/common";
import { Loading } from "../../ui/components/loading";
import { withToast } from "../../ui/components/Toast/withToast";
import React from "react";

interface Props {
  toast: any;
}

class SamplePage extends React.Component<Props> {

  componentDidMount(){
    this.props.toast?.pushSuccess("Action success", 1500);
    this.props.toast?.pushError("pushError", 1500);
  }
  render() {
    return (
      <div>
        <Container>
          <Container>
            Hello From Skeleton
            <Button>tes</Button>
            <br />
            <Button
              onClick={() => this.props.toast?.pushSuccess("Action success", 1500)}
              className="max-w-xs flex items-center text-center content-center "
              variant="main"
            >
              <div className="inline-flex flex-row gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
                <div>Add New Carrot</div>
              </div>
            </Button>
            <br />
            <table>
              <TableHead headTitles={["a", "a", "a"]}></TableHead>
            </table>
            <br />
            <ModalConfirmation
              isShowing={false}
              onSubmit={() => {}}
              onClose={() => {}}
              message="Are you sure wanna delete this carrot ?"
              cancelButton="Cancel"
              okButton="Delete"
            />
            <Modal
              isShowing={false}
              onSubmit={() => {}}
              onClose={() => {}}
              size="full"
              minSize="3/4"
              title="Test"
            >
              Test
            </Modal>
            <Loading isLoading={false} text={"Loading..."} />
          </Container>
        </Container>
      </div>
    );
  }
}

export default withToast(SamplePage);
