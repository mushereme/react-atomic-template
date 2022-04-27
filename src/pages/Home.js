import React from "react";
import OrganismCard from "../components/organisms/OrganismCard";

const PageHome = () => {

    var readyDatasrc = [
        {
          code: "C05030000",
          name: "Талx, нарийн боов",
          mainImage: "",
          position0: {
            value: 1,
            classname: "", 
            positionnemgooReady: {
              atom: {
                className: "",
                props: {color: 'cozy'},
                style: {},
                type: "text"
              },
              url: {
                path: "",
                props: {shallow: false},
                query: {filtercategoryid: '164819162249910'}
              }
            }
          },
          position1: {
            value: 'Талx, нарийн боов', 
            classname: "", 
            positionnemgooReady: {
              atom: {
                className: "",
                props: {color: 'cozy'},
                style: {},
                type: "text"
              },
            }
          },
          position2: {
            value: 'https://res.cloudinary.com/dzih5nqhg/image/upload/v1647504298/cozy/Banner_2_-_Mini_100px_2_ijyh3c.jpg', 
            classname: "", 
            positionnemgooReady: {
              atom: {
                className: "",
                props: {color: 'cozy'},
                style: {},
                type: "text"
              },
            }
          },
          position3: {
            value: 'Жижиг тайлбар', 
            classname: "", 
            positionnemgooReady: {
              atom: {
                className: "",
                props: {color: 'cozy'},
                style: {},
                type: "text"
              },
            }
          },
          position4: {
            value: '$2,500', 
            classname: "", 
            positionnemgooReady: {
              atom: {
                className: "",
                props: {color: 'cozy'},
                style: {},
                type: "text"
              },
            }
          }
        },
        {
          code: "C05030000",
          name: "Талx, нарийн боов",
          mainImage: "",
          position0: {
            value: 1,
            classname: "", 
            positionnemgooReady: {
              atom: {
                className: "",
                props: {color: 'cozy'},
                style: {},
                type: "text"
              },
              url: {
                path: "",
                props: {shallow: false},
                query: {filtercategoryid: '164819162249910'}
              }
            }
          },
          position1: {
            value: 'Талx, нарийн боов', 
            classname: "", 
            positionnemgooReady: {
              atom: {
                className: "",
                props: {color: 'cozy'},
                style: {},
                type: "text"
              },
            }
          },
          position2: {
            value: 'https://res.cloudinary.com/dzih5nqhg/image/upload/v1647504298/cozy/Banner_2_-_Mini_100px_2_ijyh3c.jpg', 
            classname: "", 
            positionnemgooReady: {
              atom: {
                className: "",
                props: {color: 'cozy'},
                style: {},
                type: "text"
              },
            }
          },
          position3: {
            value: 'Жижиг тайлбар', 
            classname: "", 
            positionnemgooReady: {
              atom: {
                className: "",
                props: {color: 'cozy'},
                style: {},
                type: "text"
              },
            }
          },
          position4: {
            value: '$2,500', 
            classname: "", 
            positionnemgooReady: {
              atom: {
                className: "",
                props: {color: 'cozy'},
                style: {},
                type: "text"
              },
            }
          }
        }
      ]
    

  return (
    <div className="container mx-auto">
      <p data-testid="p">Home page</p>
      <OrganismCard readyDatasrc={readyDatasrc} />
    </div>
  )
};

export default PageHome;