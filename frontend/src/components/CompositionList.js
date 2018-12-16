import PropTypes from "prop-types";
import React from "react";
import key from "weak-key";
import ValueOfEntity from "./ValueOfEntity";

const CompositionList = ({data}) =>
    !data.length ? (
        <p>Nothing to show</p>
    ) : (
        <div className="column">
            <br/>
            <h2 className="subtitle">
                Showing <strong>{data.length} composition</strong>
            </h2>
            <table className="table is-striped">
                <thead>
                <tr>
                    {Object.entries(data[0]).map((item) => {
                            switch (item[0]) {
                                case "url":
                                    return (<h6/>);
                                case "name":
                                    return (<td key={key(item)}>Name of composition</td>);
                                case "albums":
                                    return (<td key={key(item)}>Album</td>);
                                case "description":
                                    return (<td key={key(item)}>Description</td>);
                                case "artist":
                                    return (<td key={key(item)}>Artist</td>);
                                case "genre":
                                    return (<td key={key(item)}>Genre</td>);
                                case "composition_url":
                                    return (<td key={key(item)}>Composition</td>);
                            }
                        }
                    )}
                </tr>
                </thead>
                <tbody>
                {data.map(element => (
                    <tr key={element.id}>
                        {Object.entries(element).map((item) => {
                                switch (item[0]) {
                                    case "url":
                                        return (<h6/>);
                                    case "name":
                                        return (<td key={key(item)}>{item[1]}</td>);
                                    case "albums":
                                        return (<td key={key(item)}>{item[1]}</td>);
                                    case "description":
                                        return (<td key={key(item)}>{item[1]}</td>);
                                    case "artist":
                                        return (<td key={key(item)}>
                                            <ValueOfEntity
                                                endpoint={"http://127.0.0.1:8000/api/artist/" + item[1]}
                                                render={(data)=>{ return (<div>{data.name}</div>)}}
                                            /></td>);
                                    case "genre":
                                        return (<td key={key(item)}>{item[1]}</td>);
                                    case "composition_url":
                                        return (<td key={key(item)}>
                                            <audio controls>
                                                <source src={item[1]}/>
                                            </audio>
                                        </td>);
                                }
                            }
                        )}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );

CompositionList.propTypes = {
    data: PropTypes.array.isRequired
};

export default CompositionList;