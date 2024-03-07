
import useFetch from "../../hooks/UseFetch";
import React from "react";
import "./style.css"
function Description({ data, loading }) {

    return (<div className="description_section">
        {!loading ? (
            <>
                {!!data && (
                    <React.Fragment>
                        <p>Description</p>
                        <h5>{data?.overview}</h5>
                    </React.Fragment>
                )}

            </>
        ) : (<p>loading...</p>)

        }


    </div>);
}

export default Description;