// (C) 2007-2021 GoodData Corporation
import React, { useState, useMemo } from "react";
import { AttributeElements } from "@gooddata/sdk-ui-filters";
import { BarChart } from "@gooddata/sdk-ui-charts";
import {
    newPositiveAttributeFilter,
    attributeDisplayFormRef,
    ObjRef,
    idRef,
    modifyMeasure,
} from "@gooddata/sdk-model";
import Select from "react-select";
import * as Md from "../../../md/full";
import { IElementsQueryAttributeFilter } from "@gooddata/sdk-backend-spi";

const locationIdAttributeIdentifier = "attr.restaurantlocation.locationid";
const TotalSales = modifyMeasure(Md.$TotalSales, (m) => m.format("#,##0").alias("$ Total Sales"));

interface IFilterValue {
    value: string;
    label: string;
}

interface ICustomFilterProps {
    displayForm: ObjRef;
    filterValues: IFilterValue[] | null;
    parentFilters?: IElementsQueryAttributeFilter[];
    placeholder: string;
    onChange: (filters: any) => void;
    className: string;
}

const CustomFilter: React.FC<ICustomFilterProps> = ({
    displayForm,
    filterValues,
    parentFilters,
    onChange,
    placeholder,
    className,
}) => {
    return (
        <AttributeElements displayForm={displayForm} filters={parentFilters}>
            {({ validElements, isLoading, error }) => {
                if (error) {
                    // eslint-disable-next-line no-console
                    console.error("Loading attribute elements failed!", error);
                }
                const selectOptions =
                    !isLoading && validElements
                        ? validElements.items.map((item) => ({
                              label: item.title,
                              value: item.uri,
                          }))
                        : [];
                return (
                    <span
                        style={{
                            display: "inline-block",
                            minWidth: "10em",
                            verticalAlign: "middle",
                        }}
                    >
                        <Select
                            className={className}
                            onChange={onChange}
                            options={selectOptions}
                            isMulti
                            isLoading={isLoading}
                            placeholder={placeholder}
                            value={filterValues}
                        />
                        {error && <span style={{ color: "#e54d42" }}>Loading failed!</span>}
                    </span>
                );
            }}
        </AttributeElements>
    );
};

export const ParentFilterExample: React.FC = () => {
    const [stateFilterValues, setStateFilterValues] = useState<IFilterValue[] | null>([]);
    const [cityFilterValues, setCityFilterValues] = useState<IFilterValue[] | null>([]);

    const insightFilters = useMemo(() => {
        const filters = [];

        if (stateFilterValues?.length) {
            filters.push(
                newPositiveAttributeFilter(Md.LocationState, {
                    uris: stateFilterValues.map((filter) => filter.value),
                }),
            );
        }
        if (cityFilterValues?.length) {
            filters.push(
                newPositiveAttributeFilter(Md.LocationCity, {
                    uris: cityFilterValues.map((filter) => filter.value),
                }),
            );
        }

        return filters;
    }, [stateFilterValues, cityFilterValues]);

    const cityParentFilters = useMemo(() => {
        return stateFilterValues?.length
            ? [
                  {
                      attributeFilter: newPositiveAttributeFilter(Md.LocationState, {
                          uris: stateFilterValues.map((filter) => filter.value),
                      }),
                      overAttribute: idRef(locationIdAttributeIdentifier),
                  },
              ]
            : undefined;
    }, [stateFilterValues]);

    const onStateValueChange = (values: IFilterValue[] | null) => {
        setStateFilterValues(values);
        // clear cities on state change to avoid possible invalid state - city combinations
        setCityFilterValues(null);
    };

    return (
        <div>
            <span>Total Sales per site in&emsp;</span>
            <CustomFilter
                displayForm={attributeDisplayFormRef(Md.LocationState)}
                filterValues={stateFilterValues}
                onChange={onStateValueChange}
                placeholder="all states"
                className="s-select-state"
            />
            &emsp;and&emsp;{" "}
            <CustomFilter
                displayForm={attributeDisplayFormRef(Md.LocationCity)}
                filterValues={cityFilterValues}
                onChange={setCityFilterValues}
                placeholder="all cities"
                parentFilters={cityParentFilters}
                className="s-select-city"
            />
            <hr className="separator" />
            <div style={{ height: 500 }}>
                <BarChart
                    measures={[TotalSales]}
                    viewBy={Md.LocationName.Default}
                    filters={insightFilters}
                    height={500}
                />
            </div>
        </div>
    );
};

export default ParentFilterExample;
