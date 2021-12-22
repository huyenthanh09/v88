/* eslint-disable */
/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2021-12-21T09:15:49.606Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import {
    newAttribute,
    newMeasure,
    IAttribute,
    IMeasure,
    IMeasureDefinition,
    idRef,
} from "@gooddata/sdk-model";

/**
 * Attribute Title: CA_hyperlink label
 * Attribute ID: attr.comp.QOfnvec
 */
export const CAHyperlinkLabel: IAttribute = newAttribute("label.comp.QOfnvec");
/**
 * Attribute Title: CA_Test
 * Attribute ID: attr.comp.iwueblz
 */
export const CATest: IAttribute = newAttribute("label.comp.iwueblz");
/**
 * Attribute Title: ca-edu-min
 * Attribute ID: attr.comp.pGhKrhn
 */
export const CaEduMin: IAttribute = newAttribute("label.comp.pGhKrhn");
/**
 * Attribute Title: Computed Attribute
 * Attribute ID: attr.comp.M1s65ra
 */
export const ComputedAttribute: IAttribute = newAttribute("label.comp.M1s65ra");
/**
 * Attribute Title: Cost Type
 * Attribute ID: attr.restaurantcostsfact.costtype
 */
export const CostType: IAttribute = newAttribute("label.restaurantcostsfact.costtype");
/**
 * Attribute Title: Employee Id
 * Attribute ID: attr.employee.employeeid
 */
export const EmployeeId: IAttribute = newAttribute("label.employee.employeeid");
/**
 * Attribute Title: Employee Name
 * Attribute ID: attr.employee.employeename
 */
export const EmployeeName = {
    /**
     * Display Form Title: Employee URL
     * Display Form ID: label.employee.employeename.employeeurl
     */
    EmployeeURL: newAttribute("label.employee.employeename.employeeurl"),
    /**
     * Display Form Title: Employee Name
     * Display Form ID: label.employee.employeename
     */ Default: newAttribute("label.employee.employeename"),
};
/**
 * Attribute Title: Is Kids Item?
 * Attribute ID: attr.menuitem.iskidsitem
 */
export const IsKidsItem: IAttribute = newAttribute("label.menuitem.iskidsitem");
/**
 * Attribute Title: Line Item Id
 * Attribute ID: attr.salesdetailfact.lineitemid
 */
export const LineItemId: IAttribute = newAttribute("label.salesdetailfact.lineitemid");
/**
 * Attribute Title: Location City
 * Attribute ID: attr.restaurantlocation.locationcity
 */
export const LocationCity: IAttribute = newAttribute("label.restaurantlocation.locationcity");
/**
 * Attribute Title: Location Country
 * Attribute ID: attr.restaurantlocation.locationcountry
 */
export const LocationCountry: IAttribute = newAttribute("label.restaurantlocation.locationcountry");
/**
 * Attribute Title: Location Id
 * Attribute ID: attr.restaurantlocation.locationid
 */
export const LocationId: IAttribute = newAttribute("label.restaurantlocation.locationid");
/**
 * Attribute Title: Location Name
 * Attribute ID: attr.restaurantlocation.locationname
 */
export const LocationName = {
    /**
     * Display Form Title: Location Name
     * Display Form ID: label.restaurantlocation.locationname
     */
    Default: newAttribute("label.restaurantlocation.locationname"),
    /**
     * Display Form Title: Location URL
     * Display Form ID: label.restaurantlocation.locationname.locationurl
     */ LocationURL: newAttribute("label.restaurantlocation.locationname.locationurl"),
};
/**
 * Attribute Title: Location Ownership
 * Attribute ID: attr.restaurantlocation.locationownership
 */
export const LocationOwnership: IAttribute = newAttribute("label.restaurantlocation.locationownership");
/**
 * Attribute Title: Location Resort
 * Attribute ID: attr.restaurantlocation.locationresort
 */
export const LocationResort: IAttribute = newAttribute("label.restaurantlocation.locationresort");
/**
 * Attribute Title: Location State
 * Attribute ID: attr.restaurantlocation.locationstate
 */
export const LocationState: IAttribute = newAttribute("label.restaurantlocation.locationstate");
/**
 * Attribute Title: Mai's
 * Attribute ID: attr.comp.bu822VX
 */
export const MaiS: IAttribute = newAttribute("label.comp.bu822VX");
/**
 * Attribute Title: Menu Category
 * Attribute ID: attr.menuitem.menucategory
 */
export const MenuCategory: IAttribute = newAttribute("label.menuitem.menucategory");
/**
 * Attribute Title: Menu Item Id
 * Attribute ID: attr.menuitem.menuitemid
 */
export const MenuItemId: IAttribute = newAttribute("label.menuitem.menuitemid");
/**
 * Attribute Title: Menu Item Name
 * Attribute ID: attr.menuitem.menuitemname
 */
export const MenuItemName: IAttribute = newAttribute("label.menuitem.menuitemname");
/**
 * Attribute Title: Restaurant Category
 * Attribute ID: attr.restaurantprofile.restaurantcategory
 */
export const RestaurantCategory: IAttribute = newAttribute("label.restaurantprofile.restaurantcategory");
/**
 * Attribute Title: Transaction Id
 * Attribute ID: attr.salesdetailfact.transactionid
 */
export const TransactionId: IAttribute = newAttribute("label.salesdetailfact.transactionid");
/**
 * Metric Title: _Filter Last 4 Quarter
 * Metric ID: aaIHiWZjfWNA
 * Metric Type: MAQL Metric
 */
export const FilterLast4Quarter: IMeasure<IMeasureDefinition> = newMeasure(idRef("aaIHiWZjfWNA", "measure"));
/**
 * Metric Title: _Filter Quarter
 * Metric ID: aaiF4bffe4yn
 * Metric Type: MAQL Metric
 */
export const FilterQuarter: IMeasure<IMeasureDefinition> = newMeasure(idRef("aaiF4bffe4yn", "measure"));
/**
 * Metric Title: _metric no data
 * Metric ID: aabUu5gcbRLd
 * Metric Type: MAQL Metric
 */
export const MetricNoData: IMeasure<IMeasureDefinition> = newMeasure(idRef("aabUu5gcbRLd", "measure"));
/**
 * Metric Title: _TIMELINE Q
 * Metric ID: aaJF1ktqc10F
 * Metric Type: MAQL Metric
 */
export const TIMELINEQ: IMeasure<IMeasureDefinition> = newMeasure(idRef("aaJF1ktqc10F", "measure"));
/**
 * Metric Title: [AVG] Same Store Sales Growth MoM
 * Metric ID: aasApLbucFp0
 * Metric Type: MAQL Metric
 */
export const AVGSameStoreSalesGrowthMoM: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aasApLbucFp0", "measure"),
);
/**
 * Metric Title: # Checks
 * Metric ID: aeOt50ngicOD
 * Metric Type: MAQL Metric
 */
export const NrChecks: IMeasure<IMeasureDefinition> = newMeasure(idRef("aeOt50ngicOD", "measure"));
/**
 * Metric Title: # Employees
 * Metric ID: aaTJSTfSaRBg
 * Metric Type: MAQL Metric
 */
export const NrEmployees: IMeasure<IMeasureDefinition> = newMeasure(idRef("aaTJSTfSaRBg", "measure"));
/**
 * Metric Title: # Franchise Locations
 * Metric ID: ackJFayteCFG
 * Metric Type: MAQL Metric
 */
export const NrFranchiseLocations: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("ackJFayteCFG", "measure"),
);
/**
 * Metric Title: # Items on Check
 * Metric ID: adFurWGrd2H8
 * Metric Type: MAQL Metric
 */
export const NrItemsOnCheck: IMeasure<IMeasureDefinition> = newMeasure(idRef("adFurWGrd2H8", "measure"));
/**
 * Metric Title: # Owned Locations
 * Metric ID: aaBJGIyWbxfO
 * Metric Type: MAQL Metric
 */
export const NrOwnedLocations: IMeasure<IMeasureDefinition> = newMeasure(idRef("aaBJGIyWbxfO", "measure"));
/**
 * Metric Title: # Restaurants
 * Metric ID: aawAq8YqhM3o
 * Metric Type: MAQL Metric
 */
export const NrRestaurants: IMeasure<IMeasureDefinition> = newMeasure(idRef("aawAq8YqhM3o", "measure"));
/**
 * Metric Title: % Change $ Avg Total Sales
 * Metric ID: afxBqOrPc5Zh
 * Metric Type: MAQL Metric
 */
export const PercentChange$AvgTotalSales: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("afxBqOrPc5Zh", "measure"),
);
/**
 * Metric Title: % Change $ Avg Total Sales by Server
 * Metric ID: acMCYQZbbwJg
 * Metric Type: MAQL Metric
 */
export const PercentChange$AvgTotalSalesByServer: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("acMCYQZbbwJg", "measure"),
);
/**
 * Metric Title: % of Entree on Total Check Size
 * Metric ID: aagurTlZd1Ul
 * Metric Type: MAQL Metric
 */
export const PercentOfEntreeOnTotalCheckSize: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aagurTlZd1Ul", "measure"),
);
/**
 * Metric Title: $ Avg Check Size
 * Metric ID: agGujhRmcjQD
 * Metric Type: MAQL Metric
 */
export const $AvgCheckSize: IMeasure<IMeasureDefinition> = newMeasure(idRef("agGujhRmcjQD", "measure"));
/**
 * Metric Title: $ Avg Daily Total Sales
 * Metric ID: aagJGHg1bxap
 * Metric Type: MAQL Metric
 */
export const $AvgDailyTotalSales: IMeasure<IMeasureDefinition> = newMeasure(idRef("aagJGHg1bxap", "measure"));
/**
 * Metric Title: $ Avg Daily Total Sales by Server
 * Metric ID: aaAwXH5UfVBx
 * Metric Type: MAQL Metric
 */
export const $AvgDailyTotalSalesByServer: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aaAwXH5UfVBx", "measure"),
);
/**
 * Metric Title: $ Avg Daily Total Sales by Server - For Previous
 * Metric ID: aeiCXq43bzcl
 * Metric Type: MAQL Metric
 */
export const $AvgDailyTotalSalesByServerForPrevious: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aeiCXq43bzcl", "measure"),
);
/**
 * Metric Title: $ Avg Restaurant Daily Total Sales
 * Metric ID: acEvQdUMiEAd
 * Metric Type: MAQL Metric
 */
export const $AvgRestaurantDailyTotalSales: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("acEvQdUMiEAd", "measure"),
);
/**
 * Metric Title: $ Avg Restaurant Daily Total Sales - For Previous
 * Metric ID: agbBoXF6haIe
 * Metric Type: MAQL Metric
 */
export const $AvgRestaurantDailyTotalSalesForPrevious: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("agbBoXF6haIe", "measure"),
);
/**
 * Metric Title: $ Avg Total Sales by Restaurant
 * Metric ID: aaAHkMhRgp7S
 * Metric Type: MAQL Metric
 */
export const $AvgTotalSalesByRestaurant: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aaAHkMhRgp7S", "measure"),
);
/**
 * Metric Title: $ Entree of Total Check Size
 * Metric ID: aavuqQNNaDdc
 * Metric Type: MAQL Metric
 */
export const $EntreeOfTotalCheckSize: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aavuqQNNaDdc", "measure"),
);
/**
 * Metric Title: $ Franchise Fees
 * Metric ID: aaEGaXAEgB7U
 * Metric Type: MAQL Metric
 */
export const $FranchiseFees: IMeasure<IMeasureDefinition> = newMeasure(idRef("aaEGaXAEgB7U", "measure"));
/**
 * Metric Title: $ Franchise Fees (Ad Royalty)
 * Metric ID: aabHeqImaK0d
 * Metric Type: MAQL Metric
 */
export const $FranchiseFeesAdRoyalty: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aabHeqImaK0d", "measure"),
);
/**
 * Metric Title: $ Franchise Fees (Initial Fee) Last Quarter Timeline
 * Metric ID: aayHf60BfkfS
 * Metric Type: MAQL Metric
 */
export const $FranchiseFeesInitialFeeLastQuarterTimeline: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aayHf60BfkfS", "measure"),
);
/**
 * Metric Title: $ Franchise Fees (Initial Franchise Fee)
 * Metric ID: aaDHcv6wevkl
 * Metric Type: MAQL Metric
 */
export const $FranchiseFeesInitialFranchiseFee: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aaDHcv6wevkl", "measure"),
);
/**
 * Metric Title: $ Franchise Fees (Ongoing Royalty)
 * Metric ID: aaWGcgnsfxIg
 * Metric Type: MAQL Metric
 */
export const $FranchiseFeesOngoingRoyalty: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aaWGcgnsfxIg", "measure"),
);
/**
 * Metric Title: $ Franchise Fees (Ongoing Royalty) Last Quarter Timeline
 * Metric ID: aaeHf3Mofjir
 * Metric Type: MAQL Metric
 */
export const $FranchiseFeesOngoingRoyaltyLastQuarterTimeline: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aaeHf3Mofjir", "measure"),
);
/**
 * Metric Title: $ Franchised Sales
 * Metric ID: aclF4oDIe5hP
 * Metric Type: MAQL Metric
 */
export const $FranchisedSales: IMeasure<IMeasureDefinition> = newMeasure(idRef("aclF4oDIe5hP", "measure"));
/**
 * Metric Title: $ Gross Profit
 * Metric ID: aa5JBkFDa7sJ
 * Metric Type: MAQL Metric
 */
export const $GrossProfit: IMeasure<IMeasureDefinition> = newMeasure(idRef("aa5JBkFDa7sJ", "measure"));
/**
 * Metric Title: $ Owned Sales
 * Metric ID: aaMF7AZGbALB
 * Metric Type: MAQL Metric
 */
export const $OwnedSales: IMeasure<IMeasureDefinition> = newMeasure(idRef("aaMF7AZGbALB", "measure"));
/**
 * Metric Title: $ Owned Sales Last Quarter Timeline
 * Metric ID: abHF4LCfdNdt
 * Metric Type: MAQL Metric
 */
export const $OwnedSalesLastQuarterTimeline: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("abHF4LCfdNdt", "measure"),
);
/**
 * Metric Title: $ Scheduled Costs
 * Metric ID: aclJxvAlhCp0
 * Metric Type: MAQL Metric
 */
export const $ScheduledCosts: IMeasure<IMeasureDefinition> = newMeasure(idRef("aclJxvAlhCp0", "measure"));
/**
 * Metric Title: $ Scheduled Labor Costs
 * Metric ID: aaGJzwrDdbfQ
 * Metric Type: MAQL Metric
 */
export const $ScheduledLaborCosts: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aaGJzwrDdbfQ", "measure"),
);
/**
 * Metric Title: $ Total Check Value
 * Metric ID: aattxAMVg2YU
 * Metric Type: MAQL Metric
 */
export const $TotalCheckValue: IMeasure<IMeasureDefinition> = newMeasure(idRef("aattxAMVg2YU", "measure"));
/**
 * Metric Title: $ Total Costs
 * Metric ID: aaQHncjzfrtR
 * Metric Type: MAQL Metric
 */
export const $TotalCosts: IMeasure<IMeasureDefinition> = newMeasure(idRef("aaQHncjzfrtR", "measure"));
/**
 * Metric Title: $ Total Costs - COGs
 * Metric ID: aafHpxx0f3gL
 * Metric Type: MAQL Metric
 */
export const $TotalCostsCOGs: IMeasure<IMeasureDefinition> = newMeasure(idRef("aafHpxx0f3gL", "measure"));
/**
 * Metric Title: $ Total Costs - Labor
 * Metric ID: aamHpELXdotY
 * Metric Type: MAQL Metric
 */
export const $TotalCostsLabor: IMeasure<IMeasureDefinition> = newMeasure(idRef("aamHpELXdotY", "measure"));
/**
 * Metric Title: $ Total Costs - Occupany
 * Metric ID: aagHqrJ6iAhD
 * Metric Type: MAQL Metric
 */
export const $TotalCostsOccupany: IMeasure<IMeasureDefinition> = newMeasure(idRef("aagHqrJ6iAhD", "measure"));
/**
 * Metric Title: $ Total Costs - Operating
 * Metric ID: aaeHqv2qhEE1
 * Metric Type: MAQL Metric
 */
export const $TotalCostsOperating: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aaeHqv2qhEE1", "measure"),
);
/**
 * Metric Title: $ Total Sales
 * Metric ID: aa7ulGyKhIE5
 * Metric Type: MAQL Metric
 */
export const $TotalSales: IMeasure<IMeasureDefinition> = newMeasure(idRef("aa7ulGyKhIE5", "measure"));
/**
 * Metric Title: $ Total Sales Last Quarter Timeline
 * Metric ID: aajFRfDPaJrB
 * Metric Type: MAQL Metric
 */
export const $TotalSalesLastQuarterTimeline: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aajFRfDPaJrB", "measure"),
);
/**
 * Metric Title: Avg # Checks
 * Metric ID: aakujkP2g68f
 * Metric Type: MAQL Metric
 */
export const AvgNrChecks: IMeasure<IMeasureDefinition> = newMeasure(idRef("aakujkP2g68f", "measure"));
/**
 * Metric Title: Avg # Employees - Franchised
 * Metric ID: aciJJMmDfGYG
 * Metric Type: MAQL Metric
 */
export const AvgNrEmployeesFranchised: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aciJJMmDfGYG", "measure"),
);
/**
 * Metric Title: Avg # Employees - Owned
 * Metric ID: abQJKPrmcvPv
 * Metric Type: MAQL Metric
 */
export const AvgNrEmployeesOwned: IMeasure<IMeasureDefinition> = newMeasure(idRef("abQJKPrmcvPv", "measure"));
/**
 * Metric Title: Avg # Items on Check
 * Metric ID: adFurSoPaUaF
 * Metric Type: MAQL Metric
 */
export const AvgNrItemsOnCheck: IMeasure<IMeasureDefinition> = newMeasure(idRef("adFurSoPaUaF", "measure"));
/**
 * Metric Title: Avg # Items on Check By Server
 * Metric ID: aaKwQwBIg1WY
 * Metric Type: MAQL Metric
 */
export const AvgNrItemsOnCheckByServer: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aaKwQwBIg1WY", "measure"),
);
/**
 * Metric Title: Avg % of Entree on Total Check size
 * Metric ID: adQvRqlFawrq
 * Metric Type: MAQL Metric
 */
export const AvgPercentOfEntreeOnTotalCheckSize: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("adQvRqlFawrq", "measure"),
);
/**
 * Metric Title: Avg Check Size by Restaurant
 * Metric ID: abmxly1WgN0A
 * Metric Type: MAQL Metric
 */
export const AvgCheckSizeByRestaurant: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("abmxly1WgN0A", "measure"),
);
/**
 * Metric Title: Avg Check Size by Server
 * Metric ID: afewRzGAersh
 * Metric Type: MAQL Metric
 */
export const AvgCheckSizeByServer: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("afewRzGAersh", "measure"),
);
/**
 * Metric Title: Avg Daily # Checks by Restaurant
 * Metric ID: aaKvTDSga0Qc
 * Metric Type: MAQL Metric
 */
export const AvgDailyNrChecksByRestaurant: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aaKvTDSga0Qc", "measure"),
);
/**
 * Metric Title: Avg Daily # of Check by Server
 * Metric ID: afgwRbw8ekwA
 * Metric Type: MAQL Metric
 */
export const AvgDailyNrOfCheckByServer: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("afgwRbw8ekwA", "measure"),
);
/**
 * Metric Title: Avg Entree % By Restaurant
 * Metric ID: afQHUg8AfYdl
 * Metric Type: MAQL Metric
 */
export const AvgEntreePercentByRestaurant: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("afQHUg8AfYdl", "measure"),
);
/**
 * Metric Title: Avg Entree % By Server
 * Metric ID: aexwEtn0eHwB
 * Metric Type: MAQL Metric
 */
export const AvgEntreePercentByServer: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aexwEtn0eHwB", "measure"),
);
/**
 * Metric Title: Franchise Fee (Initial Fee) % Change
 * Metric ID: aabHgIqabggQ
 * Metric Type: MAQL Metric
 */
export const FranchiseFeeInitialFeePercentChange: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aabHgIqabggQ", "measure"),
);
/**
 * Metric Title: Franchise Fee (Ongoing Royalty) % Change
 * Metric ID: aacHgvmIfZOX
 * Metric Type: MAQL Metric
 */
export const FranchiseFeeOngoingRoyaltyPercentChange: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aacHgvmIfZOX", "measure"),
);
/**
 * Metric Title: Gross Profit %
 * Metric ID: abBJBoqTe5IH
 * Metric Type: MAQL Metric
 */
export const GrossProfitPercent: IMeasure<IMeasureDefinition> = newMeasure(idRef("abBJBoqTe5IH", "measure"));
/**
 * Metric Title: Owned Sales % Change
 * Metric ID: aacF8F2Me67e
 * Metric Type: MAQL Metric
 */
export const OwnedSalesPercentChange: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aacF8F2Me67e", "measure"),
);
/**
 * Metric Title: Same Store Sales
 * Metric ID: aaXAnw7hcbFY
 * Metric Type: MAQL Metric
 */
export const SameStoreSales: IMeasure<IMeasureDefinition> = newMeasure(idRef("aaXAnw7hcbFY", "measure"));
/**
 * Metric Title: Same Store Sales Previous Month
 * Metric ID: aagAoGqjcuCZ
 * Metric Type: MAQL Metric
 */
export const SameStoreSalesPreviousMonth: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aagAoGqjcuCZ", "measure"),
);
/**
 * Metric Title: Total # Franchised Employees
 * Metric ID: afrJGKajgogi
 * Metric Type: MAQL Metric
 */
export const TotalNrFranchisedEmployees: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("afrJGKajgogi", "measure"),
);
/**
 * Metric Title: Total # Owned Employees
 * Metric ID: aazJLFHCdCBh
 * Metric Type: MAQL Metric
 */
export const TotalNrOwnedEmployees: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("aazJLFHCdCBh", "measure"),
);
/**
 * Metric Title: Total Sales % Change
 * Metric ID: abhFQRhibZKx
 * Metric Type: MAQL Metric
 */
export const TotalSalesPercentChange: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("abhFQRhibZKx", "measure"),
);
/**
 * Fact Title: $ Menu Item Sales
 * Fact ID: fact.salesdetailfact.menuitemsales
 */
export const $MenuItemSales = {
    /**
     * Fact Title: $ Menu Item Sales
     * Fact ID: fact.salesdetailfact.menuitemsales
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.salesdetailfact.menuitemsales", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: $ Menu Item Sales
     * Fact ID: fact.salesdetailfact.menuitemsales
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("fact.salesdetailfact.menuitemsales", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: $ Menu Item Sales
     * Fact ID: fact.salesdetailfact.menuitemsales
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("fact.salesdetailfact.menuitemsales", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: $ Menu Item Sales
     * Fact ID: fact.salesdetailfact.menuitemsales
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("fact.salesdetailfact.menuitemsales", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: $ Menu Item Sales
     * Fact ID: fact.salesdetailfact.menuitemsales
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("fact.salesdetailfact.menuitemsales", "fact"), (m) =>
        m.aggregation("median"),
    ),
    /**
     * Fact Title: $ Menu Item Sales
     * Fact ID: fact.salesdetailfact.menuitemsales
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("fact.salesdetailfact.menuitemsales", "fact"), (m) =>
        m.aggregation("runsum"),
    ),
};
/**
 * Fact Title: Cost
 * Fact ID: fact.restaurantcostsfact.cost
 */
export const Cost = {
    /**
     * Fact Title: Cost
     * Fact ID: fact.restaurantcostsfact.cost
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.restaurantcostsfact.cost", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Cost
     * Fact ID: fact.restaurantcostsfact.cost
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("fact.restaurantcostsfact.cost", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Cost
     * Fact ID: fact.restaurantcostsfact.cost
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("fact.restaurantcostsfact.cost", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Cost
     * Fact ID: fact.restaurantcostsfact.cost
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("fact.restaurantcostsfact.cost", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Cost
     * Fact ID: fact.restaurantcostsfact.cost
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("fact.restaurantcostsfact.cost", "fact"), (m) => m.aggregation("median")),
    /**
     * Fact Title: Cost
     * Fact ID: fact.restaurantcostsfact.cost
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("fact.restaurantcostsfact.cost", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Menu Item Quantity
 * Fact ID: fact.salesdetailfact.menuitemquantity
 */
export const MenuItemQuantity = {
    /**
     * Fact Title: Menu Item Quantity
     * Fact ID: fact.salesdetailfact.menuitemquantity
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.salesdetailfact.menuitemquantity", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Menu Item Quantity
     * Fact ID: fact.salesdetailfact.menuitemquantity
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("fact.salesdetailfact.menuitemquantity", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Menu Item Quantity
     * Fact ID: fact.salesdetailfact.menuitemquantity
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("fact.salesdetailfact.menuitemquantity", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Menu Item Quantity
     * Fact ID: fact.salesdetailfact.menuitemquantity
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("fact.salesdetailfact.menuitemquantity", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Menu Item Quantity
     * Fact ID: fact.salesdetailfact.menuitemquantity
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("fact.salesdetailfact.menuitemquantity", "fact"), (m) =>
        m.aggregation("median"),
    ),
    /**
     * Fact Title: Menu Item Quantity
     * Fact ID: fact.salesdetailfact.menuitemquantity
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("fact.salesdetailfact.menuitemquantity", "fact"), (m) =>
        m.aggregation("runsum"),
    ),
};
/**
 * Fact Title: Scheduled Cost
 * Fact ID: fact.restaurantcostsfact.scheduledcost
 */
export const ScheduledCost = {
    /**
     * Fact Title: Scheduled Cost
     * Fact ID: fact.restaurantcostsfact.scheduledcost
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("fact.restaurantcostsfact.scheduledcost", "fact"), (m) => m.aggregation("sum")),
    /**
     * Fact Title: Scheduled Cost
     * Fact ID: fact.restaurantcostsfact.scheduledcost
     * Fact Aggregation: avg
     */ Avg: newMeasure(idRef("fact.restaurantcostsfact.scheduledcost", "fact"), (m) => m.aggregation("avg")),
    /**
     * Fact Title: Scheduled Cost
     * Fact ID: fact.restaurantcostsfact.scheduledcost
     * Fact Aggregation: min
     */ Min: newMeasure(idRef("fact.restaurantcostsfact.scheduledcost", "fact"), (m) => m.aggregation("min")),
    /**
     * Fact Title: Scheduled Cost
     * Fact ID: fact.restaurantcostsfact.scheduledcost
     * Fact Aggregation: max
     */ Max: newMeasure(idRef("fact.restaurantcostsfact.scheduledcost", "fact"), (m) => m.aggregation("max")),
    /**
     * Fact Title: Scheduled Cost
     * Fact ID: fact.restaurantcostsfact.scheduledcost
     * Fact Aggregation: median
     */ Median: newMeasure(idRef("fact.restaurantcostsfact.scheduledcost", "fact"), (m) =>
        m.aggregation("median"),
    ),
    /**
     * Fact Title: Scheduled Cost
     * Fact ID: fact.restaurantcostsfact.scheduledcost
     * Fact Aggregation: runsum
     */ Runsum: newMeasure(idRef("fact.restaurantcostsfact.scheduledcost", "fact"), (m) =>
        m.aggregation("runsum"),
    ),
};
/**
 * Attribute Title: Year (Date)
 * Attribute ID: date.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateYear: IAttribute = newAttribute("date.aag81lMifn6q");
/**
 * Attribute Title: Quarter (Date)
 * Attribute ID: date.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateQuarter: IAttribute = newAttribute("date.aam81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Date)
 * Attribute ID: date.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date)
     * Display Form ID: date.aaA81lMifn6q
     */
    WeekNrYear: newAttribute("date.aaA81lMifn6q"),
    /**
     * Display Form Title: Week Starting (Date)
     * Display Form ID: date.aaw81lMifn6q
     */ WeekStarting: newAttribute("date.aaw81lMifn6q"),
    /**
     * Display Form Title: From - To (Date)
     * Display Form ID: date.aau81lMifn6q
     */ FromTo: newAttribute("date.aau81lMifn6q"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Date)
     * Display Form ID: date.aay81lMifn6q
     */ WeekNrYear_1: newAttribute("date.aay81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Date)
     * Display Form ID: date.aaC81lMifn6q
     */ WkQtrYear: newAttribute("date.aaC81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Date)
     * Display Form ID: date.aas81lMifn6q
     */ WkQtrYear_1: newAttribute("date.aas81lMifn6q"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Date)
 * Attribute ID: date.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekSunSat: IAttribute = newAttribute("date.aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Date)
 * Attribute ID: date.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekSunSatOfQtr: IAttribute = newAttribute("date.aaO81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Date)
 * Attribute ID: date.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date)
     * Display Form ID: date.aa281lMifn6q
     */
    WeekNrYear: newAttribute("date.aa281lMifn6q"),
    /**
     * Display Form Title: Week Starting (Date)
     * Display Form ID: date.aaY81lMifn6q
     */ WeekStarting: newAttribute("date.aaY81lMifn6q"),
    /**
     * Display Form Title: From - To (Date)
     * Display Form ID: date.aaW81lMifn6q
     */ FromTo: newAttribute("date.aaW81lMifn6q"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Date)
 * Attribute ID: date.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekMonSun: IAttribute = newAttribute("date.aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Date)
 * Attribute ID: date.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekMonSunOfQtr: IAttribute = newAttribute("date.abg81lMifn6q");
/**
 * Attribute Title: Month (Date)
 * Attribute ID: date.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMonth = {
    /**
     * Display Form Title: Short (Jan) (Date)
     * Display Form ID: date.abm81lMifn6q
     */
    Short: newAttribute("date.abm81lMifn6q"),
    /**
     * Display Form Title: Long (January) (Date)
     * Display Form ID: date.abs81lMifn6q
     */ Long: newAttribute("date.abs81lMifn6q"),
    /**
     * Display Form Title: Number (M1) (Date)
     * Display Form ID: date.abq81lMifn6q
     */ Number: newAttribute("date.abq81lMifn6q"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Date)
     * Display Form ID: date.abo81lMifn6q
     */ MQ: newAttribute("date.abo81lMifn6q"),
};
/**
 * Attribute Title: Month of Quarter (Date)
 * Attribute ID: date.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMonthOfQuarter: IAttribute = newAttribute("date.aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Date)
 * Attribute ID: date.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfYear: IAttribute = newAttribute("date.abE81lMifn6q");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Date)
 * Attribute ID: date.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Date)
     * Display Form ID: date.abK81lMifn6q
     */
    Short: newAttribute("date.abK81lMifn6q"),
    /**
     * Display Form Title: Long (Sunday) (Date)
     * Display Form ID: date.abO81lMifn6q
     */ Long: newAttribute("date.abO81lMifn6q"),
    /**
     * Display Form Title: Number (1=Sunday) (Date)
     * Display Form ID: date.abM81lMifn6q
     */ Number: newAttribute("date.abM81lMifn6q"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Date)
 * Attribute ID: date.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Date)
     * Display Form ID: date.abU81lMifn6q
     */
    Short: newAttribute("date.abU81lMifn6q"),
    /**
     * Display Form Title: Long (Monday) (Date)
     * Display Form ID: date.abY81lMifn6q
     */ Long: newAttribute("date.abY81lMifn6q"),
    /**
     * Display Form Title: Number (1=Monday) (Date)
     * Display Form ID: date.abW81lMifn6q
     */ Number: newAttribute("date.abW81lMifn6q"),
};
/**
 * Attribute Title: Day of Quarter (Date)
 * Attribute ID: date.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfQuarter: IAttribute = newAttribute("date.ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Date)
 * Attribute ID: date.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfMonth: IAttribute = newAttribute("date.aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Date)
 * Attribute ID: date.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateQuarterYear: IAttribute = newAttribute("date.aci81lMifn6q");
/**
 * Attribute Title: Month/Year (Date)
 * Attribute ID: date.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Date)
     * Display Form ID: date.act81lMifn6q
     */
    Short: newAttribute("date.act81lMifn6q"),
    /**
     * Display Form Title: Long (January 2010) (Date)
     * Display Form ID: date.acx81lMifn6q
     */ Long: newAttribute("date.acx81lMifn6q"),
    /**
     * Display Form Title: Number (1/2010) (Date)
     * Display Form ID: date.acv81lMifn6q
     */ Number: newAttribute("date.acv81lMifn6q"),
};
/**
 * Attribute Title: Date (Date)
 * Attribute ID: date.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDate = {
    /**
     * Display Form Title: mm/dd/yyyy (Date)
     * Display Form ID: date.date.mmddyyyy
     */
    MmDdYyyy: newAttribute("date.date.mmddyyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Date)
     * Display Form ID: date.date.yyyymmdd
     */ YyyyMmDd: newAttribute("date.date.yyyymmdd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Date)
     * Display Form ID: date.date.mdyy
     */ MDYy: newAttribute("date.date.mdyy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Date)
     * Display Form ID: date.date.long
     */ Long: newAttribute("date.date.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Date)
     * Display Form ID: date.date.ddmmyyyy
     */ DdMmYyyy: newAttribute("date.date.ddmmyyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Date)
     * Display Form ID: date.date.eddmmyyyy
     */ DdMmYyyy_1: newAttribute("date.date.eddmmyyyy"),
};
/**
 * Attribute Title: Year (Timeline)
 * Attribute ID: timeline.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimelineYear: IAttribute = newAttribute("timeline.aag81lMifn6q");
/**
 * Attribute Title: Quarter (Timeline)
 * Attribute ID: timeline.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimelineQuarter: IAttribute = newAttribute("timeline.aam81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Timeline)
 * Attribute ID: timeline.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimelineWeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Timeline)
     * Display Form ID: timeline.aaA81lMifn6q
     */
    WeekNrYear: newAttribute("timeline.aaA81lMifn6q"),
    /**
     * Display Form Title: Week Starting (Timeline)
     * Display Form ID: timeline.aaw81lMifn6q
     */ WeekStarting: newAttribute("timeline.aaw81lMifn6q"),
    /**
     * Display Form Title: From - To (Timeline)
     * Display Form ID: timeline.aau81lMifn6q
     */ FromTo: newAttribute("timeline.aau81lMifn6q"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Timeline)
     * Display Form ID: timeline.aay81lMifn6q
     */ WeekNrYear_1: newAttribute("timeline.aay81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Timeline)
     * Display Form ID: timeline.aaC81lMifn6q
     */ WkQtrYear: newAttribute("timeline.aaC81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Timeline)
     * Display Form ID: timeline.aas81lMifn6q
     */ WkQtrYear_1: newAttribute("timeline.aas81lMifn6q"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Timeline)
 * Attribute ID: timeline.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimelineWeekSunSat: IAttribute = newAttribute("timeline.aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Timeline)
 * Attribute ID: timeline.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimelineWeekSunSatOfQtr: IAttribute = newAttribute("timeline.aaO81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Timeline)
 * Attribute ID: timeline.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimelineWeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Timeline)
     * Display Form ID: timeline.aa281lMifn6q
     */
    WeekNrYear: newAttribute("timeline.aa281lMifn6q"),
    /**
     * Display Form Title: Week Starting (Timeline)
     * Display Form ID: timeline.aaY81lMifn6q
     */ WeekStarting: newAttribute("timeline.aaY81lMifn6q"),
    /**
     * Display Form Title: From - To (Timeline)
     * Display Form ID: timeline.aaW81lMifn6q
     */ FromTo: newAttribute("timeline.aaW81lMifn6q"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Timeline)
 * Attribute ID: timeline.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimelineWeekMonSun: IAttribute = newAttribute("timeline.aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Timeline)
 * Attribute ID: timeline.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimelineWeekMonSunOfQtr: IAttribute = newAttribute("timeline.abg81lMifn6q");
/**
 * Attribute Title: Month (Timeline)
 * Attribute ID: timeline.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimelineMonth = {
    /**
     * Display Form Title: Short (Jan) (Timeline)
     * Display Form ID: timeline.abm81lMifn6q
     */
    Short: newAttribute("timeline.abm81lMifn6q"),
    /**
     * Display Form Title: Long (January) (Timeline)
     * Display Form ID: timeline.abs81lMifn6q
     */ Long: newAttribute("timeline.abs81lMifn6q"),
    /**
     * Display Form Title: Number (M1) (Timeline)
     * Display Form ID: timeline.abq81lMifn6q
     */ Number: newAttribute("timeline.abq81lMifn6q"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Timeline)
     * Display Form ID: timeline.abo81lMifn6q
     */ MQ: newAttribute("timeline.abo81lMifn6q"),
};
/**
 * Attribute Title: Month of Quarter (Timeline)
 * Attribute ID: timeline.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimelineMonthOfQuarter: IAttribute = newAttribute("timeline.aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Timeline)
 * Attribute ID: timeline.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimelineDayOfYear: IAttribute = newAttribute("timeline.abE81lMifn6q");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Timeline)
 * Attribute ID: timeline.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimelineDayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Timeline)
     * Display Form ID: timeline.abK81lMifn6q
     */
    Short: newAttribute("timeline.abK81lMifn6q"),
    /**
     * Display Form Title: Long (Sunday) (Timeline)
     * Display Form ID: timeline.abO81lMifn6q
     */ Long: newAttribute("timeline.abO81lMifn6q"),
    /**
     * Display Form Title: Number (1=Sunday) (Timeline)
     * Display Form ID: timeline.abM81lMifn6q
     */ Number: newAttribute("timeline.abM81lMifn6q"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Timeline)
 * Attribute ID: timeline.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimelineDayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Timeline)
     * Display Form ID: timeline.abU81lMifn6q
     */
    Short: newAttribute("timeline.abU81lMifn6q"),
    /**
     * Display Form Title: Long (Monday) (Timeline)
     * Display Form ID: timeline.abY81lMifn6q
     */ Long: newAttribute("timeline.abY81lMifn6q"),
    /**
     * Display Form Title: Number (1=Monday) (Timeline)
     * Display Form ID: timeline.abW81lMifn6q
     */ Number: newAttribute("timeline.abW81lMifn6q"),
};
/**
 * Attribute Title: Day of Quarter (Timeline)
 * Attribute ID: timeline.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimelineDayOfQuarter: IAttribute = newAttribute("timeline.ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Timeline)
 * Attribute ID: timeline.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimelineDayOfMonth: IAttribute = newAttribute("timeline.aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Timeline)
 * Attribute ID: timeline.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimelineQuarterYear: IAttribute = newAttribute("timeline.aci81lMifn6q");
/**
 * Attribute Title: Month/Year (Timeline)
 * Attribute ID: timeline.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimelineMonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Timeline)
     * Display Form ID: timeline.act81lMifn6q
     */
    Short: newAttribute("timeline.act81lMifn6q"),
    /**
     * Display Form Title: Long (January 2010) (Timeline)
     * Display Form ID: timeline.acx81lMifn6q
     */ Long: newAttribute("timeline.acx81lMifn6q"),
    /**
     * Display Form Title: Number (1/2010) (Timeline)
     * Display Form ID: timeline.acv81lMifn6q
     */ Number: newAttribute("timeline.acv81lMifn6q"),
};
/**
 * Attribute Title: Date (Timeline)
 * Attribute ID: timeline.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimelineDate = {
    /**
     * Display Form Title: mm/dd/yyyy (Timeline)
     * Display Form ID: timeline.date.mmddyyyy
     */
    MmDdYyyy: newAttribute("timeline.date.mmddyyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Timeline)
     * Display Form ID: timeline.date.yyyymmdd
     */ YyyyMmDd: newAttribute("timeline.date.yyyymmdd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Timeline)
     * Display Form ID: timeline.date.mdyy
     */ MDYy: newAttribute("timeline.date.mdyy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Timeline)
     * Display Form ID: timeline.date.long
     */ Long: newAttribute("timeline.date.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Timeline)
     * Display Form ID: timeline.date.ddmmyyyy
     */ DdMmYyyy: newAttribute("timeline.date.ddmmyyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Timeline)
     * Display Form ID: timeline.date.eddmmyyyy
     */ DdMmYyyy_1: newAttribute("timeline.date.eddmmyyyy"),
};
/**
 * Attribute Title: Year (Fiscal Date)
 * Attribute ID: fiscaldate.fiscaljun1_year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const FiscalDateYear: IAttribute = newAttribute("fiscaldate.fiscaljun1_aag81lMifn6q");
/**
 * Attribute Title: Quarter (Fiscal Date)
 * Attribute ID: fiscaldate.fiscaljun1_quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const FiscalDateQuarter: IAttribute = newAttribute("fiscaldate.fiscaljun1_aam81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Fiscal Date)
 * Attribute ID: fiscaldate.fiscaljun1_week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const FiscalDateWeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_aaA81lMifn6q
     */
    WeekNrYear: newAttribute("fiscaldate.fiscaljun1_aaA81lMifn6q"),
    /**
     * Display Form Title: Week Starting (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_aaw81lMifn6q
     */ WeekStarting: newAttribute("fiscaldate.fiscaljun1_aaw81lMifn6q"),
    /**
     * Display Form Title: From - To (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_aau81lMifn6q
     */ FromTo: newAttribute("fiscaldate.fiscaljun1_aau81lMifn6q"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_aay81lMifn6q
     */ WeekNrYear_1: newAttribute("fiscaldate.fiscaljun1_aay81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_aaC81lMifn6q
     */ WkQtrYear: newAttribute("fiscaldate.fiscaljun1_aaC81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_aas81lMifn6q
     */ WkQtrYear_1: newAttribute("fiscaldate.fiscaljun1_aas81lMifn6q"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Fiscal Date)
 * Attribute ID: fiscaldate.fiscaljun1_week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const FiscalDateWeekSunSat: IAttribute = newAttribute("fiscaldate.fiscaljun1_aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Fiscal Date)
 * Attribute ID: fiscaldate.fiscaljun1_week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const FiscalDateWeekSunSatOfQtr: IAttribute = newAttribute("fiscaldate.fiscaljun1_aaO81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Fiscal Date)
 * Attribute ID: fiscaldate.fiscaljun1_euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const FiscalDateWeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_aa281lMifn6q
     */
    WeekNrYear: newAttribute("fiscaldate.fiscaljun1_aa281lMifn6q"),
    /**
     * Display Form Title: Week Starting (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_aaY81lMifn6q
     */ WeekStarting: newAttribute("fiscaldate.fiscaljun1_aaY81lMifn6q"),
    /**
     * Display Form Title: From - To (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_aaW81lMifn6q
     */ FromTo: newAttribute("fiscaldate.fiscaljun1_aaW81lMifn6q"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Fiscal Date)
 * Attribute ID: fiscaldate.fiscaljun1_euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const FiscalDateWeekMonSun: IAttribute = newAttribute("fiscaldate.fiscaljun1_aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Fiscal Date)
 * Attribute ID: fiscaldate.fiscaljun1_euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const FiscalDateWeekMonSunOfQtr: IAttribute = newAttribute("fiscaldate.fiscaljun1_abg81lMifn6q");
/**
 * Attribute Title: Month (Fiscal Date)
 * Attribute ID: fiscaldate.fiscaljun1_month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const FiscalDateMonth = {
    /**
     * Display Form Title: Short (Jan) (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_abm81lMifn6q
     */
    Short: newAttribute("fiscaldate.fiscaljun1_abm81lMifn6q"),
    /**
     * Display Form Title: Long (January) (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_abs81lMifn6q
     */ Long: newAttribute("fiscaldate.fiscaljun1_abs81lMifn6q"),
    /**
     * Display Form Title: Number (M1) (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_abq81lMifn6q
     */ Number: newAttribute("fiscaldate.fiscaljun1_abq81lMifn6q"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_abo81lMifn6q
     */ MQ: newAttribute("fiscaldate.fiscaljun1_abo81lMifn6q"),
};
/**
 * Attribute Title: Month of Quarter (Fiscal Date)
 * Attribute ID: fiscaldate.fiscaljun1_month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const FiscalDateMonthOfQuarter: IAttribute = newAttribute("fiscaldate.fiscaljun1_aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Fiscal Date)
 * Attribute ID: fiscaldate.fiscaljun1_day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const FiscalDateDayOfYear: IAttribute = newAttribute("fiscaldate.fiscaljun1_abE81lMifn6q");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Fiscal Date)
 * Attribute ID: fiscaldate.fiscaljun1_day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const FiscalDateDayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_abK81lMifn6q
     */
    Short: newAttribute("fiscaldate.fiscaljun1_abK81lMifn6q"),
    /**
     * Display Form Title: Long (Sunday) (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_abO81lMifn6q
     */ Long: newAttribute("fiscaldate.fiscaljun1_abO81lMifn6q"),
    /**
     * Display Form Title: Number (1=Sunday) (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_abM81lMifn6q
     */ Number: newAttribute("fiscaldate.fiscaljun1_abM81lMifn6q"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Fiscal Date)
 * Attribute ID: fiscaldate.fiscaljun1_day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const FiscalDateDayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_abU81lMifn6q
     */
    Short: newAttribute("fiscaldate.fiscaljun1_abU81lMifn6q"),
    /**
     * Display Form Title: Long (Monday) (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_abY81lMifn6q
     */ Long: newAttribute("fiscaldate.fiscaljun1_abY81lMifn6q"),
    /**
     * Display Form Title: Number (1=Monday) (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_abW81lMifn6q
     */ Number: newAttribute("fiscaldate.fiscaljun1_abW81lMifn6q"),
};
/**
 * Attribute Title: Day of Quarter (Fiscal Date)
 * Attribute ID: fiscaldate.fiscaljun1_day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const FiscalDateDayOfQuarter: IAttribute = newAttribute("fiscaldate.fiscaljun1_ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Fiscal Date)
 * Attribute ID: fiscaldate.fiscaljun1_day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const FiscalDateDayOfMonth: IAttribute = newAttribute("fiscaldate.fiscaljun1_aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Fiscal Date)
 * Attribute ID: fiscaldate.fiscaljun1_quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const FiscalDateQuarterYear: IAttribute = newAttribute("fiscaldate.fiscaljun1_aci81lMifn6q");
/**
 * Attribute Title: Month/Year (Fiscal Date)
 * Attribute ID: fiscaldate.fiscaljun1_month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const FiscalDateMonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_act81lMifn6q
     */
    Short: newAttribute("fiscaldate.fiscaljun1_act81lMifn6q"),
    /**
     * Display Form Title: Long (January 2010) (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_acx81lMifn6q
     */ Long: newAttribute("fiscaldate.fiscaljun1_acx81lMifn6q"),
    /**
     * Display Form Title: Number (1/2010) (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_acv81lMifn6q
     */ Number: newAttribute("fiscaldate.fiscaljun1_acv81lMifn6q"),
};
/**
 * Attribute Title: Date (Fiscal Date)
 * Attribute ID: fiscaldate.fiscaljun1_date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const FiscalDateDate = {
    /**
     * Display Form Title: mm/dd/yyyy (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_date.mmddyyyy
     */
    MmDdYyyy: newAttribute("fiscaldate.fiscaljun1_date.mmddyyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_date.yyyymmdd
     */ YyyyMmDd: newAttribute("fiscaldate.fiscaljun1_date.yyyymmdd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_date.mdyy
     */ MDYy: newAttribute("fiscaldate.fiscaljun1_date.mdyy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_date.long
     */ Long: newAttribute("fiscaldate.fiscaljun1_date.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_date.ddmmyyyy
     */ DdMmYyyy: newAttribute("fiscaldate.fiscaljun1_date.ddmmyyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Fiscal Date)
     * Display Form ID: fiscaldate.fiscaljun1_date.eddmmyyyy
     */ DdMmYyyy_1: newAttribute("fiscaldate.fiscaljun1_date.eddmmyyyy"),
};
/**
 * Attribute Title: Year (Date 1)
 * Attribute ID: date_1.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1Year: IAttribute = newAttribute("date_1.aag81lMifn6q");
/**
 * Attribute Title: Quarter (Date 1)
 * Attribute ID: date_1.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1Quarter: IAttribute = newAttribute("date_1.aam81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Date 1)
 * Attribute ID: date_1.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1WeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date 1)
     * Display Form ID: date_1.aaA81lMifn6q
     */
    WeekNrYear: newAttribute("date_1.aaA81lMifn6q"),
    /**
     * Display Form Title: Week Starting (Date 1)
     * Display Form ID: date_1.aaw81lMifn6q
     */ WeekStarting: newAttribute("date_1.aaw81lMifn6q"),
    /**
     * Display Form Title: From - To (Date 1)
     * Display Form ID: date_1.aau81lMifn6q
     */ FromTo: newAttribute("date_1.aau81lMifn6q"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Date 1)
     * Display Form ID: date_1.aay81lMifn6q
     */ WeekNrYear_1: newAttribute("date_1.aay81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Date 1)
     * Display Form ID: date_1.aaC81lMifn6q
     */ WkQtrYear: newAttribute("date_1.aaC81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Date 1)
     * Display Form ID: date_1.aas81lMifn6q
     */ WkQtrYear_1: newAttribute("date_1.aas81lMifn6q"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Date 1)
 * Attribute ID: date_1.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1WeekSunSat: IAttribute = newAttribute("date_1.aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Date 1)
 * Attribute ID: date_1.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1WeekSunSatOfQtr: IAttribute = newAttribute("date_1.aaO81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Date 1)
 * Attribute ID: date_1.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1WeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date 1)
     * Display Form ID: date_1.aa281lMifn6q
     */
    WeekNrYear: newAttribute("date_1.aa281lMifn6q"),
    /**
     * Display Form Title: Week Starting (Date 1)
     * Display Form ID: date_1.aaY81lMifn6q
     */ WeekStarting: newAttribute("date_1.aaY81lMifn6q"),
    /**
     * Display Form Title: From - To (Date 1)
     * Display Form ID: date_1.aaW81lMifn6q
     */ FromTo: newAttribute("date_1.aaW81lMifn6q"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Date 1)
 * Attribute ID: date_1.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1WeekMonSun: IAttribute = newAttribute("date_1.aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Date 1)
 * Attribute ID: date_1.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1WeekMonSunOfQtr: IAttribute = newAttribute("date_1.abg81lMifn6q");
/**
 * Attribute Title: Month (Date 1)
 * Attribute ID: date_1.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1Month = {
    /**
     * Display Form Title: Short (Jan) (Date 1)
     * Display Form ID: date_1.abm81lMifn6q
     */
    Short: newAttribute("date_1.abm81lMifn6q"),
    /**
     * Display Form Title: Long (January) (Date 1)
     * Display Form ID: date_1.abs81lMifn6q
     */ Long: newAttribute("date_1.abs81lMifn6q"),
    /**
     * Display Form Title: Number (M1) (Date 1)
     * Display Form ID: date_1.abq81lMifn6q
     */ Number: newAttribute("date_1.abq81lMifn6q"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Date 1)
     * Display Form ID: date_1.abo81lMifn6q
     */ MQ: newAttribute("date_1.abo81lMifn6q"),
};
/**
 * Attribute Title: Month of Quarter (Date 1)
 * Attribute ID: date_1.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1MonthOfQuarter: IAttribute = newAttribute("date_1.aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Date 1)
 * Attribute ID: date_1.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1DayOfYear: IAttribute = newAttribute("date_1.abE81lMifn6q");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Date 1)
 * Attribute ID: date_1.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1DayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Date 1)
     * Display Form ID: date_1.abK81lMifn6q
     */
    Short: newAttribute("date_1.abK81lMifn6q"),
    /**
     * Display Form Title: Long (Sunday) (Date 1)
     * Display Form ID: date_1.abO81lMifn6q
     */ Long: newAttribute("date_1.abO81lMifn6q"),
    /**
     * Display Form Title: Number (1=Sunday) (Date 1)
     * Display Form ID: date_1.abM81lMifn6q
     */ Number: newAttribute("date_1.abM81lMifn6q"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Date 1)
 * Attribute ID: date_1.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1DayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Date 1)
     * Display Form ID: date_1.abU81lMifn6q
     */
    Short: newAttribute("date_1.abU81lMifn6q"),
    /**
     * Display Form Title: Long (Monday) (Date 1)
     * Display Form ID: date_1.abY81lMifn6q
     */ Long: newAttribute("date_1.abY81lMifn6q"),
    /**
     * Display Form Title: Number (1=Monday) (Date 1)
     * Display Form ID: date_1.abW81lMifn6q
     */ Number: newAttribute("date_1.abW81lMifn6q"),
};
/**
 * Attribute Title: Day of Quarter (Date 1)
 * Attribute ID: date_1.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1DayOfQuarter: IAttribute = newAttribute("date_1.ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Date 1)
 * Attribute ID: date_1.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1DayOfMonth: IAttribute = newAttribute("date_1.aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Date 1)
 * Attribute ID: date_1.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1QuarterYear: IAttribute = newAttribute("date_1.aci81lMifn6q");
/**
 * Attribute Title: Month/Year (Date 1)
 * Attribute ID: date_1.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1MonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Date 1)
     * Display Form ID: date_1.act81lMifn6q
     */
    Short: newAttribute("date_1.act81lMifn6q"),
    /**
     * Display Form Title: Long (January 2010) (Date 1)
     * Display Form ID: date_1.acx81lMifn6q
     */ Long: newAttribute("date_1.acx81lMifn6q"),
    /**
     * Display Form Title: Number (1/2010) (Date 1)
     * Display Form ID: date_1.acv81lMifn6q
     */ Number: newAttribute("date_1.acv81lMifn6q"),
};
/**
 * Attribute Title: Date (Date 1)
 * Attribute ID: date_1.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1Date = {
    /**
     * Display Form Title: mm/dd/yyyy (Date 1)
     * Display Form ID: date_1.date.mmddyyyy
     */
    MmDdYyyy: newAttribute("date_1.date.mmddyyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Date 1)
     * Display Form ID: date_1.date.yyyymmdd
     */ YyyyMmDd: newAttribute("date_1.date.yyyymmdd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Date 1)
     * Display Form ID: date_1.date.mdyy
     */ MDYy: newAttribute("date_1.date.mdyy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Date 1)
     * Display Form ID: date_1.date.long
     */ Long: newAttribute("date_1.date.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Date 1)
     * Display Form ID: date_1.date.ddmmyyyy
     */ DdMmYyyy: newAttribute("date_1.date.ddmmyyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Date 1)
     * Display Form ID: date_1.date.eddmmyyyy
     */ DdMmYyyy_1: newAttribute("date_1.date.eddmmyyyy"),
};
/**
 * Attribute Title: Year (Date 2)
 * Attribute ID: date_2.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2Year: IAttribute = newAttribute("date_2.aag81lMifn6q");
/**
 * Attribute Title: Quarter (Date 2)
 * Attribute ID: date_2.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2Quarter: IAttribute = newAttribute("date_2.aam81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Date 2)
 * Attribute ID: date_2.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2WeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date 2)
     * Display Form ID: date_2.aaA81lMifn6q
     */
    WeekNrYear: newAttribute("date_2.aaA81lMifn6q"),
    /**
     * Display Form Title: Week Starting (Date 2)
     * Display Form ID: date_2.aaw81lMifn6q
     */ WeekStarting: newAttribute("date_2.aaw81lMifn6q"),
    /**
     * Display Form Title: From - To (Date 2)
     * Display Form ID: date_2.aau81lMifn6q
     */ FromTo: newAttribute("date_2.aau81lMifn6q"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Date 2)
     * Display Form ID: date_2.aay81lMifn6q
     */ WeekNrYear_1: newAttribute("date_2.aay81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Date 2)
     * Display Form ID: date_2.aaC81lMifn6q
     */ WkQtrYear: newAttribute("date_2.aaC81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Date 2)
     * Display Form ID: date_2.aas81lMifn6q
     */ WkQtrYear_1: newAttribute("date_2.aas81lMifn6q"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Date 2)
 * Attribute ID: date_2.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2WeekSunSat: IAttribute = newAttribute("date_2.aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Date 2)
 * Attribute ID: date_2.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2WeekSunSatOfQtr: IAttribute = newAttribute("date_2.aaO81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Date 2)
 * Attribute ID: date_2.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2WeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date 2)
     * Display Form ID: date_2.aa281lMifn6q
     */
    WeekNrYear: newAttribute("date_2.aa281lMifn6q"),
    /**
     * Display Form Title: Week Starting (Date 2)
     * Display Form ID: date_2.aaY81lMifn6q
     */ WeekStarting: newAttribute("date_2.aaY81lMifn6q"),
    /**
     * Display Form Title: From - To (Date 2)
     * Display Form ID: date_2.aaW81lMifn6q
     */ FromTo: newAttribute("date_2.aaW81lMifn6q"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Date 2)
 * Attribute ID: date_2.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2WeekMonSun: IAttribute = newAttribute("date_2.aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Date 2)
 * Attribute ID: date_2.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2WeekMonSunOfQtr: IAttribute = newAttribute("date_2.abg81lMifn6q");
/**
 * Attribute Title: Month (Date 2)
 * Attribute ID: date_2.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2Month = {
    /**
     * Display Form Title: Short (Jan) (Date 2)
     * Display Form ID: date_2.abm81lMifn6q
     */
    Short: newAttribute("date_2.abm81lMifn6q"),
    /**
     * Display Form Title: Long (January) (Date 2)
     * Display Form ID: date_2.abs81lMifn6q
     */ Long: newAttribute("date_2.abs81lMifn6q"),
    /**
     * Display Form Title: Number (M1) (Date 2)
     * Display Form ID: date_2.abq81lMifn6q
     */ Number: newAttribute("date_2.abq81lMifn6q"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Date 2)
     * Display Form ID: date_2.abo81lMifn6q
     */ MQ: newAttribute("date_2.abo81lMifn6q"),
};
/**
 * Attribute Title: Month of Quarter (Date 2)
 * Attribute ID: date_2.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2MonthOfQuarter: IAttribute = newAttribute("date_2.aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Date 2)
 * Attribute ID: date_2.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2DayOfYear: IAttribute = newAttribute("date_2.abE81lMifn6q");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Date 2)
 * Attribute ID: date_2.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2DayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Date 2)
     * Display Form ID: date_2.abK81lMifn6q
     */
    Short: newAttribute("date_2.abK81lMifn6q"),
    /**
     * Display Form Title: Long (Sunday) (Date 2)
     * Display Form ID: date_2.abO81lMifn6q
     */ Long: newAttribute("date_2.abO81lMifn6q"),
    /**
     * Display Form Title: Number (1=Sunday) (Date 2)
     * Display Form ID: date_2.abM81lMifn6q
     */ Number: newAttribute("date_2.abM81lMifn6q"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Date 2)
 * Attribute ID: date_2.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2DayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Date 2)
     * Display Form ID: date_2.abU81lMifn6q
     */
    Short: newAttribute("date_2.abU81lMifn6q"),
    /**
     * Display Form Title: Long (Monday) (Date 2)
     * Display Form ID: date_2.abY81lMifn6q
     */ Long: newAttribute("date_2.abY81lMifn6q"),
    /**
     * Display Form Title: Number (1=Monday) (Date 2)
     * Display Form ID: date_2.abW81lMifn6q
     */ Number: newAttribute("date_2.abW81lMifn6q"),
};
/**
 * Attribute Title: Day of Quarter (Date 2)
 * Attribute ID: date_2.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2DayOfQuarter: IAttribute = newAttribute("date_2.ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Date 2)
 * Attribute ID: date_2.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2DayOfMonth: IAttribute = newAttribute("date_2.aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Date 2)
 * Attribute ID: date_2.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2QuarterYear: IAttribute = newAttribute("date_2.aci81lMifn6q");
/**
 * Attribute Title: Month/Year (Date 2)
 * Attribute ID: date_2.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2MonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Date 2)
     * Display Form ID: date_2.act81lMifn6q
     */
    Short: newAttribute("date_2.act81lMifn6q"),
    /**
     * Display Form Title: Long (January 2010) (Date 2)
     * Display Form ID: date_2.acx81lMifn6q
     */ Long: newAttribute("date_2.acx81lMifn6q"),
    /**
     * Display Form Title: Number (1/2010) (Date 2)
     * Display Form ID: date_2.acv81lMifn6q
     */ Number: newAttribute("date_2.acv81lMifn6q"),
};
/**
 * Attribute Title: Date (Date 2)
 * Attribute ID: date_2.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2Date = {
    /**
     * Display Form Title: mm/dd/yyyy (Date 2)
     * Display Form ID: date_2.date.mmddyyyy
     */
    MmDdYyyy: newAttribute("date_2.date.mmddyyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Date 2)
     * Display Form ID: date_2.date.yyyymmdd
     */ YyyyMmDd: newAttribute("date_2.date.yyyymmdd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Date 2)
     * Display Form ID: date_2.date.mdyy
     */ MDYy: newAttribute("date_2.date.mdyy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Date 2)
     * Display Form ID: date_2.date.long
     */ Long: newAttribute("date_2.date.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Date 2)
     * Display Form ID: date_2.date.ddmmyyyy
     */ DdMmYyyy: newAttribute("date_2.date.ddmmyyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Date 2)
     * Display Form ID: date_2.date.eddmmyyyy
     */ DdMmYyyy_1: newAttribute("date_2.date.eddmmyyyy"),
};
/**
 * Attribute Title: Year (Date 3)
 * Attribute ID: date_3.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3Year: IAttribute = newAttribute("date_3.aag81lMifn6q");
/**
 * Attribute Title: Quarter (Date 3)
 * Attribute ID: date_3.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3Quarter: IAttribute = newAttribute("date_3.aam81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Date 3)
 * Attribute ID: date_3.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3WeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date 3)
     * Display Form ID: date_3.aaA81lMifn6q
     */
    WeekNrYear: newAttribute("date_3.aaA81lMifn6q"),
    /**
     * Display Form Title: Week Starting (Date 3)
     * Display Form ID: date_3.aaw81lMifn6q
     */ WeekStarting: newAttribute("date_3.aaw81lMifn6q"),
    /**
     * Display Form Title: From - To (Date 3)
     * Display Form ID: date_3.aau81lMifn6q
     */ FromTo: newAttribute("date_3.aau81lMifn6q"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Date 3)
     * Display Form ID: date_3.aay81lMifn6q
     */ WeekNrYear_1: newAttribute("date_3.aay81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Date 3)
     * Display Form ID: date_3.aaC81lMifn6q
     */ WkQtrYear: newAttribute("date_3.aaC81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Date 3)
     * Display Form ID: date_3.aas81lMifn6q
     */ WkQtrYear_1: newAttribute("date_3.aas81lMifn6q"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Date 3)
 * Attribute ID: date_3.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3WeekSunSat: IAttribute = newAttribute("date_3.aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Date 3)
 * Attribute ID: date_3.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3WeekSunSatOfQtr: IAttribute = newAttribute("date_3.aaO81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Date 3)
 * Attribute ID: date_3.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3WeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date 3)
     * Display Form ID: date_3.aa281lMifn6q
     */
    WeekNrYear: newAttribute("date_3.aa281lMifn6q"),
    /**
     * Display Form Title: Week Starting (Date 3)
     * Display Form ID: date_3.aaY81lMifn6q
     */ WeekStarting: newAttribute("date_3.aaY81lMifn6q"),
    /**
     * Display Form Title: From - To (Date 3)
     * Display Form ID: date_3.aaW81lMifn6q
     */ FromTo: newAttribute("date_3.aaW81lMifn6q"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Date 3)
 * Attribute ID: date_3.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3WeekMonSun: IAttribute = newAttribute("date_3.aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Date 3)
 * Attribute ID: date_3.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3WeekMonSunOfQtr: IAttribute = newAttribute("date_3.abg81lMifn6q");
/**
 * Attribute Title: Month (Date 3)
 * Attribute ID: date_3.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3Month = {
    /**
     * Display Form Title: Short (Jan) (Date 3)
     * Display Form ID: date_3.abm81lMifn6q
     */
    Short: newAttribute("date_3.abm81lMifn6q"),
    /**
     * Display Form Title: Long (January) (Date 3)
     * Display Form ID: date_3.abs81lMifn6q
     */ Long: newAttribute("date_3.abs81lMifn6q"),
    /**
     * Display Form Title: Number (M1) (Date 3)
     * Display Form ID: date_3.abq81lMifn6q
     */ Number: newAttribute("date_3.abq81lMifn6q"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Date 3)
     * Display Form ID: date_3.abo81lMifn6q
     */ MQ: newAttribute("date_3.abo81lMifn6q"),
};
/**
 * Attribute Title: Month of Quarter (Date 3)
 * Attribute ID: date_3.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3MonthOfQuarter: IAttribute = newAttribute("date_3.aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Date 3)
 * Attribute ID: date_3.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3DayOfYear: IAttribute = newAttribute("date_3.abE81lMifn6q");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Date 3)
 * Attribute ID: date_3.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3DayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Date 3)
     * Display Form ID: date_3.abK81lMifn6q
     */
    Short: newAttribute("date_3.abK81lMifn6q"),
    /**
     * Display Form Title: Long (Sunday) (Date 3)
     * Display Form ID: date_3.abO81lMifn6q
     */ Long: newAttribute("date_3.abO81lMifn6q"),
    /**
     * Display Form Title: Number (1=Sunday) (Date 3)
     * Display Form ID: date_3.abM81lMifn6q
     */ Number: newAttribute("date_3.abM81lMifn6q"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Date 3)
 * Attribute ID: date_3.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3DayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Date 3)
     * Display Form ID: date_3.abU81lMifn6q
     */
    Short: newAttribute("date_3.abU81lMifn6q"),
    /**
     * Display Form Title: Long (Monday) (Date 3)
     * Display Form ID: date_3.abY81lMifn6q
     */ Long: newAttribute("date_3.abY81lMifn6q"),
    /**
     * Display Form Title: Number (1=Monday) (Date 3)
     * Display Form ID: date_3.abW81lMifn6q
     */ Number: newAttribute("date_3.abW81lMifn6q"),
};
/**
 * Attribute Title: Day of Quarter (Date 3)
 * Attribute ID: date_3.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3DayOfQuarter: IAttribute = newAttribute("date_3.ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Date 3)
 * Attribute ID: date_3.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3DayOfMonth: IAttribute = newAttribute("date_3.aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Date 3)
 * Attribute ID: date_3.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3QuarterYear: IAttribute = newAttribute("date_3.aci81lMifn6q");
/**
 * Attribute Title: Month/Year (Date 3)
 * Attribute ID: date_3.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3MonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Date 3)
     * Display Form ID: date_3.act81lMifn6q
     */
    Short: newAttribute("date_3.act81lMifn6q"),
    /**
     * Display Form Title: Long (January 2010) (Date 3)
     * Display Form ID: date_3.acx81lMifn6q
     */ Long: newAttribute("date_3.acx81lMifn6q"),
    /**
     * Display Form Title: Number (1/2010) (Date 3)
     * Display Form ID: date_3.acv81lMifn6q
     */ Number: newAttribute("date_3.acv81lMifn6q"),
};
/**
 * Attribute Title: Date (Date 3)
 * Attribute ID: date_3.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3Date = {
    /**
     * Display Form Title: mm/dd/yyyy (Date 3)
     * Display Form ID: date_3.date.mmddyyyy
     */
    MmDdYyyy: newAttribute("date_3.date.mmddyyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Date 3)
     * Display Form ID: date_3.date.yyyymmdd
     */ YyyyMmDd: newAttribute("date_3.date.yyyymmdd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Date 3)
     * Display Form ID: date_3.date.mdyy
     */ MDYy: newAttribute("date_3.date.mdyy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Date 3)
     * Display Form ID: date_3.date.long
     */ Long: newAttribute("date_3.date.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Date 3)
     * Display Form ID: date_3.date.ddmmyyyy
     */ DdMmYyyy: newAttribute("date_3.date.ddmmyyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Date 3)
     * Display Form ID: date_3.date.eddmmyyyy
     */ DdMmYyyy_1: newAttribute("date_3.date.eddmmyyyy"),
};
/**
 * Attribute Title: Year (Date 4)
 * Attribute ID: date_4.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date4Year: IAttribute = newAttribute("date_4.aag81lMifn6q");
/**
 * Attribute Title: Quarter (Date 4)
 * Attribute ID: date_4.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date4Quarter: IAttribute = newAttribute("date_4.aam81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Date 4)
 * Attribute ID: date_4.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date4WeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date 4)
     * Display Form ID: date_4.aaA81lMifn6q
     */
    WeekNrYear: newAttribute("date_4.aaA81lMifn6q"),
    /**
     * Display Form Title: Week Starting (Date 4)
     * Display Form ID: date_4.aaw81lMifn6q
     */ WeekStarting: newAttribute("date_4.aaw81lMifn6q"),
    /**
     * Display Form Title: From - To (Date 4)
     * Display Form ID: date_4.aau81lMifn6q
     */ FromTo: newAttribute("date_4.aau81lMifn6q"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Date 4)
     * Display Form ID: date_4.aay81lMifn6q
     */ WeekNrYear_1: newAttribute("date_4.aay81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Date 4)
     * Display Form ID: date_4.aaC81lMifn6q
     */ WkQtrYear: newAttribute("date_4.aaC81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Date 4)
     * Display Form ID: date_4.aas81lMifn6q
     */ WkQtrYear_1: newAttribute("date_4.aas81lMifn6q"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Date 4)
 * Attribute ID: date_4.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date4WeekSunSat: IAttribute = newAttribute("date_4.aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Date 4)
 * Attribute ID: date_4.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date4WeekSunSatOfQtr: IAttribute = newAttribute("date_4.aaO81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Date 4)
 * Attribute ID: date_4.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date4WeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date 4)
     * Display Form ID: date_4.aa281lMifn6q
     */
    WeekNrYear: newAttribute("date_4.aa281lMifn6q"),
    /**
     * Display Form Title: Week Starting (Date 4)
     * Display Form ID: date_4.aaY81lMifn6q
     */ WeekStarting: newAttribute("date_4.aaY81lMifn6q"),
    /**
     * Display Form Title: From - To (Date 4)
     * Display Form ID: date_4.aaW81lMifn6q
     */ FromTo: newAttribute("date_4.aaW81lMifn6q"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Date 4)
 * Attribute ID: date_4.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date4WeekMonSun: IAttribute = newAttribute("date_4.aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Date 4)
 * Attribute ID: date_4.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date4WeekMonSunOfQtr: IAttribute = newAttribute("date_4.abg81lMifn6q");
/**
 * Attribute Title: Month (Date 4)
 * Attribute ID: date_4.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date4Month = {
    /**
     * Display Form Title: Short (Jan) (Date 4)
     * Display Form ID: date_4.abm81lMifn6q
     */
    Short: newAttribute("date_4.abm81lMifn6q"),
    /**
     * Display Form Title: Long (January) (Date 4)
     * Display Form ID: date_4.abs81lMifn6q
     */ Long: newAttribute("date_4.abs81lMifn6q"),
    /**
     * Display Form Title: Number (M1) (Date 4)
     * Display Form ID: date_4.abq81lMifn6q
     */ Number: newAttribute("date_4.abq81lMifn6q"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Date 4)
     * Display Form ID: date_4.abo81lMifn6q
     */ MQ: newAttribute("date_4.abo81lMifn6q"),
};
/**
 * Attribute Title: Month of Quarter (Date 4)
 * Attribute ID: date_4.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date4MonthOfQuarter: IAttribute = newAttribute("date_4.aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Date 4)
 * Attribute ID: date_4.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date4DayOfYear: IAttribute = newAttribute("date_4.abE81lMifn6q");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Date 4)
 * Attribute ID: date_4.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date4DayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Date 4)
     * Display Form ID: date_4.abK81lMifn6q
     */
    Short: newAttribute("date_4.abK81lMifn6q"),
    /**
     * Display Form Title: Long (Sunday) (Date 4)
     * Display Form ID: date_4.abO81lMifn6q
     */ Long: newAttribute("date_4.abO81lMifn6q"),
    /**
     * Display Form Title: Number (1=Sunday) (Date 4)
     * Display Form ID: date_4.abM81lMifn6q
     */ Number: newAttribute("date_4.abM81lMifn6q"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Date 4)
 * Attribute ID: date_4.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date4DayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Date 4)
     * Display Form ID: date_4.abU81lMifn6q
     */
    Short: newAttribute("date_4.abU81lMifn6q"),
    /**
     * Display Form Title: Long (Monday) (Date 4)
     * Display Form ID: date_4.abY81lMifn6q
     */ Long: newAttribute("date_4.abY81lMifn6q"),
    /**
     * Display Form Title: Number (1=Monday) (Date 4)
     * Display Form ID: date_4.abW81lMifn6q
     */ Number: newAttribute("date_4.abW81lMifn6q"),
};
/**
 * Attribute Title: Day of Quarter (Date 4)
 * Attribute ID: date_4.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date4DayOfQuarter: IAttribute = newAttribute("date_4.ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Date 4)
 * Attribute ID: date_4.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date4DayOfMonth: IAttribute = newAttribute("date_4.aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Date 4)
 * Attribute ID: date_4.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date4QuarterYear: IAttribute = newAttribute("date_4.aci81lMifn6q");
/**
 * Attribute Title: Month/Year (Date 4)
 * Attribute ID: date_4.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date4MonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Date 4)
     * Display Form ID: date_4.act81lMifn6q
     */
    Short: newAttribute("date_4.act81lMifn6q"),
    /**
     * Display Form Title: Long (January 2010) (Date 4)
     * Display Form ID: date_4.acx81lMifn6q
     */ Long: newAttribute("date_4.acx81lMifn6q"),
    /**
     * Display Form Title: Number (1/2010) (Date 4)
     * Display Form ID: date_4.acv81lMifn6q
     */ Number: newAttribute("date_4.acv81lMifn6q"),
};
/**
 * Attribute Title: Date (Date 4)
 * Attribute ID: date_4.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date4Date = {
    /**
     * Display Form Title: mm/dd/yyyy (Date 4)
     * Display Form ID: date_4.date.mmddyyyy
     */
    MmDdYyyy: newAttribute("date_4.date.mmddyyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Date 4)
     * Display Form ID: date_4.date.yyyymmdd
     */ YyyyMmDd: newAttribute("date_4.date.yyyymmdd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Date 4)
     * Display Form ID: date_4.date.mdyy
     */ MDYy: newAttribute("date_4.date.mdyy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Date 4)
     * Display Form ID: date_4.date.long
     */ Long: newAttribute("date_4.date.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Date 4)
     * Display Form ID: date_4.date.ddmmyyyy
     */ DdMmYyyy: newAttribute("date_4.date.ddmmyyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Date 4)
     * Display Form ID: date_4.date.eddmmyyyy
     */ DdMmYyyy_1: newAttribute("date_4.date.eddmmyyyy"),
};
/**
 * Attribute Title: Year (Paydate)
 * Attribute ID: paydate.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const PaydateYear: IAttribute = newAttribute("paydate.aag81lMifn6q");
/**
 * Attribute Title: Quarter (Paydate)
 * Attribute ID: paydate.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const PaydateQuarter: IAttribute = newAttribute("paydate.aam81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Paydate)
 * Attribute ID: paydate.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const PaydateWeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Paydate)
     * Display Form ID: paydate.aaA81lMifn6q
     */
    WeekNrYear: newAttribute("paydate.aaA81lMifn6q"),
    /**
     * Display Form Title: Week Starting (Paydate)
     * Display Form ID: paydate.aaw81lMifn6q
     */ WeekStarting: newAttribute("paydate.aaw81lMifn6q"),
    /**
     * Display Form Title: From - To (Paydate)
     * Display Form ID: paydate.aau81lMifn6q
     */ FromTo: newAttribute("paydate.aau81lMifn6q"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Paydate)
     * Display Form ID: paydate.aay81lMifn6q
     */ WeekNrYear_1: newAttribute("paydate.aay81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Paydate)
     * Display Form ID: paydate.aaC81lMifn6q
     */ WkQtrYear: newAttribute("paydate.aaC81lMifn6q"),
    /**
     * Display Form Title: Wk/Qtr/Year (Paydate)
     * Display Form ID: paydate.aas81lMifn6q
     */ WkQtrYear_1: newAttribute("paydate.aas81lMifn6q"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Paydate)
 * Attribute ID: paydate.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const PaydateWeekSunSat: IAttribute = newAttribute("paydate.aaI81lMifn6q");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Paydate)
 * Attribute ID: paydate.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const PaydateWeekSunSatOfQtr: IAttribute = newAttribute("paydate.aaO81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Paydate)
 * Attribute ID: paydate.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const PaydateWeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Paydate)
     * Display Form ID: paydate.aa281lMifn6q
     */
    WeekNrYear: newAttribute("paydate.aa281lMifn6q"),
    /**
     * Display Form Title: Week Starting (Paydate)
     * Display Form ID: paydate.aaY81lMifn6q
     */ WeekStarting: newAttribute("paydate.aaY81lMifn6q"),
    /**
     * Display Form Title: From - To (Paydate)
     * Display Form ID: paydate.aaW81lMifn6q
     */ FromTo: newAttribute("paydate.aaW81lMifn6q"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Paydate)
 * Attribute ID: paydate.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const PaydateWeekMonSun: IAttribute = newAttribute("paydate.aba81lMifn6q");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Paydate)
 * Attribute ID: paydate.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const PaydateWeekMonSunOfQtr: IAttribute = newAttribute("paydate.abg81lMifn6q");
/**
 * Attribute Title: Month (Paydate)
 * Attribute ID: paydate.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const PaydateMonth = {
    /**
     * Display Form Title: Short (Jan) (Paydate)
     * Display Form ID: paydate.abm81lMifn6q
     */
    Short: newAttribute("paydate.abm81lMifn6q"),
    /**
     * Display Form Title: Long (January) (Paydate)
     * Display Form ID: paydate.abs81lMifn6q
     */ Long: newAttribute("paydate.abs81lMifn6q"),
    /**
     * Display Form Title: Number (M1) (Paydate)
     * Display Form ID: paydate.abq81lMifn6q
     */ Number: newAttribute("paydate.abq81lMifn6q"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Paydate)
     * Display Form ID: paydate.abo81lMifn6q
     */ MQ: newAttribute("paydate.abo81lMifn6q"),
};
/**
 * Attribute Title: Month of Quarter (Paydate)
 * Attribute ID: paydate.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const PaydateMonthOfQuarter: IAttribute = newAttribute("paydate.aby81lMifn6q");
/**
 * Attribute Title: Day of Year (Paydate)
 * Attribute ID: paydate.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const PaydateDayOfYear: IAttribute = newAttribute("paydate.abE81lMifn6q");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Paydate)
 * Attribute ID: paydate.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const PaydateDayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Paydate)
     * Display Form ID: paydate.abK81lMifn6q
     */
    Short: newAttribute("paydate.abK81lMifn6q"),
    /**
     * Display Form Title: Long (Sunday) (Paydate)
     * Display Form ID: paydate.abO81lMifn6q
     */ Long: newAttribute("paydate.abO81lMifn6q"),
    /**
     * Display Form Title: Number (1=Sunday) (Paydate)
     * Display Form ID: paydate.abM81lMifn6q
     */ Number: newAttribute("paydate.abM81lMifn6q"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Paydate)
 * Attribute ID: paydate.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const PaydateDayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Paydate)
     * Display Form ID: paydate.abU81lMifn6q
     */
    Short: newAttribute("paydate.abU81lMifn6q"),
    /**
     * Display Form Title: Long (Monday) (Paydate)
     * Display Form ID: paydate.abY81lMifn6q
     */ Long: newAttribute("paydate.abY81lMifn6q"),
    /**
     * Display Form Title: Number (1=Monday) (Paydate)
     * Display Form ID: paydate.abW81lMifn6q
     */ Number: newAttribute("paydate.abW81lMifn6q"),
};
/**
 * Attribute Title: Day of Quarter (Paydate)
 * Attribute ID: paydate.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const PaydateDayOfQuarter: IAttribute = newAttribute("paydate.ab481lMifn6q");
/**
 * Attribute Title: Day of Month (Paydate)
 * Attribute ID: paydate.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const PaydateDayOfMonth: IAttribute = newAttribute("paydate.aca81lMifn6q");
/**
 * Attribute Title: Quarter/Year (Paydate)
 * Attribute ID: paydate.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const PaydateQuarterYear: IAttribute = newAttribute("paydate.aci81lMifn6q");
/**
 * Attribute Title: Month/Year (Paydate)
 * Attribute ID: paydate.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const PaydateMonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Paydate)
     * Display Form ID: paydate.act81lMifn6q
     */
    Short: newAttribute("paydate.act81lMifn6q"),
    /**
     * Display Form Title: Long (January 2010) (Paydate)
     * Display Form ID: paydate.acx81lMifn6q
     */ Long: newAttribute("paydate.acx81lMifn6q"),
    /**
     * Display Form Title: Number (1/2010) (Paydate)
     * Display Form ID: paydate.acv81lMifn6q
     */ Number: newAttribute("paydate.acv81lMifn6q"),
};
/**
 * Attribute Title: Date (Paydate)
 * Attribute ID: paydate.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const PaydateDate = {
    /**
     * Display Form Title: mm/dd/yyyy (Paydate)
     * Display Form ID: paydate.date.mmddyyyy
     */
    MmDdYyyy: newAttribute("paydate.date.mmddyyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Paydate)
     * Display Form ID: paydate.date.yyyymmdd
     */ YyyyMmDd: newAttribute("paydate.date.yyyymmdd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Paydate)
     * Display Form ID: paydate.date.mdyy
     */ MDYy: newAttribute("paydate.date.mdyy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Paydate)
     * Display Form ID: paydate.date.long
     */ Long: newAttribute("paydate.date.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Paydate)
     * Display Form ID: paydate.date.ddmmyyyy
     */ DdMmYyyy: newAttribute("paydate.date.ddmmyyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Paydate)
     * Display Form ID: paydate.date.eddmmyyyy
     */ DdMmYyyy_1: newAttribute("paydate.date.eddmmyyyy"),
};
/**
 * Attribute Title: Year (Date10)
 * Attribute ID: date10.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date10Year: IAttribute = newAttribute("date10.year.default");
/**
 * Attribute Title: Quarter (Date10)
 * Attribute ID: date10.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date10Quarter: IAttribute = newAttribute("date10.quarter.in.year.default");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Date10)
 * Attribute ID: date10.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date10WeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date10)
     * Display Form ID: date10.week.wk_year
     */
    WeekNrYear: newAttribute("date10.week.wk_year"),
    /**
     * Display Form Title: Week Starting (Date10)
     * Display Form ID: date10.week.starting
     */ WeekStarting: newAttribute("date10.week.starting"),
    /**
     * Display Form Title: From - To (Date10)
     * Display Form ID: date10.week.from_to
     */ FromTo: newAttribute("date10.week.from_to"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Date10)
     * Display Form ID: date10.week.wk_year_cont
     */ WeekNrYear_1: newAttribute("date10.week.wk_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Date10)
     * Display Form ID: date10.week.wk_qtr_year_cont
     */ WkQtrYear: newAttribute("date10.week.wk_qtr_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Date10)
     * Display Form ID: date10.week.wk_qtr_year
     */ WkQtrYear_1: newAttribute("date10.week.wk_qtr_year"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Date10)
 * Attribute ID: date10.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date10WeekSunSat: IAttribute = newAttribute("date10.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Date10)
 * Attribute ID: date10.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date10WeekSunSatOfQtr: IAttribute = newAttribute("date10.week.in.quarter.number_us");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Date10)
 * Attribute ID: date10.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date10WeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date10)
     * Display Form ID: date10.euweek.wk_year
     */
    WeekNrYear: newAttribute("date10.euweek.wk_year"),
    /**
     * Display Form Title: Week Starting (Date10)
     * Display Form ID: date10.euweek.starting
     */ WeekStarting: newAttribute("date10.euweek.starting"),
    /**
     * Display Form Title: From - To (Date10)
     * Display Form ID: date10.euweek.from_to
     */ FromTo: newAttribute("date10.euweek.from_to"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Date10)
 * Attribute ID: date10.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date10WeekMonSun: IAttribute = newAttribute("date10.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Date10)
 * Attribute ID: date10.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date10WeekMonSunOfQtr: IAttribute = newAttribute("date10.euweek.in.quarter.number_eu");
/**
 * Attribute Title: Month (Date10)
 * Attribute ID: date10.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date10Month = {
    /**
     * Display Form Title: Short (Jan) (Date10)
     * Display Form ID: date10.month.in.year.short
     */
    Short: newAttribute("date10.month.in.year.short"),
    /**
     * Display Form Title: Long (January) (Date10)
     * Display Form ID: date10.month.in.year.long
     */ Long: newAttribute("date10.month.in.year.long"),
    /**
     * Display Form Title: Number (M1) (Date10)
     * Display Form ID: date10.month.in.year.number
     */ Number: newAttribute("date10.month.in.year.number"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Date10)
     * Display Form ID: date10.month.in.year.m_q
     */ MQ: newAttribute("date10.month.in.year.m_q"),
};
/**
 * Attribute Title: Month of Quarter (Date10)
 * Attribute ID: date10.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date10MonthOfQuarter: IAttribute = newAttribute("date10.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Date10)
 * Attribute ID: date10.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date10DayOfYear: IAttribute = newAttribute("date10.day.in.year.default");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Date10)
 * Attribute ID: date10.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date10DayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Date10)
     * Display Form ID: date10.day.in.week.short
     */
    Short: newAttribute("date10.day.in.week.short"),
    /**
     * Display Form Title: Long (Sunday) (Date10)
     * Display Form ID: date10.day.in.week.long
     */ Long: newAttribute("date10.day.in.week.long"),
    /**
     * Display Form Title: Number (1=Sunday) (Date10)
     * Display Form ID: date10.day.in.week.number
     */ Number: newAttribute("date10.day.in.week.number"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Date10)
 * Attribute ID: date10.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date10DayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Date10)
     * Display Form ID: date10.day.in.euweek.short
     */
    Short: newAttribute("date10.day.in.euweek.short"),
    /**
     * Display Form Title: Long (Monday) (Date10)
     * Display Form ID: date10.day.in.euweek.long
     */ Long: newAttribute("date10.day.in.euweek.long"),
    /**
     * Display Form Title: Number (1=Monday) (Date10)
     * Display Form ID: date10.day.in.euweek.number
     */ Number: newAttribute("date10.day.in.euweek.number"),
};
/**
 * Attribute Title: Day of Quarter (Date10)
 * Attribute ID: date10.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date10DayOfQuarter: IAttribute = newAttribute("date10.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Date10)
 * Attribute ID: date10.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date10DayOfMonth: IAttribute = newAttribute("date10.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Date10)
 * Attribute ID: date10.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date10QuarterYear: IAttribute = newAttribute("date10.quarter.short_us");
/**
 * Attribute Title: Month/Year (Date10)
 * Attribute ID: date10.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date10MonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Date10)
     * Display Form ID: date10.month.short
     */
    Short: newAttribute("date10.month.short"),
    /**
     * Display Form Title: Long (January 2010) (Date10)
     * Display Form ID: date10.month.long
     */ Long: newAttribute("date10.month.long"),
    /**
     * Display Form Title: Number (1/2010) (Date10)
     * Display Form ID: date10.month.number
     */ Number: newAttribute("date10.month.number"),
};
/**
 * Attribute Title: Date (Date10)
 * Attribute ID: date10.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date10Date = {
    /**
     * Display Form Title: mm/dd/yyyy (Date10)
     * Display Form ID: date10.date.day.us.mm_dd_yyyy
     */
    MmDdYyyy: newAttribute("date10.date.day.us.mm_dd_yyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Date10)
     * Display Form ID: date10.date.day.yyyy_mm_dd
     */ YyyyMmDd: newAttribute("date10.date.day.yyyy_mm_dd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Date10)
     * Display Form ID: date10.date.day.us.m_d_yy
     */ MDYy: newAttribute("date10.date.day.us.m_d_yy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Date10)
     * Display Form ID: date10.date.day.us.long
     */ Long: newAttribute("date10.date.day.us.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Date10)
     * Display Form ID: date10.date.day.uk.dd_mm_yyyy
     */ DdMmYyyy: newAttribute("date10.date.day.uk.dd_mm_yyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Date10)
     * Display Form ID: date10.date.day.eu.dd_mm_yyyy
     */ DdMmYyyy_1: newAttribute("date10.date.day.eu.dd_mm_yyyy"),
};
/**
 * Attribute Title: US Week Year (Date10)
 * Attribute ID: date10.year.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date10USWeekYear: IAttribute = newAttribute("date10.year.for.week.number");
/**
 * Attribute Title: EU Week Year (Date10)
 * Attribute ID: date10.year.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date10EUWeekYear: IAttribute = newAttribute("date10.year.for.euweek.number");
/**
 * Attribute Title: US Week Quarter (Date10)
 * Attribute ID: date10.quarter.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date10USWeekQuarter: IAttribute = newAttribute("date10.quarter.for.week.number");
/**
 * Attribute Title: EU Week Quarter (Date10)
 * Attribute ID: date10.quarter.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date10EUWeekQuarter: IAttribute = newAttribute("date10.quarter.for.euweek.number");
/**
 * Attribute Title: Year (Date11)
 * Attribute ID: date11.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date11Year: IAttribute = newAttribute("date11.year.default");
/**
 * Attribute Title: Quarter (Date11)
 * Attribute ID: date11.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date11Quarter: IAttribute = newAttribute("date11.quarter.in.year.default");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Date11)
 * Attribute ID: date11.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date11WeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date11)
     * Display Form ID: date11.week.wk_year
     */
    WeekNrYear: newAttribute("date11.week.wk_year"),
    /**
     * Display Form Title: Week Starting (Date11)
     * Display Form ID: date11.week.starting
     */ WeekStarting: newAttribute("date11.week.starting"),
    /**
     * Display Form Title: From - To (Date11)
     * Display Form ID: date11.week.from_to
     */ FromTo: newAttribute("date11.week.from_to"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Date11)
     * Display Form ID: date11.week.wk_year_cont
     */ WeekNrYear_1: newAttribute("date11.week.wk_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Date11)
     * Display Form ID: date11.week.wk_qtr_year_cont
     */ WkQtrYear: newAttribute("date11.week.wk_qtr_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Date11)
     * Display Form ID: date11.week.wk_qtr_year
     */ WkQtrYear_1: newAttribute("date11.week.wk_qtr_year"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Date11)
 * Attribute ID: date11.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date11WeekSunSat: IAttribute = newAttribute("date11.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Date11)
 * Attribute ID: date11.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date11WeekSunSatOfQtr: IAttribute = newAttribute("date11.week.in.quarter.number_us");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Date11)
 * Attribute ID: date11.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date11WeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date11)
     * Display Form ID: date11.euweek.wk_year
     */
    WeekNrYear: newAttribute("date11.euweek.wk_year"),
    /**
     * Display Form Title: Week Starting (Date11)
     * Display Form ID: date11.euweek.starting
     */ WeekStarting: newAttribute("date11.euweek.starting"),
    /**
     * Display Form Title: From - To (Date11)
     * Display Form ID: date11.euweek.from_to
     */ FromTo: newAttribute("date11.euweek.from_to"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Date11)
 * Attribute ID: date11.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date11WeekMonSun: IAttribute = newAttribute("date11.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Date11)
 * Attribute ID: date11.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date11WeekMonSunOfQtr: IAttribute = newAttribute("date11.euweek.in.quarter.number_eu");
/**
 * Attribute Title: Month (Date11)
 * Attribute ID: date11.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date11Month = {
    /**
     * Display Form Title: Short (Jan) (Date11)
     * Display Form ID: date11.month.in.year.short
     */
    Short: newAttribute("date11.month.in.year.short"),
    /**
     * Display Form Title: Long (January) (Date11)
     * Display Form ID: date11.month.in.year.long
     */ Long: newAttribute("date11.month.in.year.long"),
    /**
     * Display Form Title: Number (M1) (Date11)
     * Display Form ID: date11.month.in.year.number
     */ Number: newAttribute("date11.month.in.year.number"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Date11)
     * Display Form ID: date11.month.in.year.m_q
     */ MQ: newAttribute("date11.month.in.year.m_q"),
};
/**
 * Attribute Title: Month of Quarter (Date11)
 * Attribute ID: date11.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date11MonthOfQuarter: IAttribute = newAttribute("date11.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Date11)
 * Attribute ID: date11.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date11DayOfYear: IAttribute = newAttribute("date11.day.in.year.default");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Date11)
 * Attribute ID: date11.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date11DayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Date11)
     * Display Form ID: date11.day.in.week.short
     */
    Short: newAttribute("date11.day.in.week.short"),
    /**
     * Display Form Title: Long (Sunday) (Date11)
     * Display Form ID: date11.day.in.week.long
     */ Long: newAttribute("date11.day.in.week.long"),
    /**
     * Display Form Title: Number (1=Sunday) (Date11)
     * Display Form ID: date11.day.in.week.number
     */ Number: newAttribute("date11.day.in.week.number"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Date11)
 * Attribute ID: date11.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date11DayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Date11)
     * Display Form ID: date11.day.in.euweek.short
     */
    Short: newAttribute("date11.day.in.euweek.short"),
    /**
     * Display Form Title: Long (Monday) (Date11)
     * Display Form ID: date11.day.in.euweek.long
     */ Long: newAttribute("date11.day.in.euweek.long"),
    /**
     * Display Form Title: Number (1=Monday) (Date11)
     * Display Form ID: date11.day.in.euweek.number
     */ Number: newAttribute("date11.day.in.euweek.number"),
};
/**
 * Attribute Title: Day of Quarter (Date11)
 * Attribute ID: date11.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date11DayOfQuarter: IAttribute = newAttribute("date11.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Date11)
 * Attribute ID: date11.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date11DayOfMonth: IAttribute = newAttribute("date11.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Date11)
 * Attribute ID: date11.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date11QuarterYear: IAttribute = newAttribute("date11.quarter.short_us");
/**
 * Attribute Title: Month/Year (Date11)
 * Attribute ID: date11.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date11MonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Date11)
     * Display Form ID: date11.month.short
     */
    Short: newAttribute("date11.month.short"),
    /**
     * Display Form Title: Long (January 2010) (Date11)
     * Display Form ID: date11.month.long
     */ Long: newAttribute("date11.month.long"),
    /**
     * Display Form Title: Number (1/2010) (Date11)
     * Display Form ID: date11.month.number
     */ Number: newAttribute("date11.month.number"),
};
/**
 * Attribute Title: Date (Date11)
 * Attribute ID: date11.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date11Date = {
    /**
     * Display Form Title: mm/dd/yyyy (Date11)
     * Display Form ID: date11.date.day.us.mm_dd_yyyy
     */
    MmDdYyyy: newAttribute("date11.date.day.us.mm_dd_yyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Date11)
     * Display Form ID: date11.date.day.yyyy_mm_dd
     */ YyyyMmDd: newAttribute("date11.date.day.yyyy_mm_dd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Date11)
     * Display Form ID: date11.date.day.us.m_d_yy
     */ MDYy: newAttribute("date11.date.day.us.m_d_yy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Date11)
     * Display Form ID: date11.date.day.us.long
     */ Long: newAttribute("date11.date.day.us.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Date11)
     * Display Form ID: date11.date.day.uk.dd_mm_yyyy
     */ DdMmYyyy: newAttribute("date11.date.day.uk.dd_mm_yyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Date11)
     * Display Form ID: date11.date.day.eu.dd_mm_yyyy
     */ DdMmYyyy_1: newAttribute("date11.date.day.eu.dd_mm_yyyy"),
};
/**
 * Attribute Title: US Week Year (Date11)
 * Attribute ID: date11.year.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date11USWeekYear: IAttribute = newAttribute("date11.year.for.week.number");
/**
 * Attribute Title: EU Week Year (Date11)
 * Attribute ID: date11.year.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date11EUWeekYear: IAttribute = newAttribute("date11.year.for.euweek.number");
/**
 * Attribute Title: US Week Quarter (Date11)
 * Attribute ID: date11.quarter.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date11USWeekQuarter: IAttribute = newAttribute("date11.quarter.for.week.number");
/**
 * Attribute Title: EU Week Quarter (Date11)
 * Attribute ID: date11.quarter.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date11EUWeekQuarter: IAttribute = newAttribute("date11.quarter.for.euweek.number");
/**
 * Attribute Title: Year (Date12)
 * Attribute ID: date12.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date12Year: IAttribute = newAttribute("date12.year.default");
/**
 * Attribute Title: Quarter (Date12)
 * Attribute ID: date12.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date12Quarter: IAttribute = newAttribute("date12.quarter.in.year.default");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Date12)
 * Attribute ID: date12.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date12WeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date12)
     * Display Form ID: date12.week.wk_year
     */
    WeekNrYear: newAttribute("date12.week.wk_year"),
    /**
     * Display Form Title: Week Starting (Date12)
     * Display Form ID: date12.week.starting
     */ WeekStarting: newAttribute("date12.week.starting"),
    /**
     * Display Form Title: From - To (Date12)
     * Display Form ID: date12.week.from_to
     */ FromTo: newAttribute("date12.week.from_to"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Date12)
     * Display Form ID: date12.week.wk_year_cont
     */ WeekNrYear_1: newAttribute("date12.week.wk_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Date12)
     * Display Form ID: date12.week.wk_qtr_year_cont
     */ WkQtrYear: newAttribute("date12.week.wk_qtr_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Date12)
     * Display Form ID: date12.week.wk_qtr_year
     */ WkQtrYear_1: newAttribute("date12.week.wk_qtr_year"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Date12)
 * Attribute ID: date12.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date12WeekSunSat: IAttribute = newAttribute("date12.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Date12)
 * Attribute ID: date12.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date12WeekSunSatOfQtr: IAttribute = newAttribute("date12.week.in.quarter.number_us");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Date12)
 * Attribute ID: date12.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date12WeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date12)
     * Display Form ID: date12.euweek.wk_year
     */
    WeekNrYear: newAttribute("date12.euweek.wk_year"),
    /**
     * Display Form Title: Week Starting (Date12)
     * Display Form ID: date12.euweek.starting
     */ WeekStarting: newAttribute("date12.euweek.starting"),
    /**
     * Display Form Title: From - To (Date12)
     * Display Form ID: date12.euweek.from_to
     */ FromTo: newAttribute("date12.euweek.from_to"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Date12)
 * Attribute ID: date12.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date12WeekMonSun: IAttribute = newAttribute("date12.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Date12)
 * Attribute ID: date12.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date12WeekMonSunOfQtr: IAttribute = newAttribute("date12.euweek.in.quarter.number_eu");
/**
 * Attribute Title: Month (Date12)
 * Attribute ID: date12.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date12Month = {
    /**
     * Display Form Title: Short (Jan) (Date12)
     * Display Form ID: date12.month.in.year.short
     */
    Short: newAttribute("date12.month.in.year.short"),
    /**
     * Display Form Title: Long (January) (Date12)
     * Display Form ID: date12.month.in.year.long
     */ Long: newAttribute("date12.month.in.year.long"),
    /**
     * Display Form Title: Number (M1) (Date12)
     * Display Form ID: date12.month.in.year.number
     */ Number: newAttribute("date12.month.in.year.number"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Date12)
     * Display Form ID: date12.month.in.year.m_q
     */ MQ: newAttribute("date12.month.in.year.m_q"),
};
/**
 * Attribute Title: Month of Quarter (Date12)
 * Attribute ID: date12.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date12MonthOfQuarter: IAttribute = newAttribute("date12.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Date12)
 * Attribute ID: date12.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date12DayOfYear: IAttribute = newAttribute("date12.day.in.year.default");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Date12)
 * Attribute ID: date12.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date12DayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Date12)
     * Display Form ID: date12.day.in.week.short
     */
    Short: newAttribute("date12.day.in.week.short"),
    /**
     * Display Form Title: Long (Sunday) (Date12)
     * Display Form ID: date12.day.in.week.long
     */ Long: newAttribute("date12.day.in.week.long"),
    /**
     * Display Form Title: Number (1=Sunday) (Date12)
     * Display Form ID: date12.day.in.week.number
     */ Number: newAttribute("date12.day.in.week.number"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Date12)
 * Attribute ID: date12.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date12DayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Date12)
     * Display Form ID: date12.day.in.euweek.short
     */
    Short: newAttribute("date12.day.in.euweek.short"),
    /**
     * Display Form Title: Long (Monday) (Date12)
     * Display Form ID: date12.day.in.euweek.long
     */ Long: newAttribute("date12.day.in.euweek.long"),
    /**
     * Display Form Title: Number (1=Monday) (Date12)
     * Display Form ID: date12.day.in.euweek.number
     */ Number: newAttribute("date12.day.in.euweek.number"),
};
/**
 * Attribute Title: Day of Quarter (Date12)
 * Attribute ID: date12.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date12DayOfQuarter: IAttribute = newAttribute("date12.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Date12)
 * Attribute ID: date12.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date12DayOfMonth: IAttribute = newAttribute("date12.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Date12)
 * Attribute ID: date12.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date12QuarterYear: IAttribute = newAttribute("date12.quarter.short_us");
/**
 * Attribute Title: Month/Year (Date12)
 * Attribute ID: date12.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date12MonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Date12)
     * Display Form ID: date12.month.short
     */
    Short: newAttribute("date12.month.short"),
    /**
     * Display Form Title: Long (January 2010) (Date12)
     * Display Form ID: date12.month.long
     */ Long: newAttribute("date12.month.long"),
    /**
     * Display Form Title: Number (1/2010) (Date12)
     * Display Form ID: date12.month.number
     */ Number: newAttribute("date12.month.number"),
};
/**
 * Attribute Title: Date (Date12)
 * Attribute ID: date12.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date12Date = {
    /**
     * Display Form Title: mm/dd/yyyy (Date12)
     * Display Form ID: date12.date.day.us.mm_dd_yyyy
     */
    MmDdYyyy: newAttribute("date12.date.day.us.mm_dd_yyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Date12)
     * Display Form ID: date12.date.day.yyyy_mm_dd
     */ YyyyMmDd: newAttribute("date12.date.day.yyyy_mm_dd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Date12)
     * Display Form ID: date12.date.day.us.m_d_yy
     */ MDYy: newAttribute("date12.date.day.us.m_d_yy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Date12)
     * Display Form ID: date12.date.day.us.long
     */ Long: newAttribute("date12.date.day.us.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Date12)
     * Display Form ID: date12.date.day.uk.dd_mm_yyyy
     */ DdMmYyyy: newAttribute("date12.date.day.uk.dd_mm_yyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Date12)
     * Display Form ID: date12.date.day.eu.dd_mm_yyyy
     */ DdMmYyyy_1: newAttribute("date12.date.day.eu.dd_mm_yyyy"),
};
/**
 * Attribute Title: US Week Year (Date12)
 * Attribute ID: date12.year.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date12USWeekYear: IAttribute = newAttribute("date12.year.for.week.number");
/**
 * Attribute Title: EU Week Year (Date12)
 * Attribute ID: date12.year.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date12EUWeekYear: IAttribute = newAttribute("date12.year.for.euweek.number");
/**
 * Attribute Title: US Week Quarter (Date12)
 * Attribute ID: date12.quarter.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date12USWeekQuarter: IAttribute = newAttribute("date12.quarter.for.week.number");
/**
 * Attribute Title: EU Week Quarter (Date12)
 * Attribute ID: date12.quarter.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date12EUWeekQuarter: IAttribute = newAttribute("date12.quarter.for.euweek.number");
/**
 * Attribute Title: Year (Date13)
 * Attribute ID: date13.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date13Year: IAttribute = newAttribute("date13.year.default");
/**
 * Attribute Title: Quarter (Date13)
 * Attribute ID: date13.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date13Quarter: IAttribute = newAttribute("date13.quarter.in.year.default");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Date13)
 * Attribute ID: date13.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date13WeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date13)
     * Display Form ID: date13.week.wk_year
     */
    WeekNrYear: newAttribute("date13.week.wk_year"),
    /**
     * Display Form Title: Week Starting (Date13)
     * Display Form ID: date13.week.starting
     */ WeekStarting: newAttribute("date13.week.starting"),
    /**
     * Display Form Title: From - To (Date13)
     * Display Form ID: date13.week.from_to
     */ FromTo: newAttribute("date13.week.from_to"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Date13)
     * Display Form ID: date13.week.wk_year_cont
     */ WeekNrYear_1: newAttribute("date13.week.wk_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Date13)
     * Display Form ID: date13.week.wk_qtr_year_cont
     */ WkQtrYear: newAttribute("date13.week.wk_qtr_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Date13)
     * Display Form ID: date13.week.wk_qtr_year
     */ WkQtrYear_1: newAttribute("date13.week.wk_qtr_year"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Date13)
 * Attribute ID: date13.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date13WeekSunSat: IAttribute = newAttribute("date13.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Date13)
 * Attribute ID: date13.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date13WeekSunSatOfQtr: IAttribute = newAttribute("date13.week.in.quarter.number_us");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Date13)
 * Attribute ID: date13.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date13WeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date13)
     * Display Form ID: date13.euweek.wk_year
     */
    WeekNrYear: newAttribute("date13.euweek.wk_year"),
    /**
     * Display Form Title: Week Starting (Date13)
     * Display Form ID: date13.euweek.starting
     */ WeekStarting: newAttribute("date13.euweek.starting"),
    /**
     * Display Form Title: From - To (Date13)
     * Display Form ID: date13.euweek.from_to
     */ FromTo: newAttribute("date13.euweek.from_to"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Date13)
 * Attribute ID: date13.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date13WeekMonSun: IAttribute = newAttribute("date13.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Date13)
 * Attribute ID: date13.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date13WeekMonSunOfQtr: IAttribute = newAttribute("date13.euweek.in.quarter.number_eu");
/**
 * Attribute Title: Month (Date13)
 * Attribute ID: date13.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date13Month = {
    /**
     * Display Form Title: Short (Jan) (Date13)
     * Display Form ID: date13.month.in.year.short
     */
    Short: newAttribute("date13.month.in.year.short"),
    /**
     * Display Form Title: Long (January) (Date13)
     * Display Form ID: date13.month.in.year.long
     */ Long: newAttribute("date13.month.in.year.long"),
    /**
     * Display Form Title: Number (M1) (Date13)
     * Display Form ID: date13.month.in.year.number
     */ Number: newAttribute("date13.month.in.year.number"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Date13)
     * Display Form ID: date13.month.in.year.m_q
     */ MQ: newAttribute("date13.month.in.year.m_q"),
};
/**
 * Attribute Title: Month of Quarter (Date13)
 * Attribute ID: date13.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date13MonthOfQuarter: IAttribute = newAttribute("date13.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Date13)
 * Attribute ID: date13.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date13DayOfYear: IAttribute = newAttribute("date13.day.in.year.default");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Date13)
 * Attribute ID: date13.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date13DayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Date13)
     * Display Form ID: date13.day.in.week.short
     */
    Short: newAttribute("date13.day.in.week.short"),
    /**
     * Display Form Title: Long (Sunday) (Date13)
     * Display Form ID: date13.day.in.week.long
     */ Long: newAttribute("date13.day.in.week.long"),
    /**
     * Display Form Title: Number (1=Sunday) (Date13)
     * Display Form ID: date13.day.in.week.number
     */ Number: newAttribute("date13.day.in.week.number"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Date13)
 * Attribute ID: date13.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date13DayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Date13)
     * Display Form ID: date13.day.in.euweek.short
     */
    Short: newAttribute("date13.day.in.euweek.short"),
    /**
     * Display Form Title: Long (Monday) (Date13)
     * Display Form ID: date13.day.in.euweek.long
     */ Long: newAttribute("date13.day.in.euweek.long"),
    /**
     * Display Form Title: Number (1=Monday) (Date13)
     * Display Form ID: date13.day.in.euweek.number
     */ Number: newAttribute("date13.day.in.euweek.number"),
};
/**
 * Attribute Title: Day of Quarter (Date13)
 * Attribute ID: date13.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date13DayOfQuarter: IAttribute = newAttribute("date13.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Date13)
 * Attribute ID: date13.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date13DayOfMonth: IAttribute = newAttribute("date13.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Date13)
 * Attribute ID: date13.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date13QuarterYear: IAttribute = newAttribute("date13.quarter.short_us");
/**
 * Attribute Title: Month/Year (Date13)
 * Attribute ID: date13.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date13MonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Date13)
     * Display Form ID: date13.month.short
     */
    Short: newAttribute("date13.month.short"),
    /**
     * Display Form Title: Long (January 2010) (Date13)
     * Display Form ID: date13.month.long
     */ Long: newAttribute("date13.month.long"),
    /**
     * Display Form Title: Number (1/2010) (Date13)
     * Display Form ID: date13.month.number
     */ Number: newAttribute("date13.month.number"),
};
/**
 * Attribute Title: Date (Date13)
 * Attribute ID: date13.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date13Date = {
    /**
     * Display Form Title: mm/dd/yyyy (Date13)
     * Display Form ID: date13.date.day.us.mm_dd_yyyy
     */
    MmDdYyyy: newAttribute("date13.date.day.us.mm_dd_yyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Date13)
     * Display Form ID: date13.date.day.yyyy_mm_dd
     */ YyyyMmDd: newAttribute("date13.date.day.yyyy_mm_dd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Date13)
     * Display Form ID: date13.date.day.us.m_d_yy
     */ MDYy: newAttribute("date13.date.day.us.m_d_yy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Date13)
     * Display Form ID: date13.date.day.us.long
     */ Long: newAttribute("date13.date.day.us.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Date13)
     * Display Form ID: date13.date.day.uk.dd_mm_yyyy
     */ DdMmYyyy: newAttribute("date13.date.day.uk.dd_mm_yyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Date13)
     * Display Form ID: date13.date.day.eu.dd_mm_yyyy
     */ DdMmYyyy_1: newAttribute("date13.date.day.eu.dd_mm_yyyy"),
};
/**
 * Attribute Title: US Week Year (Date13)
 * Attribute ID: date13.year.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date13USWeekYear: IAttribute = newAttribute("date13.year.for.week.number");
/**
 * Attribute Title: EU Week Year (Date13)
 * Attribute ID: date13.year.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date13EUWeekYear: IAttribute = newAttribute("date13.year.for.euweek.number");
/**
 * Attribute Title: US Week Quarter (Date13)
 * Attribute ID: date13.quarter.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date13USWeekQuarter: IAttribute = newAttribute("date13.quarter.for.week.number");
/**
 * Attribute Title: EU Week Quarter (Date13)
 * Attribute ID: date13.quarter.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date13EUWeekQuarter: IAttribute = newAttribute("date13.quarter.for.euweek.number");
/**
 * Attribute Title: Year (D Date)
 * Attribute ID: d_date.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DDateYear: IAttribute = newAttribute("d_date.year.default");
/**
 * Attribute Title: Quarter (D Date)
 * Attribute ID: d_date.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DDateQuarter: IAttribute = newAttribute("d_date.quarter.in.year.default");
/**
 * Attribute Title: Week (Sun-Sat)/Year (D Date)
 * Attribute ID: d_date.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DDateWeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (D Date)
     * Display Form ID: d_date.week.wk_year
     */
    WeekNrYear: newAttribute("d_date.week.wk_year"),
    /**
     * Display Form Title: Week Starting (D Date)
     * Display Form ID: d_date.week.starting
     */ WeekStarting: newAttribute("d_date.week.starting"),
    /**
     * Display Form Title: From - To (D Date)
     * Display Form ID: d_date.week.from_to
     */ FromTo: newAttribute("d_date.week.from_to"),
    /**
     * Display Form Title: Week #/Year (Cont.) (D Date)
     * Display Form ID: d_date.week.wk_year_cont
     */ WeekNrYear_1: newAttribute("d_date.week.wk_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (D Date)
     * Display Form ID: d_date.week.wk_qtr_year_cont
     */ WkQtrYear: newAttribute("d_date.week.wk_qtr_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (D Date)
     * Display Form ID: d_date.week.wk_qtr_year
     */ WkQtrYear_1: newAttribute("d_date.week.wk_qtr_year"),
};
/**
 * Attribute Title: Week (Sun-Sat) (D Date)
 * Attribute ID: d_date.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DDateWeekSunSat: IAttribute = newAttribute("d_date.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (D Date)
 * Attribute ID: d_date.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DDateWeekSunSatOfQtr: IAttribute = newAttribute("d_date.week.in.quarter.number_us");
/**
 * Attribute Title: Week (Mon-Sun)/Year (D Date)
 * Attribute ID: d_date.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DDateWeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (D Date)
     * Display Form ID: d_date.euweek.wk_year
     */
    WeekNrYear: newAttribute("d_date.euweek.wk_year"),
    /**
     * Display Form Title: Week Starting (D Date)
     * Display Form ID: d_date.euweek.starting
     */ WeekStarting: newAttribute("d_date.euweek.starting"),
    /**
     * Display Form Title: From - To (D Date)
     * Display Form ID: d_date.euweek.from_to
     */ FromTo: newAttribute("d_date.euweek.from_to"),
};
/**
 * Attribute Title: Week (Mon-Sun) (D Date)
 * Attribute ID: d_date.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DDateWeekMonSun: IAttribute = newAttribute("d_date.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (D Date)
 * Attribute ID: d_date.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DDateWeekMonSunOfQtr: IAttribute = newAttribute("d_date.euweek.in.quarter.number_eu");
/**
 * Attribute Title: Month (D Date)
 * Attribute ID: d_date.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DDateMonth = {
    /**
     * Display Form Title: Short (Jan) (D Date)
     * Display Form ID: d_date.month.in.year.short
     */
    Short: newAttribute("d_date.month.in.year.short"),
    /**
     * Display Form Title: Long (January) (D Date)
     * Display Form ID: d_date.month.in.year.long
     */ Long: newAttribute("d_date.month.in.year.long"),
    /**
     * Display Form Title: Number (M1) (D Date)
     * Display Form ID: d_date.month.in.year.number
     */ Number: newAttribute("d_date.month.in.year.number"),
    /**
     * Display Form Title: M/Q (M1/Q1) (D Date)
     * Display Form ID: d_date.month.in.year.m_q
     */ MQ: newAttribute("d_date.month.in.year.m_q"),
};
/**
 * Attribute Title: Month of Quarter (D Date)
 * Attribute ID: d_date.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DDateMonthOfQuarter: IAttribute = newAttribute("d_date.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (D Date)
 * Attribute ID: d_date.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DDateDayOfYear: IAttribute = newAttribute("d_date.day.in.year.default");
/**
 * Attribute Title: Day of Week (Sun-Sat) (D Date)
 * Attribute ID: d_date.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DDateDayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (D Date)
     * Display Form ID: d_date.day.in.week.short
     */
    Short: newAttribute("d_date.day.in.week.short"),
    /**
     * Display Form Title: Long (Sunday) (D Date)
     * Display Form ID: d_date.day.in.week.long
     */ Long: newAttribute("d_date.day.in.week.long"),
    /**
     * Display Form Title: Number (1=Sunday) (D Date)
     * Display Form ID: d_date.day.in.week.number
     */ Number: newAttribute("d_date.day.in.week.number"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (D Date)
 * Attribute ID: d_date.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DDateDayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (D Date)
     * Display Form ID: d_date.day.in.euweek.short
     */
    Short: newAttribute("d_date.day.in.euweek.short"),
    /**
     * Display Form Title: Long (Monday) (D Date)
     * Display Form ID: d_date.day.in.euweek.long
     */ Long: newAttribute("d_date.day.in.euweek.long"),
    /**
     * Display Form Title: Number (1=Monday) (D Date)
     * Display Form ID: d_date.day.in.euweek.number
     */ Number: newAttribute("d_date.day.in.euweek.number"),
};
/**
 * Attribute Title: Day of Quarter (D Date)
 * Attribute ID: d_date.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DDateDayOfQuarter: IAttribute = newAttribute("d_date.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (D Date)
 * Attribute ID: d_date.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DDateDayOfMonth: IAttribute = newAttribute("d_date.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (D Date)
 * Attribute ID: d_date.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DDateQuarterYear: IAttribute = newAttribute("d_date.quarter.short_us");
/**
 * Attribute Title: Month/Year (D Date)
 * Attribute ID: d_date.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DDateMonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (D Date)
     * Display Form ID: d_date.month.short
     */
    Short: newAttribute("d_date.month.short"),
    /**
     * Display Form Title: Long (January 2010) (D Date)
     * Display Form ID: d_date.month.long
     */ Long: newAttribute("d_date.month.long"),
    /**
     * Display Form Title: Number (1/2010) (D Date)
     * Display Form ID: d_date.month.number
     */ Number: newAttribute("d_date.month.number"),
};
/**
 * Attribute Title: Date (D Date)
 * Attribute ID: d_date.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DDateDate = {
    /**
     * Display Form Title: mm/dd/yyyy (D Date)
     * Display Form ID: d_date.date.day.us.mm_dd_yyyy
     */
    MmDdYyyy: newAttribute("d_date.date.day.us.mm_dd_yyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (D Date)
     * Display Form ID: d_date.date.day.yyyy_mm_dd
     */ YyyyMmDd: newAttribute("d_date.date.day.yyyy_mm_dd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (D Date)
     * Display Form ID: d_date.date.day.us.m_d_yy
     */ MDYy: newAttribute("d_date.date.day.us.m_d_yy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (D Date)
     * Display Form ID: d_date.date.day.us.long
     */ Long: newAttribute("d_date.date.day.us.long"),
    /**
     * Display Form Title: dd/mm/yyyy (D Date)
     * Display Form ID: d_date.date.day.uk.dd_mm_yyyy
     */ DdMmYyyy: newAttribute("d_date.date.day.uk.dd_mm_yyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (D Date)
     * Display Form ID: d_date.date.day.eu.dd_mm_yyyy
     */ DdMmYyyy_1: newAttribute("d_date.date.day.eu.dd_mm_yyyy"),
};
/**
 * Attribute Title: US Week Year (D Date)
 * Attribute ID: d_date.year.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DDateUSWeekYear: IAttribute = newAttribute("d_date.year.for.week.number");
/**
 * Attribute Title: EU Week Year (D Date)
 * Attribute ID: d_date.year.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DDateEUWeekYear: IAttribute = newAttribute("d_date.year.for.euweek.number");
/**
 * Attribute Title: US Week Quarter (D Date)
 * Attribute ID: d_date.quarter.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DDateUSWeekQuarter: IAttribute = newAttribute("d_date.quarter.for.week.number");
/**
 * Attribute Title: EU Week Quarter (D Date)
 * Attribute ID: d_date.quarter.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DDateEUWeekQuarter: IAttribute = newAttribute("d_date.quarter.for.euweek.number");
/**
 * Attribute Title: Year (Datum Proveden)
 * Attribute ID: datum_proveden.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumProvedenYear: IAttribute = newAttribute("datum_proveden.year.default");
/**
 * Attribute Title: Quarter (Datum Proveden)
 * Attribute ID: datum_proveden.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumProvedenQuarter: IAttribute = newAttribute("datum_proveden.quarter.in.year.default");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Datum Proveden)
 * Attribute ID: datum_proveden.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumProvedenWeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Datum Proveden)
     * Display Form ID: datum_proveden.week.wk_year
     */
    WeekNrYear: newAttribute("datum_proveden.week.wk_year"),
    /**
     * Display Form Title: Week Starting (Datum Proveden)
     * Display Form ID: datum_proveden.week.starting
     */ WeekStarting: newAttribute("datum_proveden.week.starting"),
    /**
     * Display Form Title: From - To (Datum Proveden)
     * Display Form ID: datum_proveden.week.from_to
     */ FromTo: newAttribute("datum_proveden.week.from_to"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Datum Proveden)
     * Display Form ID: datum_proveden.week.wk_year_cont
     */ WeekNrYear_1: newAttribute("datum_proveden.week.wk_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Datum Proveden)
     * Display Form ID: datum_proveden.week.wk_qtr_year_cont
     */ WkQtrYear: newAttribute("datum_proveden.week.wk_qtr_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Datum Proveden)
     * Display Form ID: datum_proveden.week.wk_qtr_year
     */ WkQtrYear_1: newAttribute("datum_proveden.week.wk_qtr_year"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Datum Proveden)
 * Attribute ID: datum_proveden.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumProvedenWeekSunSat: IAttribute = newAttribute("datum_proveden.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Datum Proveden)
 * Attribute ID: datum_proveden.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumProvedenWeekSunSatOfQtr: IAttribute = newAttribute(
    "datum_proveden.week.in.quarter.number_us",
);
/**
 * Attribute Title: Week (Mon-Sun)/Year (Datum Proveden)
 * Attribute ID: datum_proveden.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumProvedenWeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Datum Proveden)
     * Display Form ID: datum_proveden.euweek.wk_year
     */
    WeekNrYear: newAttribute("datum_proveden.euweek.wk_year"),
    /**
     * Display Form Title: Week Starting (Datum Proveden)
     * Display Form ID: datum_proveden.euweek.starting
     */ WeekStarting: newAttribute("datum_proveden.euweek.starting"),
    /**
     * Display Form Title: From - To (Datum Proveden)
     * Display Form ID: datum_proveden.euweek.from_to
     */ FromTo: newAttribute("datum_proveden.euweek.from_to"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Datum Proveden)
 * Attribute ID: datum_proveden.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumProvedenWeekMonSun: IAttribute = newAttribute("datum_proveden.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Datum Proveden)
 * Attribute ID: datum_proveden.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumProvedenWeekMonSunOfQtr: IAttribute = newAttribute(
    "datum_proveden.euweek.in.quarter.number_eu",
);
/**
 * Attribute Title: Month (Datum Proveden)
 * Attribute ID: datum_proveden.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumProvedenMonth = {
    /**
     * Display Form Title: Short (Jan) (Datum Proveden)
     * Display Form ID: datum_proveden.month.in.year.short
     */
    Short: newAttribute("datum_proveden.month.in.year.short"),
    /**
     * Display Form Title: Long (January) (Datum Proveden)
     * Display Form ID: datum_proveden.month.in.year.long
     */ Long: newAttribute("datum_proveden.month.in.year.long"),
    /**
     * Display Form Title: Number (M1) (Datum Proveden)
     * Display Form ID: datum_proveden.month.in.year.number
     */ Number: newAttribute("datum_proveden.month.in.year.number"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Datum Proveden)
     * Display Form ID: datum_proveden.month.in.year.m_q
     */ MQ: newAttribute("datum_proveden.month.in.year.m_q"),
};
/**
 * Attribute Title: Month of Quarter (Datum Proveden)
 * Attribute ID: datum_proveden.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumProvedenMonthOfQuarter: IAttribute = newAttribute("datum_proveden.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Datum Proveden)
 * Attribute ID: datum_proveden.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumProvedenDayOfYear: IAttribute = newAttribute("datum_proveden.day.in.year.default");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Datum Proveden)
 * Attribute ID: datum_proveden.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumProvedenDayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Datum Proveden)
     * Display Form ID: datum_proveden.day.in.week.short
     */
    Short: newAttribute("datum_proveden.day.in.week.short"),
    /**
     * Display Form Title: Long (Sunday) (Datum Proveden)
     * Display Form ID: datum_proveden.day.in.week.long
     */ Long: newAttribute("datum_proveden.day.in.week.long"),
    /**
     * Display Form Title: Number (1=Sunday) (Datum Proveden)
     * Display Form ID: datum_proveden.day.in.week.number
     */ Number: newAttribute("datum_proveden.day.in.week.number"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Datum Proveden)
 * Attribute ID: datum_proveden.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumProvedenDayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Datum Proveden)
     * Display Form ID: datum_proveden.day.in.euweek.short
     */
    Short: newAttribute("datum_proveden.day.in.euweek.short"),
    /**
     * Display Form Title: Long (Monday) (Datum Proveden)
     * Display Form ID: datum_proveden.day.in.euweek.long
     */ Long: newAttribute("datum_proveden.day.in.euweek.long"),
    /**
     * Display Form Title: Number (1=Monday) (Datum Proveden)
     * Display Form ID: datum_proveden.day.in.euweek.number
     */ Number: newAttribute("datum_proveden.day.in.euweek.number"),
};
/**
 * Attribute Title: Day of Quarter (Datum Proveden)
 * Attribute ID: datum_proveden.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumProvedenDayOfQuarter: IAttribute = newAttribute("datum_proveden.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Datum Proveden)
 * Attribute ID: datum_proveden.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumProvedenDayOfMonth: IAttribute = newAttribute("datum_proveden.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Datum Proveden)
 * Attribute ID: datum_proveden.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumProvedenQuarterYear: IAttribute = newAttribute("datum_proveden.quarter.short_us");
/**
 * Attribute Title: Month/Year (Datum Proveden)
 * Attribute ID: datum_proveden.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumProvedenMonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Datum Proveden)
     * Display Form ID: datum_proveden.month.short
     */
    Short: newAttribute("datum_proveden.month.short"),
    /**
     * Display Form Title: Long (January 2010) (Datum Proveden)
     * Display Form ID: datum_proveden.month.long
     */ Long: newAttribute("datum_proveden.month.long"),
    /**
     * Display Form Title: Number (1/2010) (Datum Proveden)
     * Display Form ID: datum_proveden.month.number
     */ Number: newAttribute("datum_proveden.month.number"),
};
/**
 * Attribute Title: Date (Datum Proveden)
 * Attribute ID: datum_proveden.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumProvedenDate = {
    /**
     * Display Form Title: mm/dd/yyyy (Datum Proveden)
     * Display Form ID: datum_proveden.date.day.us.mm_dd_yyyy
     */
    MmDdYyyy: newAttribute("datum_proveden.date.day.us.mm_dd_yyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Datum Proveden)
     * Display Form ID: datum_proveden.date.day.yyyy_mm_dd
     */ YyyyMmDd: newAttribute("datum_proveden.date.day.yyyy_mm_dd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Datum Proveden)
     * Display Form ID: datum_proveden.date.day.us.m_d_yy
     */ MDYy: newAttribute("datum_proveden.date.day.us.m_d_yy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Datum Proveden)
     * Display Form ID: datum_proveden.date.day.us.long
     */ Long: newAttribute("datum_proveden.date.day.us.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Datum Proveden)
     * Display Form ID: datum_proveden.date.day.uk.dd_mm_yyyy
     */ DdMmYyyy: newAttribute("datum_proveden.date.day.uk.dd_mm_yyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Datum Proveden)
     * Display Form ID: datum_proveden.date.day.eu.dd_mm_yyyy
     */ DdMmYyyy_1: newAttribute("datum_proveden.date.day.eu.dd_mm_yyyy"),
};
/**
 * Attribute Title: US Week Year (Datum Proveden)
 * Attribute ID: datum_proveden.year.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumProvedenUSWeekYear: IAttribute = newAttribute("datum_proveden.year.for.week.number");
/**
 * Attribute Title: EU Week Year (Datum Proveden)
 * Attribute ID: datum_proveden.year.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumProvedenEUWeekYear: IAttribute = newAttribute("datum_proveden.year.for.euweek.number");
/**
 * Attribute Title: US Week Quarter (Datum Proveden)
 * Attribute ID: datum_proveden.quarter.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumProvedenUSWeekQuarter: IAttribute = newAttribute("datum_proveden.quarter.for.week.number");
/**
 * Attribute Title: EU Week Quarter (Datum Proveden)
 * Attribute ID: datum_proveden.quarter.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumProvedenEUWeekQuarter: IAttribute = newAttribute(
    "datum_proveden.quarter.for.euweek.number",
);
/**
 * Attribute Title: Year (Datum Za Tov N)
 * Attribute ID: datum_za_tov_n.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumZaTovNYear: IAttribute = newAttribute("datum_za_tov_n.year.default");
/**
 * Attribute Title: Quarter (Datum Za Tov N)
 * Attribute ID: datum_za_tov_n.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumZaTovNQuarter: IAttribute = newAttribute("datum_za_tov_n.quarter.in.year.default");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Datum Za Tov N)
 * Attribute ID: datum_za_tov_n.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumZaTovNWeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.week.wk_year
     */
    WeekNrYear: newAttribute("datum_za_tov_n.week.wk_year"),
    /**
     * Display Form Title: Week Starting (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.week.starting
     */ WeekStarting: newAttribute("datum_za_tov_n.week.starting"),
    /**
     * Display Form Title: From - To (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.week.from_to
     */ FromTo: newAttribute("datum_za_tov_n.week.from_to"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.week.wk_year_cont
     */ WeekNrYear_1: newAttribute("datum_za_tov_n.week.wk_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.week.wk_qtr_year_cont
     */ WkQtrYear: newAttribute("datum_za_tov_n.week.wk_qtr_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.week.wk_qtr_year
     */ WkQtrYear_1: newAttribute("datum_za_tov_n.week.wk_qtr_year"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Datum Za Tov N)
 * Attribute ID: datum_za_tov_n.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumZaTovNWeekSunSat: IAttribute = newAttribute("datum_za_tov_n.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Datum Za Tov N)
 * Attribute ID: datum_za_tov_n.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumZaTovNWeekSunSatOfQtr: IAttribute = newAttribute(
    "datum_za_tov_n.week.in.quarter.number_us",
);
/**
 * Attribute Title: Week (Mon-Sun)/Year (Datum Za Tov N)
 * Attribute ID: datum_za_tov_n.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumZaTovNWeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.euweek.wk_year
     */
    WeekNrYear: newAttribute("datum_za_tov_n.euweek.wk_year"),
    /**
     * Display Form Title: Week Starting (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.euweek.starting
     */ WeekStarting: newAttribute("datum_za_tov_n.euweek.starting"),
    /**
     * Display Form Title: From - To (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.euweek.from_to
     */ FromTo: newAttribute("datum_za_tov_n.euweek.from_to"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Datum Za Tov N)
 * Attribute ID: datum_za_tov_n.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumZaTovNWeekMonSun: IAttribute = newAttribute("datum_za_tov_n.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Datum Za Tov N)
 * Attribute ID: datum_za_tov_n.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumZaTovNWeekMonSunOfQtr: IAttribute = newAttribute(
    "datum_za_tov_n.euweek.in.quarter.number_eu",
);
/**
 * Attribute Title: Month (Datum Za Tov N)
 * Attribute ID: datum_za_tov_n.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumZaTovNMonth = {
    /**
     * Display Form Title: Short (Jan) (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.month.in.year.short
     */
    Short: newAttribute("datum_za_tov_n.month.in.year.short"),
    /**
     * Display Form Title: Long (January) (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.month.in.year.long
     */ Long: newAttribute("datum_za_tov_n.month.in.year.long"),
    /**
     * Display Form Title: Number (M1) (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.month.in.year.number
     */ Number: newAttribute("datum_za_tov_n.month.in.year.number"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.month.in.year.m_q
     */ MQ: newAttribute("datum_za_tov_n.month.in.year.m_q"),
};
/**
 * Attribute Title: Month of Quarter (Datum Za Tov N)
 * Attribute ID: datum_za_tov_n.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumZaTovNMonthOfQuarter: IAttribute = newAttribute("datum_za_tov_n.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Datum Za Tov N)
 * Attribute ID: datum_za_tov_n.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumZaTovNDayOfYear: IAttribute = newAttribute("datum_za_tov_n.day.in.year.default");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Datum Za Tov N)
 * Attribute ID: datum_za_tov_n.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumZaTovNDayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.day.in.week.short
     */
    Short: newAttribute("datum_za_tov_n.day.in.week.short"),
    /**
     * Display Form Title: Long (Sunday) (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.day.in.week.long
     */ Long: newAttribute("datum_za_tov_n.day.in.week.long"),
    /**
     * Display Form Title: Number (1=Sunday) (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.day.in.week.number
     */ Number: newAttribute("datum_za_tov_n.day.in.week.number"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Datum Za Tov N)
 * Attribute ID: datum_za_tov_n.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumZaTovNDayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.day.in.euweek.short
     */
    Short: newAttribute("datum_za_tov_n.day.in.euweek.short"),
    /**
     * Display Form Title: Long (Monday) (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.day.in.euweek.long
     */ Long: newAttribute("datum_za_tov_n.day.in.euweek.long"),
    /**
     * Display Form Title: Number (1=Monday) (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.day.in.euweek.number
     */ Number: newAttribute("datum_za_tov_n.day.in.euweek.number"),
};
/**
 * Attribute Title: Day of Quarter (Datum Za Tov N)
 * Attribute ID: datum_za_tov_n.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumZaTovNDayOfQuarter: IAttribute = newAttribute("datum_za_tov_n.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Datum Za Tov N)
 * Attribute ID: datum_za_tov_n.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumZaTovNDayOfMonth: IAttribute = newAttribute("datum_za_tov_n.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Datum Za Tov N)
 * Attribute ID: datum_za_tov_n.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumZaTovNQuarterYear: IAttribute = newAttribute("datum_za_tov_n.quarter.short_us");
/**
 * Attribute Title: Month/Year (Datum Za Tov N)
 * Attribute ID: datum_za_tov_n.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumZaTovNMonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.month.short
     */
    Short: newAttribute("datum_za_tov_n.month.short"),
    /**
     * Display Form Title: Long (January 2010) (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.month.long
     */ Long: newAttribute("datum_za_tov_n.month.long"),
    /**
     * Display Form Title: Number (1/2010) (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.month.number
     */ Number: newAttribute("datum_za_tov_n.month.number"),
};
/**
 * Attribute Title: Date (Datum Za Tov N)
 * Attribute ID: datum_za_tov_n.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumZaTovNDate = {
    /**
     * Display Form Title: mm/dd/yyyy (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.date.day.us.mm_dd_yyyy
     */
    MmDdYyyy: newAttribute("datum_za_tov_n.date.day.us.mm_dd_yyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.date.day.yyyy_mm_dd
     */ YyyyMmDd: newAttribute("datum_za_tov_n.date.day.yyyy_mm_dd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.date.day.us.m_d_yy
     */ MDYy: newAttribute("datum_za_tov_n.date.day.us.m_d_yy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.date.day.us.long
     */ Long: newAttribute("datum_za_tov_n.date.day.us.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.date.day.uk.dd_mm_yyyy
     */ DdMmYyyy: newAttribute("datum_za_tov_n.date.day.uk.dd_mm_yyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Datum Za Tov N)
     * Display Form ID: datum_za_tov_n.date.day.eu.dd_mm_yyyy
     */ DdMmYyyy_1: newAttribute("datum_za_tov_n.date.day.eu.dd_mm_yyyy"),
};
/**
 * Attribute Title: US Week Year (Datum Za Tov N)
 * Attribute ID: datum_za_tov_n.year.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumZaTovNUSWeekYear: IAttribute = newAttribute("datum_za_tov_n.year.for.week.number");
/**
 * Attribute Title: EU Week Year (Datum Za Tov N)
 * Attribute ID: datum_za_tov_n.year.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumZaTovNEUWeekYear: IAttribute = newAttribute("datum_za_tov_n.year.for.euweek.number");
/**
 * Attribute Title: US Week Quarter (Datum Za Tov N)
 * Attribute ID: datum_za_tov_n.quarter.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumZaTovNUSWeekQuarter: IAttribute = newAttribute("datum_za_tov_n.quarter.for.week.number");
/**
 * Attribute Title: EU Week Quarter (Datum Za Tov N)
 * Attribute ID: datum_za_tov_n.quarter.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DatumZaTovNEUWeekQuarter: IAttribute = newAttribute("datum_za_tov_n.quarter.for.euweek.number");
/**
 * Attribute Title: Year (Paydate1)
 * Attribute ID: paydate1.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate1Year: IAttribute = newAttribute("paydate1.year.default");
/**
 * Attribute Title: Quarter (Paydate1)
 * Attribute ID: paydate1.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate1Quarter: IAttribute = newAttribute("paydate1.quarter.in.year.default");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Paydate1)
 * Attribute ID: paydate1.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate1WeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Paydate1)
     * Display Form ID: paydate1.week.wk_year
     */
    WeekNrYear: newAttribute("paydate1.week.wk_year"),
    /**
     * Display Form Title: Week Starting (Paydate1)
     * Display Form ID: paydate1.week.starting
     */ WeekStarting: newAttribute("paydate1.week.starting"),
    /**
     * Display Form Title: From - To (Paydate1)
     * Display Form ID: paydate1.week.from_to
     */ FromTo: newAttribute("paydate1.week.from_to"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Paydate1)
     * Display Form ID: paydate1.week.wk_year_cont
     */ WeekNrYear_1: newAttribute("paydate1.week.wk_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Paydate1)
     * Display Form ID: paydate1.week.wk_qtr_year_cont
     */ WkQtrYear: newAttribute("paydate1.week.wk_qtr_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Paydate1)
     * Display Form ID: paydate1.week.wk_qtr_year
     */ WkQtrYear_1: newAttribute("paydate1.week.wk_qtr_year"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Paydate1)
 * Attribute ID: paydate1.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate1WeekSunSat: IAttribute = newAttribute("paydate1.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Paydate1)
 * Attribute ID: paydate1.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate1WeekSunSatOfQtr: IAttribute = newAttribute("paydate1.week.in.quarter.number_us");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Paydate1)
 * Attribute ID: paydate1.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate1WeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Paydate1)
     * Display Form ID: paydate1.euweek.wk_year
     */
    WeekNrYear: newAttribute("paydate1.euweek.wk_year"),
    /**
     * Display Form Title: Week Starting (Paydate1)
     * Display Form ID: paydate1.euweek.starting
     */ WeekStarting: newAttribute("paydate1.euweek.starting"),
    /**
     * Display Form Title: From - To (Paydate1)
     * Display Form ID: paydate1.euweek.from_to
     */ FromTo: newAttribute("paydate1.euweek.from_to"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Paydate1)
 * Attribute ID: paydate1.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate1WeekMonSun: IAttribute = newAttribute("paydate1.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Paydate1)
 * Attribute ID: paydate1.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate1WeekMonSunOfQtr: IAttribute = newAttribute("paydate1.euweek.in.quarter.number_eu");
/**
 * Attribute Title: Month (Paydate1)
 * Attribute ID: paydate1.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate1Month = {
    /**
     * Display Form Title: Short (Jan) (Paydate1)
     * Display Form ID: paydate1.month.in.year.short
     */
    Short: newAttribute("paydate1.month.in.year.short"),
    /**
     * Display Form Title: Long (January) (Paydate1)
     * Display Form ID: paydate1.month.in.year.long
     */ Long: newAttribute("paydate1.month.in.year.long"),
    /**
     * Display Form Title: Number (M1) (Paydate1)
     * Display Form ID: paydate1.month.in.year.number
     */ Number: newAttribute("paydate1.month.in.year.number"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Paydate1)
     * Display Form ID: paydate1.month.in.year.m_q
     */ MQ: newAttribute("paydate1.month.in.year.m_q"),
};
/**
 * Attribute Title: Month of Quarter (Paydate1)
 * Attribute ID: paydate1.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate1MonthOfQuarter: IAttribute = newAttribute("paydate1.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Paydate1)
 * Attribute ID: paydate1.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate1DayOfYear: IAttribute = newAttribute("paydate1.day.in.year.default");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Paydate1)
 * Attribute ID: paydate1.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate1DayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Paydate1)
     * Display Form ID: paydate1.day.in.week.short
     */
    Short: newAttribute("paydate1.day.in.week.short"),
    /**
     * Display Form Title: Long (Sunday) (Paydate1)
     * Display Form ID: paydate1.day.in.week.long
     */ Long: newAttribute("paydate1.day.in.week.long"),
    /**
     * Display Form Title: Number (1=Sunday) (Paydate1)
     * Display Form ID: paydate1.day.in.week.number
     */ Number: newAttribute("paydate1.day.in.week.number"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Paydate1)
 * Attribute ID: paydate1.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate1DayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Paydate1)
     * Display Form ID: paydate1.day.in.euweek.short
     */
    Short: newAttribute("paydate1.day.in.euweek.short"),
    /**
     * Display Form Title: Long (Monday) (Paydate1)
     * Display Form ID: paydate1.day.in.euweek.long
     */ Long: newAttribute("paydate1.day.in.euweek.long"),
    /**
     * Display Form Title: Number (1=Monday) (Paydate1)
     * Display Form ID: paydate1.day.in.euweek.number
     */ Number: newAttribute("paydate1.day.in.euweek.number"),
};
/**
 * Attribute Title: Day of Quarter (Paydate1)
 * Attribute ID: paydate1.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate1DayOfQuarter: IAttribute = newAttribute("paydate1.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Paydate1)
 * Attribute ID: paydate1.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate1DayOfMonth: IAttribute = newAttribute("paydate1.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Paydate1)
 * Attribute ID: paydate1.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate1QuarterYear: IAttribute = newAttribute("paydate1.quarter.short_us");
/**
 * Attribute Title: Month/Year (Paydate1)
 * Attribute ID: paydate1.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate1MonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Paydate1)
     * Display Form ID: paydate1.month.short
     */
    Short: newAttribute("paydate1.month.short"),
    /**
     * Display Form Title: Long (January 2010) (Paydate1)
     * Display Form ID: paydate1.month.long
     */ Long: newAttribute("paydate1.month.long"),
    /**
     * Display Form Title: Number (1/2010) (Paydate1)
     * Display Form ID: paydate1.month.number
     */ Number: newAttribute("paydate1.month.number"),
};
/**
 * Attribute Title: Date (Paydate1)
 * Attribute ID: paydate1.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate1Date = {
    /**
     * Display Form Title: mm/dd/yyyy (Paydate1)
     * Display Form ID: paydate1.date.day.us.mm_dd_yyyy
     */
    MmDdYyyy: newAttribute("paydate1.date.day.us.mm_dd_yyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Paydate1)
     * Display Form ID: paydate1.date.day.yyyy_mm_dd
     */ YyyyMmDd: newAttribute("paydate1.date.day.yyyy_mm_dd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Paydate1)
     * Display Form ID: paydate1.date.day.us.m_d_yy
     */ MDYy: newAttribute("paydate1.date.day.us.m_d_yy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Paydate1)
     * Display Form ID: paydate1.date.day.us.long
     */ Long: newAttribute("paydate1.date.day.us.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Paydate1)
     * Display Form ID: paydate1.date.day.uk.dd_mm_yyyy
     */ DdMmYyyy: newAttribute("paydate1.date.day.uk.dd_mm_yyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Paydate1)
     * Display Form ID: paydate1.date.day.eu.dd_mm_yyyy
     */ DdMmYyyy_1: newAttribute("paydate1.date.day.eu.dd_mm_yyyy"),
};
/**
 * Attribute Title: US Week Year (Paydate1)
 * Attribute ID: paydate1.year.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate1USWeekYear: IAttribute = newAttribute("paydate1.year.for.week.number");
/**
 * Attribute Title: EU Week Year (Paydate1)
 * Attribute ID: paydate1.year.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate1EUWeekYear: IAttribute = newAttribute("paydate1.year.for.euweek.number");
/**
 * Attribute Title: US Week Quarter (Paydate1)
 * Attribute ID: paydate1.quarter.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate1USWeekQuarter: IAttribute = newAttribute("paydate1.quarter.for.week.number");
/**
 * Attribute Title: EU Week Quarter (Paydate1)
 * Attribute ID: paydate1.quarter.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate1EUWeekQuarter: IAttribute = newAttribute("paydate1.quarter.for.euweek.number");
/**
 * Attribute Title: Year (Paydate2)
 * Attribute ID: paydate2.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate2Year: IAttribute = newAttribute("paydate2.year.default");
/**
 * Attribute Title: Quarter (Paydate2)
 * Attribute ID: paydate2.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate2Quarter: IAttribute = newAttribute("paydate2.quarter.in.year.default");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Paydate2)
 * Attribute ID: paydate2.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate2WeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Paydate2)
     * Display Form ID: paydate2.week.wk_year
     */
    WeekNrYear: newAttribute("paydate2.week.wk_year"),
    /**
     * Display Form Title: Week Starting (Paydate2)
     * Display Form ID: paydate2.week.starting
     */ WeekStarting: newAttribute("paydate2.week.starting"),
    /**
     * Display Form Title: From - To (Paydate2)
     * Display Form ID: paydate2.week.from_to
     */ FromTo: newAttribute("paydate2.week.from_to"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Paydate2)
     * Display Form ID: paydate2.week.wk_year_cont
     */ WeekNrYear_1: newAttribute("paydate2.week.wk_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Paydate2)
     * Display Form ID: paydate2.week.wk_qtr_year_cont
     */ WkQtrYear: newAttribute("paydate2.week.wk_qtr_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Paydate2)
     * Display Form ID: paydate2.week.wk_qtr_year
     */ WkQtrYear_1: newAttribute("paydate2.week.wk_qtr_year"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Paydate2)
 * Attribute ID: paydate2.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate2WeekSunSat: IAttribute = newAttribute("paydate2.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Paydate2)
 * Attribute ID: paydate2.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate2WeekSunSatOfQtr: IAttribute = newAttribute("paydate2.week.in.quarter.number_us");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Paydate2)
 * Attribute ID: paydate2.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate2WeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Paydate2)
     * Display Form ID: paydate2.euweek.wk_year
     */
    WeekNrYear: newAttribute("paydate2.euweek.wk_year"),
    /**
     * Display Form Title: Week Starting (Paydate2)
     * Display Form ID: paydate2.euweek.starting
     */ WeekStarting: newAttribute("paydate2.euweek.starting"),
    /**
     * Display Form Title: From - To (Paydate2)
     * Display Form ID: paydate2.euweek.from_to
     */ FromTo: newAttribute("paydate2.euweek.from_to"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Paydate2)
 * Attribute ID: paydate2.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate2WeekMonSun: IAttribute = newAttribute("paydate2.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Paydate2)
 * Attribute ID: paydate2.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate2WeekMonSunOfQtr: IAttribute = newAttribute("paydate2.euweek.in.quarter.number_eu");
/**
 * Attribute Title: Month (Paydate2)
 * Attribute ID: paydate2.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate2Month = {
    /**
     * Display Form Title: Short (Jan) (Paydate2)
     * Display Form ID: paydate2.month.in.year.short
     */
    Short: newAttribute("paydate2.month.in.year.short"),
    /**
     * Display Form Title: Long (January) (Paydate2)
     * Display Form ID: paydate2.month.in.year.long
     */ Long: newAttribute("paydate2.month.in.year.long"),
    /**
     * Display Form Title: Number (M1) (Paydate2)
     * Display Form ID: paydate2.month.in.year.number
     */ Number: newAttribute("paydate2.month.in.year.number"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Paydate2)
     * Display Form ID: paydate2.month.in.year.m_q
     */ MQ: newAttribute("paydate2.month.in.year.m_q"),
};
/**
 * Attribute Title: Month of Quarter (Paydate2)
 * Attribute ID: paydate2.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate2MonthOfQuarter: IAttribute = newAttribute("paydate2.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Paydate2)
 * Attribute ID: paydate2.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate2DayOfYear: IAttribute = newAttribute("paydate2.day.in.year.default");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Paydate2)
 * Attribute ID: paydate2.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate2DayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Paydate2)
     * Display Form ID: paydate2.day.in.week.short
     */
    Short: newAttribute("paydate2.day.in.week.short"),
    /**
     * Display Form Title: Long (Sunday) (Paydate2)
     * Display Form ID: paydate2.day.in.week.long
     */ Long: newAttribute("paydate2.day.in.week.long"),
    /**
     * Display Form Title: Number (1=Sunday) (Paydate2)
     * Display Form ID: paydate2.day.in.week.number
     */ Number: newAttribute("paydate2.day.in.week.number"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Paydate2)
 * Attribute ID: paydate2.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate2DayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Paydate2)
     * Display Form ID: paydate2.day.in.euweek.short
     */
    Short: newAttribute("paydate2.day.in.euweek.short"),
    /**
     * Display Form Title: Long (Monday) (Paydate2)
     * Display Form ID: paydate2.day.in.euweek.long
     */ Long: newAttribute("paydate2.day.in.euweek.long"),
    /**
     * Display Form Title: Number (1=Monday) (Paydate2)
     * Display Form ID: paydate2.day.in.euweek.number
     */ Number: newAttribute("paydate2.day.in.euweek.number"),
};
/**
 * Attribute Title: Day of Quarter (Paydate2)
 * Attribute ID: paydate2.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate2DayOfQuarter: IAttribute = newAttribute("paydate2.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Paydate2)
 * Attribute ID: paydate2.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate2DayOfMonth: IAttribute = newAttribute("paydate2.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Paydate2)
 * Attribute ID: paydate2.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate2QuarterYear: IAttribute = newAttribute("paydate2.quarter.short_us");
/**
 * Attribute Title: Month/Year (Paydate2)
 * Attribute ID: paydate2.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate2MonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Paydate2)
     * Display Form ID: paydate2.month.short
     */
    Short: newAttribute("paydate2.month.short"),
    /**
     * Display Form Title: Long (January 2010) (Paydate2)
     * Display Form ID: paydate2.month.long
     */ Long: newAttribute("paydate2.month.long"),
    /**
     * Display Form Title: Number (1/2010) (Paydate2)
     * Display Form ID: paydate2.month.number
     */ Number: newAttribute("paydate2.month.number"),
};
/**
 * Attribute Title: Date (Paydate2)
 * Attribute ID: paydate2.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate2Date = {
    /**
     * Display Form Title: mm/dd/yyyy (Paydate2)
     * Display Form ID: paydate2.date.day.us.mm_dd_yyyy
     */
    MmDdYyyy: newAttribute("paydate2.date.day.us.mm_dd_yyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Paydate2)
     * Display Form ID: paydate2.date.day.yyyy_mm_dd
     */ YyyyMmDd: newAttribute("paydate2.date.day.yyyy_mm_dd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Paydate2)
     * Display Form ID: paydate2.date.day.us.m_d_yy
     */ MDYy: newAttribute("paydate2.date.day.us.m_d_yy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Paydate2)
     * Display Form ID: paydate2.date.day.us.long
     */ Long: newAttribute("paydate2.date.day.us.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Paydate2)
     * Display Form ID: paydate2.date.day.uk.dd_mm_yyyy
     */ DdMmYyyy: newAttribute("paydate2.date.day.uk.dd_mm_yyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Paydate2)
     * Display Form ID: paydate2.date.day.eu.dd_mm_yyyy
     */ DdMmYyyy_1: newAttribute("paydate2.date.day.eu.dd_mm_yyyy"),
};
/**
 * Attribute Title: US Week Year (Paydate2)
 * Attribute ID: paydate2.year.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate2USWeekYear: IAttribute = newAttribute("paydate2.year.for.week.number");
/**
 * Attribute Title: EU Week Year (Paydate2)
 * Attribute ID: paydate2.year.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate2EUWeekYear: IAttribute = newAttribute("paydate2.year.for.euweek.number");
/**
 * Attribute Title: US Week Quarter (Paydate2)
 * Attribute ID: paydate2.quarter.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate2USWeekQuarter: IAttribute = newAttribute("paydate2.quarter.for.week.number");
/**
 * Attribute Title: EU Week Quarter (Paydate2)
 * Attribute ID: paydate2.quarter.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate2EUWeekQuarter: IAttribute = newAttribute("paydate2.quarter.for.euweek.number");
/**
 * Attribute Title: Year (Paydate3)
 * Attribute ID: paydate3.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate3Year: IAttribute = newAttribute("paydate3.year.default");
/**
 * Attribute Title: Quarter (Paydate3)
 * Attribute ID: paydate3.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate3Quarter: IAttribute = newAttribute("paydate3.quarter.in.year.default");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Paydate3)
 * Attribute ID: paydate3.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate3WeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Paydate3)
     * Display Form ID: paydate3.week.wk_year
     */
    WeekNrYear: newAttribute("paydate3.week.wk_year"),
    /**
     * Display Form Title: Week Starting (Paydate3)
     * Display Form ID: paydate3.week.starting
     */ WeekStarting: newAttribute("paydate3.week.starting"),
    /**
     * Display Form Title: From - To (Paydate3)
     * Display Form ID: paydate3.week.from_to
     */ FromTo: newAttribute("paydate3.week.from_to"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Paydate3)
     * Display Form ID: paydate3.week.wk_year_cont
     */ WeekNrYear_1: newAttribute("paydate3.week.wk_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Paydate3)
     * Display Form ID: paydate3.week.wk_qtr_year_cont
     */ WkQtrYear: newAttribute("paydate3.week.wk_qtr_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Paydate3)
     * Display Form ID: paydate3.week.wk_qtr_year
     */ WkQtrYear_1: newAttribute("paydate3.week.wk_qtr_year"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Paydate3)
 * Attribute ID: paydate3.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate3WeekSunSat: IAttribute = newAttribute("paydate3.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Paydate3)
 * Attribute ID: paydate3.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate3WeekSunSatOfQtr: IAttribute = newAttribute("paydate3.week.in.quarter.number_us");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Paydate3)
 * Attribute ID: paydate3.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate3WeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Paydate3)
     * Display Form ID: paydate3.euweek.wk_year
     */
    WeekNrYear: newAttribute("paydate3.euweek.wk_year"),
    /**
     * Display Form Title: Week Starting (Paydate3)
     * Display Form ID: paydate3.euweek.starting
     */ WeekStarting: newAttribute("paydate3.euweek.starting"),
    /**
     * Display Form Title: From - To (Paydate3)
     * Display Form ID: paydate3.euweek.from_to
     */ FromTo: newAttribute("paydate3.euweek.from_to"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Paydate3)
 * Attribute ID: paydate3.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate3WeekMonSun: IAttribute = newAttribute("paydate3.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Paydate3)
 * Attribute ID: paydate3.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate3WeekMonSunOfQtr: IAttribute = newAttribute("paydate3.euweek.in.quarter.number_eu");
/**
 * Attribute Title: Month (Paydate3)
 * Attribute ID: paydate3.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate3Month = {
    /**
     * Display Form Title: Short (Jan) (Paydate3)
     * Display Form ID: paydate3.month.in.year.short
     */
    Short: newAttribute("paydate3.month.in.year.short"),
    /**
     * Display Form Title: Long (January) (Paydate3)
     * Display Form ID: paydate3.month.in.year.long
     */ Long: newAttribute("paydate3.month.in.year.long"),
    /**
     * Display Form Title: Number (M1) (Paydate3)
     * Display Form ID: paydate3.month.in.year.number
     */ Number: newAttribute("paydate3.month.in.year.number"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Paydate3)
     * Display Form ID: paydate3.month.in.year.m_q
     */ MQ: newAttribute("paydate3.month.in.year.m_q"),
};
/**
 * Attribute Title: Month of Quarter (Paydate3)
 * Attribute ID: paydate3.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate3MonthOfQuarter: IAttribute = newAttribute("paydate3.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Paydate3)
 * Attribute ID: paydate3.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate3DayOfYear: IAttribute = newAttribute("paydate3.day.in.year.default");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Paydate3)
 * Attribute ID: paydate3.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate3DayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Paydate3)
     * Display Form ID: paydate3.day.in.week.short
     */
    Short: newAttribute("paydate3.day.in.week.short"),
    /**
     * Display Form Title: Long (Sunday) (Paydate3)
     * Display Form ID: paydate3.day.in.week.long
     */ Long: newAttribute("paydate3.day.in.week.long"),
    /**
     * Display Form Title: Number (1=Sunday) (Paydate3)
     * Display Form ID: paydate3.day.in.week.number
     */ Number: newAttribute("paydate3.day.in.week.number"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Paydate3)
 * Attribute ID: paydate3.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate3DayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Paydate3)
     * Display Form ID: paydate3.day.in.euweek.short
     */
    Short: newAttribute("paydate3.day.in.euweek.short"),
    /**
     * Display Form Title: Long (Monday) (Paydate3)
     * Display Form ID: paydate3.day.in.euweek.long
     */ Long: newAttribute("paydate3.day.in.euweek.long"),
    /**
     * Display Form Title: Number (1=Monday) (Paydate3)
     * Display Form ID: paydate3.day.in.euweek.number
     */ Number: newAttribute("paydate3.day.in.euweek.number"),
};
/**
 * Attribute Title: Day of Quarter (Paydate3)
 * Attribute ID: paydate3.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate3DayOfQuarter: IAttribute = newAttribute("paydate3.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Paydate3)
 * Attribute ID: paydate3.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate3DayOfMonth: IAttribute = newAttribute("paydate3.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Paydate3)
 * Attribute ID: paydate3.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate3QuarterYear: IAttribute = newAttribute("paydate3.quarter.short_us");
/**
 * Attribute Title: Month/Year (Paydate3)
 * Attribute ID: paydate3.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate3MonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Paydate3)
     * Display Form ID: paydate3.month.short
     */
    Short: newAttribute("paydate3.month.short"),
    /**
     * Display Form Title: Long (January 2010) (Paydate3)
     * Display Form ID: paydate3.month.long
     */ Long: newAttribute("paydate3.month.long"),
    /**
     * Display Form Title: Number (1/2010) (Paydate3)
     * Display Form ID: paydate3.month.number
     */ Number: newAttribute("paydate3.month.number"),
};
/**
 * Attribute Title: Date (Paydate3)
 * Attribute ID: paydate3.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate3Date = {
    /**
     * Display Form Title: mm/dd/yyyy (Paydate3)
     * Display Form ID: paydate3.date.day.us.mm_dd_yyyy
     */
    MmDdYyyy: newAttribute("paydate3.date.day.us.mm_dd_yyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Paydate3)
     * Display Form ID: paydate3.date.day.yyyy_mm_dd
     */ YyyyMmDd: newAttribute("paydate3.date.day.yyyy_mm_dd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Paydate3)
     * Display Form ID: paydate3.date.day.us.m_d_yy
     */ MDYy: newAttribute("paydate3.date.day.us.m_d_yy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Paydate3)
     * Display Form ID: paydate3.date.day.us.long
     */ Long: newAttribute("paydate3.date.day.us.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Paydate3)
     * Display Form ID: paydate3.date.day.uk.dd_mm_yyyy
     */ DdMmYyyy: newAttribute("paydate3.date.day.uk.dd_mm_yyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Paydate3)
     * Display Form ID: paydate3.date.day.eu.dd_mm_yyyy
     */ DdMmYyyy_1: newAttribute("paydate3.date.day.eu.dd_mm_yyyy"),
};
/**
 * Attribute Title: US Week Year (Paydate3)
 * Attribute ID: paydate3.year.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate3USWeekYear: IAttribute = newAttribute("paydate3.year.for.week.number");
/**
 * Attribute Title: EU Week Year (Paydate3)
 * Attribute ID: paydate3.year.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate3EUWeekYear: IAttribute = newAttribute("paydate3.year.for.euweek.number");
/**
 * Attribute Title: US Week Quarter (Paydate3)
 * Attribute ID: paydate3.quarter.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate3USWeekQuarter: IAttribute = newAttribute("paydate3.quarter.for.week.number");
/**
 * Attribute Title: EU Week Quarter (Paydate3)
 * Attribute ID: paydate3.quarter.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Paydate3EUWeekQuarter: IAttribute = newAttribute("paydate3.quarter.for.euweek.number");
/**
 * Attribute Title: Year (Datelan2)
 * Attribute ID: datelan2.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Datelan2Year: IAttribute = newAttribute("datelan2.year.default");
/**
 * Attribute Title: Quarter (Datelan2)
 * Attribute ID: datelan2.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Datelan2Quarter: IAttribute = newAttribute("datelan2.quarter.in.year.default");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Datelan2)
 * Attribute ID: datelan2.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Datelan2WeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Datelan2)
     * Display Form ID: datelan2.week.wk_year
     */
    WeekNrYear: newAttribute("datelan2.week.wk_year"),
    /**
     * Display Form Title: Week Starting (Datelan2)
     * Display Form ID: datelan2.week.starting
     */ WeekStarting: newAttribute("datelan2.week.starting"),
    /**
     * Display Form Title: From - To (Datelan2)
     * Display Form ID: datelan2.week.from_to
     */ FromTo: newAttribute("datelan2.week.from_to"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Datelan2)
     * Display Form ID: datelan2.week.wk_year_cont
     */ WeekNrYear_1: newAttribute("datelan2.week.wk_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Datelan2)
     * Display Form ID: datelan2.week.wk_qtr_year_cont
     */ WkQtrYear: newAttribute("datelan2.week.wk_qtr_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Datelan2)
     * Display Form ID: datelan2.week.wk_qtr_year
     */ WkQtrYear_1: newAttribute("datelan2.week.wk_qtr_year"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Datelan2)
 * Attribute ID: datelan2.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Datelan2WeekSunSat: IAttribute = newAttribute("datelan2.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Datelan2)
 * Attribute ID: datelan2.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Datelan2WeekSunSatOfQtr: IAttribute = newAttribute("datelan2.week.in.quarter.number_us");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Datelan2)
 * Attribute ID: datelan2.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Datelan2WeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Datelan2)
     * Display Form ID: datelan2.euweek.wk_year
     */
    WeekNrYear: newAttribute("datelan2.euweek.wk_year"),
    /**
     * Display Form Title: Week Starting (Datelan2)
     * Display Form ID: datelan2.euweek.starting
     */ WeekStarting: newAttribute("datelan2.euweek.starting"),
    /**
     * Display Form Title: From - To (Datelan2)
     * Display Form ID: datelan2.euweek.from_to
     */ FromTo: newAttribute("datelan2.euweek.from_to"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Datelan2)
 * Attribute ID: datelan2.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Datelan2WeekMonSun: IAttribute = newAttribute("datelan2.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Datelan2)
 * Attribute ID: datelan2.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Datelan2WeekMonSunOfQtr: IAttribute = newAttribute("datelan2.euweek.in.quarter.number_eu");
/**
 * Attribute Title: Month (Datelan2)
 * Attribute ID: datelan2.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Datelan2Month = {
    /**
     * Display Form Title: Short (Jan) (Datelan2)
     * Display Form ID: datelan2.month.in.year.short
     */
    Short: newAttribute("datelan2.month.in.year.short"),
    /**
     * Display Form Title: Long (January) (Datelan2)
     * Display Form ID: datelan2.month.in.year.long
     */ Long: newAttribute("datelan2.month.in.year.long"),
    /**
     * Display Form Title: Number (M1) (Datelan2)
     * Display Form ID: datelan2.month.in.year.number
     */ Number: newAttribute("datelan2.month.in.year.number"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Datelan2)
     * Display Form ID: datelan2.month.in.year.m_q
     */ MQ: newAttribute("datelan2.month.in.year.m_q"),
};
/**
 * Attribute Title: Month of Quarter (Datelan2)
 * Attribute ID: datelan2.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Datelan2MonthOfQuarter: IAttribute = newAttribute("datelan2.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Datelan2)
 * Attribute ID: datelan2.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Datelan2DayOfYear: IAttribute = newAttribute("datelan2.day.in.year.default");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Datelan2)
 * Attribute ID: datelan2.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Datelan2DayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Datelan2)
     * Display Form ID: datelan2.day.in.week.short
     */
    Short: newAttribute("datelan2.day.in.week.short"),
    /**
     * Display Form Title: Long (Sunday) (Datelan2)
     * Display Form ID: datelan2.day.in.week.long
     */ Long: newAttribute("datelan2.day.in.week.long"),
    /**
     * Display Form Title: Number (1=Sunday) (Datelan2)
     * Display Form ID: datelan2.day.in.week.number
     */ Number: newAttribute("datelan2.day.in.week.number"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Datelan2)
 * Attribute ID: datelan2.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Datelan2DayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Datelan2)
     * Display Form ID: datelan2.day.in.euweek.short
     */
    Short: newAttribute("datelan2.day.in.euweek.short"),
    /**
     * Display Form Title: Long (Monday) (Datelan2)
     * Display Form ID: datelan2.day.in.euweek.long
     */ Long: newAttribute("datelan2.day.in.euweek.long"),
    /**
     * Display Form Title: Number (1=Monday) (Datelan2)
     * Display Form ID: datelan2.day.in.euweek.number
     */ Number: newAttribute("datelan2.day.in.euweek.number"),
};
/**
 * Attribute Title: Day of Quarter (Datelan2)
 * Attribute ID: datelan2.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Datelan2DayOfQuarter: IAttribute = newAttribute("datelan2.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Datelan2)
 * Attribute ID: datelan2.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Datelan2DayOfMonth: IAttribute = newAttribute("datelan2.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Datelan2)
 * Attribute ID: datelan2.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Datelan2QuarterYear: IAttribute = newAttribute("datelan2.quarter.short_us");
/**
 * Attribute Title: Month/Year (Datelan2)
 * Attribute ID: datelan2.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Datelan2MonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Datelan2)
     * Display Form ID: datelan2.month.short
     */
    Short: newAttribute("datelan2.month.short"),
    /**
     * Display Form Title: Long (January 2010) (Datelan2)
     * Display Form ID: datelan2.month.long
     */ Long: newAttribute("datelan2.month.long"),
    /**
     * Display Form Title: Number (1/2010) (Datelan2)
     * Display Form ID: datelan2.month.number
     */ Number: newAttribute("datelan2.month.number"),
};
/**
 * Attribute Title: Date (Datelan2)
 * Attribute ID: datelan2.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Datelan2Date = {
    /**
     * Display Form Title: mm/dd/yyyy (Datelan2)
     * Display Form ID: datelan2.date.day.us.mm_dd_yyyy
     */
    MmDdYyyy: newAttribute("datelan2.date.day.us.mm_dd_yyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Datelan2)
     * Display Form ID: datelan2.date.day.yyyy_mm_dd
     */ YyyyMmDd: newAttribute("datelan2.date.day.yyyy_mm_dd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Datelan2)
     * Display Form ID: datelan2.date.day.us.m_d_yy
     */ MDYy: newAttribute("datelan2.date.day.us.m_d_yy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Datelan2)
     * Display Form ID: datelan2.date.day.us.long
     */ Long: newAttribute("datelan2.date.day.us.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Datelan2)
     * Display Form ID: datelan2.date.day.uk.dd_mm_yyyy
     */ DdMmYyyy: newAttribute("datelan2.date.day.uk.dd_mm_yyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Datelan2)
     * Display Form ID: datelan2.date.day.eu.dd_mm_yyyy
     */ DdMmYyyy_1: newAttribute("datelan2.date.day.eu.dd_mm_yyyy"),
};
/**
 * Attribute Title: US Week Year (Datelan2)
 * Attribute ID: datelan2.year.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Datelan2USWeekYear: IAttribute = newAttribute("datelan2.year.for.week.number");
/**
 * Attribute Title: EU Week Year (Datelan2)
 * Attribute ID: datelan2.year.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Datelan2EUWeekYear: IAttribute = newAttribute("datelan2.year.for.euweek.number");
/**
 * Attribute Title: US Week Quarter (Datelan2)
 * Attribute ID: datelan2.quarter.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Datelan2USWeekQuarter: IAttribute = newAttribute("datelan2.quarter.for.week.number");
/**
 * Attribute Title: EU Week Quarter (Datelan2)
 * Attribute ID: datelan2.quarter.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Datelan2EUWeekQuarter: IAttribute = newAttribute("datelan2.quarter.for.euweek.number");
/**
 * Attribute Title: Year (Date1gen)
 * Attribute ID: date1gen.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1genYear: IAttribute = newAttribute("date1gen.year.default");
/**
 * Attribute Title: Quarter (Date1gen)
 * Attribute ID: date1gen.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1genQuarter: IAttribute = newAttribute("date1gen.quarter.in.year.default");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Date1gen)
 * Attribute ID: date1gen.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1genWeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date1gen)
     * Display Form ID: date1gen.week.wk_year
     */
    WeekNrYear: newAttribute("date1gen.week.wk_year"),
    /**
     * Display Form Title: Week Starting (Date1gen)
     * Display Form ID: date1gen.week.starting
     */ WeekStarting: newAttribute("date1gen.week.starting"),
    /**
     * Display Form Title: From - To (Date1gen)
     * Display Form ID: date1gen.week.from_to
     */ FromTo: newAttribute("date1gen.week.from_to"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Date1gen)
     * Display Form ID: date1gen.week.wk_year_cont
     */ WeekNrYear_1: newAttribute("date1gen.week.wk_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Date1gen)
     * Display Form ID: date1gen.week.wk_qtr_year_cont
     */ WkQtrYear: newAttribute("date1gen.week.wk_qtr_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Date1gen)
     * Display Form ID: date1gen.week.wk_qtr_year
     */ WkQtrYear_1: newAttribute("date1gen.week.wk_qtr_year"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Date1gen)
 * Attribute ID: date1gen.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1genWeekSunSat: IAttribute = newAttribute("date1gen.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Date1gen)
 * Attribute ID: date1gen.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1genWeekSunSatOfQtr: IAttribute = newAttribute("date1gen.week.in.quarter.number_us");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Date1gen)
 * Attribute ID: date1gen.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1genWeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date1gen)
     * Display Form ID: date1gen.euweek.wk_year
     */
    WeekNrYear: newAttribute("date1gen.euweek.wk_year"),
    /**
     * Display Form Title: Week Starting (Date1gen)
     * Display Form ID: date1gen.euweek.starting
     */ WeekStarting: newAttribute("date1gen.euweek.starting"),
    /**
     * Display Form Title: From - To (Date1gen)
     * Display Form ID: date1gen.euweek.from_to
     */ FromTo: newAttribute("date1gen.euweek.from_to"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Date1gen)
 * Attribute ID: date1gen.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1genWeekMonSun: IAttribute = newAttribute("date1gen.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Date1gen)
 * Attribute ID: date1gen.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1genWeekMonSunOfQtr: IAttribute = newAttribute("date1gen.euweek.in.quarter.number_eu");
/**
 * Attribute Title: Month (Date1gen)
 * Attribute ID: date1gen.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1genMonth = {
    /**
     * Display Form Title: Short (Jan) (Date1gen)
     * Display Form ID: date1gen.month.in.year.short
     */
    Short: newAttribute("date1gen.month.in.year.short"),
    /**
     * Display Form Title: Long (January) (Date1gen)
     * Display Form ID: date1gen.month.in.year.long
     */ Long: newAttribute("date1gen.month.in.year.long"),
    /**
     * Display Form Title: Number (M1) (Date1gen)
     * Display Form ID: date1gen.month.in.year.number
     */ Number: newAttribute("date1gen.month.in.year.number"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Date1gen)
     * Display Form ID: date1gen.month.in.year.m_q
     */ MQ: newAttribute("date1gen.month.in.year.m_q"),
};
/**
 * Attribute Title: Month of Quarter (Date1gen)
 * Attribute ID: date1gen.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1genMonthOfQuarter: IAttribute = newAttribute("date1gen.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Date1gen)
 * Attribute ID: date1gen.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1genDayOfYear: IAttribute = newAttribute("date1gen.day.in.year.default");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Date1gen)
 * Attribute ID: date1gen.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1genDayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Date1gen)
     * Display Form ID: date1gen.day.in.week.short
     */
    Short: newAttribute("date1gen.day.in.week.short"),
    /**
     * Display Form Title: Long (Sunday) (Date1gen)
     * Display Form ID: date1gen.day.in.week.long
     */ Long: newAttribute("date1gen.day.in.week.long"),
    /**
     * Display Form Title: Number (1=Sunday) (Date1gen)
     * Display Form ID: date1gen.day.in.week.number
     */ Number: newAttribute("date1gen.day.in.week.number"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Date1gen)
 * Attribute ID: date1gen.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1genDayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Date1gen)
     * Display Form ID: date1gen.day.in.euweek.short
     */
    Short: newAttribute("date1gen.day.in.euweek.short"),
    /**
     * Display Form Title: Long (Monday) (Date1gen)
     * Display Form ID: date1gen.day.in.euweek.long
     */ Long: newAttribute("date1gen.day.in.euweek.long"),
    /**
     * Display Form Title: Number (1=Monday) (Date1gen)
     * Display Form ID: date1gen.day.in.euweek.number
     */ Number: newAttribute("date1gen.day.in.euweek.number"),
};
/**
 * Attribute Title: Day of Quarter (Date1gen)
 * Attribute ID: date1gen.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1genDayOfQuarter: IAttribute = newAttribute("date1gen.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Date1gen)
 * Attribute ID: date1gen.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1genDayOfMonth: IAttribute = newAttribute("date1gen.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Date1gen)
 * Attribute ID: date1gen.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1genQuarterYear: IAttribute = newAttribute("date1gen.quarter.short_us");
/**
 * Attribute Title: Month/Year (Date1gen)
 * Attribute ID: date1gen.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1genMonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Date1gen)
     * Display Form ID: date1gen.month.short
     */
    Short: newAttribute("date1gen.month.short"),
    /**
     * Display Form Title: Long (January 2010) (Date1gen)
     * Display Form ID: date1gen.month.long
     */ Long: newAttribute("date1gen.month.long"),
    /**
     * Display Form Title: Number (1/2010) (Date1gen)
     * Display Form ID: date1gen.month.number
     */ Number: newAttribute("date1gen.month.number"),
};
/**
 * Attribute Title: Date (Date1gen)
 * Attribute ID: date1gen.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1genDate = {
    /**
     * Display Form Title: mm/dd/yyyy (Date1gen)
     * Display Form ID: date1gen.date.day.us.mm_dd_yyyy
     */
    MmDdYyyy: newAttribute("date1gen.date.day.us.mm_dd_yyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Date1gen)
     * Display Form ID: date1gen.date.day.yyyy_mm_dd
     */ YyyyMmDd: newAttribute("date1gen.date.day.yyyy_mm_dd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Date1gen)
     * Display Form ID: date1gen.date.day.us.m_d_yy
     */ MDYy: newAttribute("date1gen.date.day.us.m_d_yy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Date1gen)
     * Display Form ID: date1gen.date.day.us.long
     */ Long: newAttribute("date1gen.date.day.us.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Date1gen)
     * Display Form ID: date1gen.date.day.uk.dd_mm_yyyy
     */ DdMmYyyy: newAttribute("date1gen.date.day.uk.dd_mm_yyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Date1gen)
     * Display Form ID: date1gen.date.day.eu.dd_mm_yyyy
     */ DdMmYyyy_1: newAttribute("date1gen.date.day.eu.dd_mm_yyyy"),
};
/**
 * Attribute Title: US Week Year (Date1gen)
 * Attribute ID: date1gen.year.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1genUSWeekYear: IAttribute = newAttribute("date1gen.year.for.week.number");
/**
 * Attribute Title: EU Week Year (Date1gen)
 * Attribute ID: date1gen.year.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1genEUWeekYear: IAttribute = newAttribute("date1gen.year.for.euweek.number");
/**
 * Attribute Title: US Week Quarter (Date1gen)
 * Attribute ID: date1gen.quarter.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1genUSWeekQuarter: IAttribute = newAttribute("date1gen.quarter.for.week.number");
/**
 * Attribute Title: EU Week Quarter (Date1gen)
 * Attribute ID: date1gen.quarter.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date1genEUWeekQuarter: IAttribute = newAttribute("date1gen.quarter.for.euweek.number");
/**
 * Attribute Title: Year (Date2gen)
 * Attribute ID: date2gen.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2genYear: IAttribute = newAttribute("date2gen.year.default");
/**
 * Attribute Title: Quarter (Date2gen)
 * Attribute ID: date2gen.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2genQuarter: IAttribute = newAttribute("date2gen.quarter.in.year.default");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Date2gen)
 * Attribute ID: date2gen.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2genWeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date2gen)
     * Display Form ID: date2gen.week.wk_year
     */
    WeekNrYear: newAttribute("date2gen.week.wk_year"),
    /**
     * Display Form Title: Week Starting (Date2gen)
     * Display Form ID: date2gen.week.starting
     */ WeekStarting: newAttribute("date2gen.week.starting"),
    /**
     * Display Form Title: From - To (Date2gen)
     * Display Form ID: date2gen.week.from_to
     */ FromTo: newAttribute("date2gen.week.from_to"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Date2gen)
     * Display Form ID: date2gen.week.wk_year_cont
     */ WeekNrYear_1: newAttribute("date2gen.week.wk_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Date2gen)
     * Display Form ID: date2gen.week.wk_qtr_year_cont
     */ WkQtrYear: newAttribute("date2gen.week.wk_qtr_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Date2gen)
     * Display Form ID: date2gen.week.wk_qtr_year
     */ WkQtrYear_1: newAttribute("date2gen.week.wk_qtr_year"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Date2gen)
 * Attribute ID: date2gen.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2genWeekSunSat: IAttribute = newAttribute("date2gen.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Date2gen)
 * Attribute ID: date2gen.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2genWeekSunSatOfQtr: IAttribute = newAttribute("date2gen.week.in.quarter.number_us");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Date2gen)
 * Attribute ID: date2gen.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2genWeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date2gen)
     * Display Form ID: date2gen.euweek.wk_year
     */
    WeekNrYear: newAttribute("date2gen.euweek.wk_year"),
    /**
     * Display Form Title: Week Starting (Date2gen)
     * Display Form ID: date2gen.euweek.starting
     */ WeekStarting: newAttribute("date2gen.euweek.starting"),
    /**
     * Display Form Title: From - To (Date2gen)
     * Display Form ID: date2gen.euweek.from_to
     */ FromTo: newAttribute("date2gen.euweek.from_to"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Date2gen)
 * Attribute ID: date2gen.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2genWeekMonSun: IAttribute = newAttribute("date2gen.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Date2gen)
 * Attribute ID: date2gen.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2genWeekMonSunOfQtr: IAttribute = newAttribute("date2gen.euweek.in.quarter.number_eu");
/**
 * Attribute Title: Month (Date2gen)
 * Attribute ID: date2gen.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2genMonth = {
    /**
     * Display Form Title: Short (Jan) (Date2gen)
     * Display Form ID: date2gen.month.in.year.short
     */
    Short: newAttribute("date2gen.month.in.year.short"),
    /**
     * Display Form Title: Long (January) (Date2gen)
     * Display Form ID: date2gen.month.in.year.long
     */ Long: newAttribute("date2gen.month.in.year.long"),
    /**
     * Display Form Title: Number (M1) (Date2gen)
     * Display Form ID: date2gen.month.in.year.number
     */ Number: newAttribute("date2gen.month.in.year.number"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Date2gen)
     * Display Form ID: date2gen.month.in.year.m_q
     */ MQ: newAttribute("date2gen.month.in.year.m_q"),
};
/**
 * Attribute Title: Month of Quarter (Date2gen)
 * Attribute ID: date2gen.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2genMonthOfQuarter: IAttribute = newAttribute("date2gen.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Date2gen)
 * Attribute ID: date2gen.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2genDayOfYear: IAttribute = newAttribute("date2gen.day.in.year.default");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Date2gen)
 * Attribute ID: date2gen.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2genDayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Date2gen)
     * Display Form ID: date2gen.day.in.week.short
     */
    Short: newAttribute("date2gen.day.in.week.short"),
    /**
     * Display Form Title: Long (Sunday) (Date2gen)
     * Display Form ID: date2gen.day.in.week.long
     */ Long: newAttribute("date2gen.day.in.week.long"),
    /**
     * Display Form Title: Number (1=Sunday) (Date2gen)
     * Display Form ID: date2gen.day.in.week.number
     */ Number: newAttribute("date2gen.day.in.week.number"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Date2gen)
 * Attribute ID: date2gen.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2genDayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Date2gen)
     * Display Form ID: date2gen.day.in.euweek.short
     */
    Short: newAttribute("date2gen.day.in.euweek.short"),
    /**
     * Display Form Title: Long (Monday) (Date2gen)
     * Display Form ID: date2gen.day.in.euweek.long
     */ Long: newAttribute("date2gen.day.in.euweek.long"),
    /**
     * Display Form Title: Number (1=Monday) (Date2gen)
     * Display Form ID: date2gen.day.in.euweek.number
     */ Number: newAttribute("date2gen.day.in.euweek.number"),
};
/**
 * Attribute Title: Day of Quarter (Date2gen)
 * Attribute ID: date2gen.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2genDayOfQuarter: IAttribute = newAttribute("date2gen.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Date2gen)
 * Attribute ID: date2gen.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2genDayOfMonth: IAttribute = newAttribute("date2gen.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Date2gen)
 * Attribute ID: date2gen.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2genQuarterYear: IAttribute = newAttribute("date2gen.quarter.short_us");
/**
 * Attribute Title: Month/Year (Date2gen)
 * Attribute ID: date2gen.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2genMonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Date2gen)
     * Display Form ID: date2gen.month.short
     */
    Short: newAttribute("date2gen.month.short"),
    /**
     * Display Form Title: Long (January 2010) (Date2gen)
     * Display Form ID: date2gen.month.long
     */ Long: newAttribute("date2gen.month.long"),
    /**
     * Display Form Title: Number (1/2010) (Date2gen)
     * Display Form ID: date2gen.month.number
     */ Number: newAttribute("date2gen.month.number"),
};
/**
 * Attribute Title: Date (Date2gen)
 * Attribute ID: date2gen.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2genDate = {
    /**
     * Display Form Title: mm/dd/yyyy (Date2gen)
     * Display Form ID: date2gen.date.day.us.mm_dd_yyyy
     */
    MmDdYyyy: newAttribute("date2gen.date.day.us.mm_dd_yyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Date2gen)
     * Display Form ID: date2gen.date.day.yyyy_mm_dd
     */ YyyyMmDd: newAttribute("date2gen.date.day.yyyy_mm_dd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Date2gen)
     * Display Form ID: date2gen.date.day.us.m_d_yy
     */ MDYy: newAttribute("date2gen.date.day.us.m_d_yy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Date2gen)
     * Display Form ID: date2gen.date.day.us.long
     */ Long: newAttribute("date2gen.date.day.us.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Date2gen)
     * Display Form ID: date2gen.date.day.uk.dd_mm_yyyy
     */ DdMmYyyy: newAttribute("date2gen.date.day.uk.dd_mm_yyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Date2gen)
     * Display Form ID: date2gen.date.day.eu.dd_mm_yyyy
     */ DdMmYyyy_1: newAttribute("date2gen.date.day.eu.dd_mm_yyyy"),
};
/**
 * Attribute Title: US Week Year (Date2gen)
 * Attribute ID: date2gen.year.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2genUSWeekYear: IAttribute = newAttribute("date2gen.year.for.week.number");
/**
 * Attribute Title: EU Week Year (Date2gen)
 * Attribute ID: date2gen.year.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2genEUWeekYear: IAttribute = newAttribute("date2gen.year.for.euweek.number");
/**
 * Attribute Title: US Week Quarter (Date2gen)
 * Attribute ID: date2gen.quarter.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2genUSWeekQuarter: IAttribute = newAttribute("date2gen.quarter.for.week.number");
/**
 * Attribute Title: EU Week Quarter (Date2gen)
 * Attribute ID: date2gen.quarter.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date2genEUWeekQuarter: IAttribute = newAttribute("date2gen.quarter.for.euweek.number");
/**
 * Attribute Title: Year (Date3gen)
 * Attribute ID: date3gen.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3genYear: IAttribute = newAttribute("date3gen.year.default");
/**
 * Attribute Title: Quarter (Date3gen)
 * Attribute ID: date3gen.quarter.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3genQuarter: IAttribute = newAttribute("date3gen.quarter.in.year.default");
/**
 * Attribute Title: Week (Sun-Sat)/Year (Date3gen)
 * Attribute ID: date3gen.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3genWeekSunSatYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date3gen)
     * Display Form ID: date3gen.week.wk_year
     */
    WeekNrYear: newAttribute("date3gen.week.wk_year"),
    /**
     * Display Form Title: Week Starting (Date3gen)
     * Display Form ID: date3gen.week.starting
     */ WeekStarting: newAttribute("date3gen.week.starting"),
    /**
     * Display Form Title: From - To (Date3gen)
     * Display Form ID: date3gen.week.from_to
     */ FromTo: newAttribute("date3gen.week.from_to"),
    /**
     * Display Form Title: Week #/Year (Cont.) (Date3gen)
     * Display Form ID: date3gen.week.wk_year_cont
     */ WeekNrYear_1: newAttribute("date3gen.week.wk_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Cont.) (Date3gen)
     * Display Form ID: date3gen.week.wk_qtr_year_cont
     */ WkQtrYear: newAttribute("date3gen.week.wk_qtr_year_cont"),
    /**
     * Display Form Title: Wk/Qtr/Year (Date3gen)
     * Display Form ID: date3gen.week.wk_qtr_year
     */ WkQtrYear_1: newAttribute("date3gen.week.wk_qtr_year"),
};
/**
 * Attribute Title: Week (Sun-Sat) (Date3gen)
 * Attribute ID: date3gen.week.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3genWeekSunSat: IAttribute = newAttribute("date3gen.week.in.year.number_us");
/**
 * Attribute Title: Week (Sun-Sat) of Qtr (Date3gen)
 * Attribute ID: date3gen.week.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3genWeekSunSatOfQtr: IAttribute = newAttribute("date3gen.week.in.quarter.number_us");
/**
 * Attribute Title: Week (Mon-Sun)/Year (Date3gen)
 * Attribute ID: date3gen.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3genWeekMonSunYear = {
    /**
     * Display Form Title: Week #/Year (W1/2010) (Date3gen)
     * Display Form ID: date3gen.euweek.wk_year
     */
    WeekNrYear: newAttribute("date3gen.euweek.wk_year"),
    /**
     * Display Form Title: Week Starting (Date3gen)
     * Display Form ID: date3gen.euweek.starting
     */ WeekStarting: newAttribute("date3gen.euweek.starting"),
    /**
     * Display Form Title: From - To (Date3gen)
     * Display Form ID: date3gen.euweek.from_to
     */ FromTo: newAttribute("date3gen.euweek.from_to"),
};
/**
 * Attribute Title: Week (Mon-Sun) (Date3gen)
 * Attribute ID: date3gen.euweek.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3genWeekMonSun: IAttribute = newAttribute("date3gen.euweek.in.year.number_eu");
/**
 * Attribute Title: Week (Mon-Sun) of Qtr (Date3gen)
 * Attribute ID: date3gen.euweek.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3genWeekMonSunOfQtr: IAttribute = newAttribute("date3gen.euweek.in.quarter.number_eu");
/**
 * Attribute Title: Month (Date3gen)
 * Attribute ID: date3gen.month.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3genMonth = {
    /**
     * Display Form Title: Short (Jan) (Date3gen)
     * Display Form ID: date3gen.month.in.year.short
     */
    Short: newAttribute("date3gen.month.in.year.short"),
    /**
     * Display Form Title: Long (January) (Date3gen)
     * Display Form ID: date3gen.month.in.year.long
     */ Long: newAttribute("date3gen.month.in.year.long"),
    /**
     * Display Form Title: Number (M1) (Date3gen)
     * Display Form ID: date3gen.month.in.year.number
     */ Number: newAttribute("date3gen.month.in.year.number"),
    /**
     * Display Form Title: M/Q (M1/Q1) (Date3gen)
     * Display Form ID: date3gen.month.in.year.m_q
     */ MQ: newAttribute("date3gen.month.in.year.m_q"),
};
/**
 * Attribute Title: Month of Quarter (Date3gen)
 * Attribute ID: date3gen.month.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3genMonthOfQuarter: IAttribute = newAttribute("date3gen.month.in.quarter.number");
/**
 * Attribute Title: Day of Year (Date3gen)
 * Attribute ID: date3gen.day.in.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3genDayOfYear: IAttribute = newAttribute("date3gen.day.in.year.default");
/**
 * Attribute Title: Day of Week (Sun-Sat) (Date3gen)
 * Attribute ID: date3gen.day.in.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3genDayOfWeekSunSat = {
    /**
     * Display Form Title: Short (Sun) (Date3gen)
     * Display Form ID: date3gen.day.in.week.short
     */
    Short: newAttribute("date3gen.day.in.week.short"),
    /**
     * Display Form Title: Long (Sunday) (Date3gen)
     * Display Form ID: date3gen.day.in.week.long
     */ Long: newAttribute("date3gen.day.in.week.long"),
    /**
     * Display Form Title: Number (1=Sunday) (Date3gen)
     * Display Form ID: date3gen.day.in.week.number
     */ Number: newAttribute("date3gen.day.in.week.number"),
};
/**
 * Attribute Title: Day of Week (Mon-Sun) (Date3gen)
 * Attribute ID: date3gen.day.in.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3genDayOfWeekMonSun = {
    /**
     * Display Form Title: Short (Mon) (Date3gen)
     * Display Form ID: date3gen.day.in.euweek.short
     */
    Short: newAttribute("date3gen.day.in.euweek.short"),
    /**
     * Display Form Title: Long (Monday) (Date3gen)
     * Display Form ID: date3gen.day.in.euweek.long
     */ Long: newAttribute("date3gen.day.in.euweek.long"),
    /**
     * Display Form Title: Number (1=Monday) (Date3gen)
     * Display Form ID: date3gen.day.in.euweek.number
     */ Number: newAttribute("date3gen.day.in.euweek.number"),
};
/**
 * Attribute Title: Day of Quarter (Date3gen)
 * Attribute ID: date3gen.day.in.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3genDayOfQuarter: IAttribute = newAttribute("date3gen.day.in.quarter.default");
/**
 * Attribute Title: Day of Month (Date3gen)
 * Attribute ID: date3gen.day.in.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3genDayOfMonth: IAttribute = newAttribute("date3gen.day.in.month.default");
/**
 * Attribute Title: Quarter/Year (Date3gen)
 * Attribute ID: date3gen.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3genQuarterYear: IAttribute = newAttribute("date3gen.quarter.short_us");
/**
 * Attribute Title: Month/Year (Date3gen)
 * Attribute ID: date3gen.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3genMonthYear = {
    /**
     * Display Form Title: Short (Jan 2010) (Date3gen)
     * Display Form ID: date3gen.month.short
     */
    Short: newAttribute("date3gen.month.short"),
    /**
     * Display Form Title: Long (January 2010) (Date3gen)
     * Display Form ID: date3gen.month.long
     */ Long: newAttribute("date3gen.month.long"),
    /**
     * Display Form Title: Number (1/2010) (Date3gen)
     * Display Form ID: date3gen.month.number
     */ Number: newAttribute("date3gen.month.number"),
};
/**
 * Attribute Title: Date (Date3gen)
 * Attribute ID: date3gen.date
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3genDate = {
    /**
     * Display Form Title: mm/dd/yyyy (Date3gen)
     * Display Form ID: date3gen.date.day.us.mm_dd_yyyy
     */
    MmDdYyyy: newAttribute("date3gen.date.day.us.mm_dd_yyyy"),
    /**
     * Display Form Title: yyyy-mm-dd (Date3gen)
     * Display Form ID: date3gen.date.day.yyyy_mm_dd
     */ YyyyMmDd: newAttribute("date3gen.date.day.yyyy_mm_dd"),
    /**
     * Display Form Title: m/d/yy (no leading zeroes) (Date3gen)
     * Display Form ID: date3gen.date.day.us.m_d_yy
     */ MDYy: newAttribute("date3gen.date.day.us.m_d_yy"),
    /**
     * Display Form Title: Long (Mon, Jan 1, 2010) (Date3gen)
     * Display Form ID: date3gen.date.day.us.long
     */ Long: newAttribute("date3gen.date.day.us.long"),
    /**
     * Display Form Title: dd/mm/yyyy (Date3gen)
     * Display Form ID: date3gen.date.day.uk.dd_mm_yyyy
     */ DdMmYyyy: newAttribute("date3gen.date.day.uk.dd_mm_yyyy"),
    /**
     * Display Form Title: dd-mm-yyyy (Date3gen)
     * Display Form ID: date3gen.date.day.eu.dd_mm_yyyy
     */ DdMmYyyy_1: newAttribute("date3gen.date.day.eu.dd_mm_yyyy"),
};
/**
 * Attribute Title: US Week Year (Date3gen)
 * Attribute ID: date3gen.year.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3genUSWeekYear: IAttribute = newAttribute("date3gen.year.for.week.number");
/**
 * Attribute Title: EU Week Year (Date3gen)
 * Attribute ID: date3gen.year.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3genEUWeekYear: IAttribute = newAttribute("date3gen.year.for.euweek.number");
/**
 * Attribute Title: US Week Quarter (Date3gen)
 * Attribute ID: date3gen.quarter.for.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3genUSWeekQuarter: IAttribute = newAttribute("date3gen.quarter.for.week.number");
/**
 * Attribute Title: EU Week Quarter (Date3gen)
 * Attribute ID: date3gen.quarter.for.euweek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const Date3genEUWeekQuarter: IAttribute = newAttribute("date3gen.quarter.for.euweek.number");
/** Available Date Data Sets */
export const DateDatasets = {
    /**
     * Date Data Set Title: Date (Date)
     * Date Data Set ID: date.dataset.dt
     */
    Date: {
        ref: idRef("date.dataset.dt", "dataSet"),
        identifier: "date.dataset.dt",
        /**
         * Date Attribute: Year (Date)
         * Date Attribute ID: date.year
         */ Year: {
            ref: idRef("date.year", "attribute"),
            identifier: "date.year",
            /**
             * Display Form Title: Year (Date)
             * Display Form ID: date.aag81lMifn6q
             */ Default: newAttribute("date.aag81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter (Date)
         * Date Attribute ID: date.quarter.in.year
         */ Quarter: {
            ref: idRef("date.quarter.in.year", "attribute"),
            identifier: "date.quarter.in.year",
            /**
             * Display Form Title: default (Date)
             * Display Form ID: date.aam81lMifn6q
             */ Default: newAttribute("date.aam81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Date)
         * Date Attribute ID: date.week
         */ WeekSunSatYear: {
            ref: idRef("date.week", "attribute"),
            identifier: "date.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date)
             * Display Form ID: date.aaA81lMifn6q
             */ WeekNrYear: newAttribute("date.aaA81lMifn6q"),
            /**
             * Display Form Title: Week Starting (Date)
             * Display Form ID: date.aaw81lMifn6q
             */ WeekStarting: newAttribute("date.aaw81lMifn6q"),
            /**
             * Display Form Title: From - To (Date)
             * Display Form ID: date.aau81lMifn6q
             */ FromTo: newAttribute("date.aau81lMifn6q"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Date)
             * Display Form ID: date.aay81lMifn6q
             */ WeekNrYear_1: newAttribute("date.aay81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Date)
             * Display Form ID: date.aaC81lMifn6q
             */ WkQtrYear: newAttribute("date.aaC81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Date)
             * Display Form ID: date.aas81lMifn6q
             */ WkQtrYear_1: newAttribute("date.aas81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Date)
         * Date Attribute ID: date.week.in.year
         */ WeekSunSat: {
            ref: idRef("date.week.in.year", "attribute"),
            identifier: "date.week.in.year",
            /**
             * Display Form Title: Number US (Date)
             * Display Form ID: date.aaI81lMifn6q
             */ NumberUS: newAttribute("date.aaI81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Date)
         * Date Attribute ID: date.week.in.quarter
         */ WeekSunSatOfQtr: {
            ref: idRef("date.week.in.quarter", "attribute"),
            identifier: "date.week.in.quarter",
            /**
             * Display Form Title: Number US (Date)
             * Display Form ID: date.aaO81lMifn6q
             */ NumberUS: newAttribute("date.aaO81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Date)
         * Date Attribute ID: date.euweek
         */ WeekMonSunYear: {
            ref: idRef("date.euweek", "attribute"),
            identifier: "date.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date)
             * Display Form ID: date.aa281lMifn6q
             */ WeekNrYear: newAttribute("date.aa281lMifn6q"),
            /**
             * Display Form Title: Week Starting (Date)
             * Display Form ID: date.aaY81lMifn6q
             */ WeekStarting: newAttribute("date.aaY81lMifn6q"),
            /**
             * Display Form Title: From - To (Date)
             * Display Form ID: date.aaW81lMifn6q
             */ FromTo: newAttribute("date.aaW81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Date)
         * Date Attribute ID: date.euweek.in.year
         */ WeekMonSun: {
            ref: idRef("date.euweek.in.year", "attribute"),
            identifier: "date.euweek.in.year",
            /**
             * Display Form Title: Number EU (Date)
             * Display Form ID: date.aba81lMifn6q
             */ NumberEU: newAttribute("date.aba81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Date)
         * Date Attribute ID: date.euweek.in.quarter
         */ WeekMonSunOfQtr: {
            ref: idRef("date.euweek.in.quarter", "attribute"),
            identifier: "date.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Date)
             * Display Form ID: date.abg81lMifn6q
             */ NumberEU: newAttribute("date.abg81lMifn6q"),
        },
        /**
         * Date Attribute: Month (Date)
         * Date Attribute ID: date.month.in.year
         */ Month: {
            ref: idRef("date.month.in.year", "attribute"),
            identifier: "date.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Date)
             * Display Form ID: date.abm81lMifn6q
             */ Short: newAttribute("date.abm81lMifn6q"),
            /**
             * Display Form Title: Long (January) (Date)
             * Display Form ID: date.abs81lMifn6q
             */ Long: newAttribute("date.abs81lMifn6q"),
            /**
             * Display Form Title: Number (M1) (Date)
             * Display Form ID: date.abq81lMifn6q
             */ Number: newAttribute("date.abq81lMifn6q"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Date)
             * Display Form ID: date.abo81lMifn6q
             */ MQ: newAttribute("date.abo81lMifn6q"),
        },
        /**
         * Date Attribute: Month of Quarter (Date)
         * Date Attribute ID: date.month.in.quarter
         */ MonthOfQuarter: {
            ref: idRef("date.month.in.quarter", "attribute"),
            identifier: "date.month.in.quarter",
            /**
             * Display Form Title: Number (Date)
             * Display Form ID: date.aby81lMifn6q
             */ Number: newAttribute("date.aby81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Year (Date)
         * Date Attribute ID: date.day.in.year
         */ DayOfYear: {
            ref: idRef("date.day.in.year", "attribute"),
            identifier: "date.day.in.year",
            /**
             * Display Form Title: default (Date)
             * Display Form ID: date.abE81lMifn6q
             */ Default: newAttribute("date.abE81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Date)
         * Date Attribute ID: date.day.in.week
         */ DayOfWeekSunSat: {
            ref: idRef("date.day.in.week", "attribute"),
            identifier: "date.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Date)
             * Display Form ID: date.abK81lMifn6q
             */ Short: newAttribute("date.abK81lMifn6q"),
            /**
             * Display Form Title: Long (Sunday) (Date)
             * Display Form ID: date.abO81lMifn6q
             */ Long: newAttribute("date.abO81lMifn6q"),
            /**
             * Display Form Title: Number (1=Sunday) (Date)
             * Display Form ID: date.abM81lMifn6q
             */ Number: newAttribute("date.abM81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Date)
         * Date Attribute ID: date.day.in.euweek
         */ DayOfWeekMonSun: {
            ref: idRef("date.day.in.euweek", "attribute"),
            identifier: "date.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Date)
             * Display Form ID: date.abU81lMifn6q
             */ Short: newAttribute("date.abU81lMifn6q"),
            /**
             * Display Form Title: Long (Monday) (Date)
             * Display Form ID: date.abY81lMifn6q
             */ Long: newAttribute("date.abY81lMifn6q"),
            /**
             * Display Form Title: Number (1=Monday) (Date)
             * Display Form ID: date.abW81lMifn6q
             */ Number: newAttribute("date.abW81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Quarter (Date)
         * Date Attribute ID: date.day.in.quarter
         */ DayOfQuarter: {
            ref: idRef("date.day.in.quarter", "attribute"),
            identifier: "date.day.in.quarter",
            /**
             * Display Form Title: default (Date)
             * Display Form ID: date.ab481lMifn6q
             */ Default: newAttribute("date.ab481lMifn6q"),
        },
        /**
         * Date Attribute: Day of Month (Date)
         * Date Attribute ID: date.day.in.month
         */ DayOfMonth: {
            ref: idRef("date.day.in.month", "attribute"),
            identifier: "date.day.in.month",
            /**
             * Display Form Title: default (Date)
             * Display Form ID: date.aca81lMifn6q
             */ Default: newAttribute("date.aca81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter/Year (Date)
         * Date Attribute ID: date.quarter
         */ QuarterYear: {
            ref: idRef("date.quarter", "attribute"),
            identifier: "date.quarter",
            /**
             * Display Form Title: US Short (Date)
             * Display Form ID: date.aci81lMifn6q
             */ USShort: newAttribute("date.aci81lMifn6q"),
        },
        /**
         * Date Attribute: Month/Year (Date)
         * Date Attribute ID: date.month
         */ MonthYear: {
            ref: idRef("date.month", "attribute"),
            identifier: "date.month",
            /**
             * Display Form Title: Short (Jan 2010) (Date)
             * Display Form ID: date.act81lMifn6q
             */ Short: newAttribute("date.act81lMifn6q"),
            /**
             * Display Form Title: Long (January 2010) (Date)
             * Display Form ID: date.acx81lMifn6q
             */ Long: newAttribute("date.acx81lMifn6q"),
            /**
             * Display Form Title: Number (1/2010) (Date)
             * Display Form ID: date.acv81lMifn6q
             */ Number: newAttribute("date.acv81lMifn6q"),
        },
        /**
         * Date Attribute: Date (Date)
         * Date Attribute ID: date.date
         */ Date: {
            ref: idRef("date.date", "attribute"),
            identifier: "date.date",
            /**
             * Display Form Title: mm/dd/yyyy (Date)
             * Display Form ID: date.date.mmddyyyy
             */ MmDdYyyy: newAttribute("date.date.mmddyyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Date)
             * Display Form ID: date.date.yyyymmdd
             */ YyyyMmDd: newAttribute("date.date.yyyymmdd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Date)
             * Display Form ID: date.date.mdyy
             */ MDYy: newAttribute("date.date.mdyy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Date)
             * Display Form ID: date.date.long
             */ Long: newAttribute("date.date.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Date)
             * Display Form ID: date.date.ddmmyyyy
             */ DdMmYyyy: newAttribute("date.date.ddmmyyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Date)
             * Display Form ID: date.date.eddmmyyyy
             */ DdMmYyyy_1: newAttribute("date.date.eddmmyyyy"),
        },
    },
    /**
     * Date Data Set Title: Date (Timeline)
     * Date Data Set ID: timeline.dataset.dt
     */ Timeline: {
        ref: idRef("timeline.dataset.dt", "dataSet"),
        identifier: "timeline.dataset.dt",
        /**
         * Date Attribute: Year (Timeline)
         * Date Attribute ID: timeline.year
         */ Year: {
            ref: idRef("timeline.year", "attribute"),
            identifier: "timeline.year",
            /**
             * Display Form Title: Year (Timeline)
             * Display Form ID: timeline.aag81lMifn6q
             */ Default: newAttribute("timeline.aag81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter (Timeline)
         * Date Attribute ID: timeline.quarter.in.year
         */ Quarter: {
            ref: idRef("timeline.quarter.in.year", "attribute"),
            identifier: "timeline.quarter.in.year",
            /**
             * Display Form Title: default (Timeline)
             * Display Form ID: timeline.aam81lMifn6q
             */ Default: newAttribute("timeline.aam81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Timeline)
         * Date Attribute ID: timeline.week
         */ WeekSunSatYear: {
            ref: idRef("timeline.week", "attribute"),
            identifier: "timeline.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Timeline)
             * Display Form ID: timeline.aaA81lMifn6q
             */ WeekNrYear: newAttribute("timeline.aaA81lMifn6q"),
            /**
             * Display Form Title: Week Starting (Timeline)
             * Display Form ID: timeline.aaw81lMifn6q
             */ WeekStarting: newAttribute("timeline.aaw81lMifn6q"),
            /**
             * Display Form Title: From - To (Timeline)
             * Display Form ID: timeline.aau81lMifn6q
             */ FromTo: newAttribute("timeline.aau81lMifn6q"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Timeline)
             * Display Form ID: timeline.aay81lMifn6q
             */ WeekNrYear_1: newAttribute("timeline.aay81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Timeline)
             * Display Form ID: timeline.aaC81lMifn6q
             */ WkQtrYear: newAttribute("timeline.aaC81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Timeline)
             * Display Form ID: timeline.aas81lMifn6q
             */ WkQtrYear_1: newAttribute("timeline.aas81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Timeline)
         * Date Attribute ID: timeline.week.in.year
         */ WeekSunSat: {
            ref: idRef("timeline.week.in.year", "attribute"),
            identifier: "timeline.week.in.year",
            /**
             * Display Form Title: Number US (Timeline)
             * Display Form ID: timeline.aaI81lMifn6q
             */ NumberUS: newAttribute("timeline.aaI81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Timeline)
         * Date Attribute ID: timeline.week.in.quarter
         */ WeekSunSatOfQtr: {
            ref: idRef("timeline.week.in.quarter", "attribute"),
            identifier: "timeline.week.in.quarter",
            /**
             * Display Form Title: Number US (Timeline)
             * Display Form ID: timeline.aaO81lMifn6q
             */ NumberUS: newAttribute("timeline.aaO81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Timeline)
         * Date Attribute ID: timeline.euweek
         */ WeekMonSunYear: {
            ref: idRef("timeline.euweek", "attribute"),
            identifier: "timeline.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Timeline)
             * Display Form ID: timeline.aa281lMifn6q
             */ WeekNrYear: newAttribute("timeline.aa281lMifn6q"),
            /**
             * Display Form Title: Week Starting (Timeline)
             * Display Form ID: timeline.aaY81lMifn6q
             */ WeekStarting: newAttribute("timeline.aaY81lMifn6q"),
            /**
             * Display Form Title: From - To (Timeline)
             * Display Form ID: timeline.aaW81lMifn6q
             */ FromTo: newAttribute("timeline.aaW81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Timeline)
         * Date Attribute ID: timeline.euweek.in.year
         */ WeekMonSun: {
            ref: idRef("timeline.euweek.in.year", "attribute"),
            identifier: "timeline.euweek.in.year",
            /**
             * Display Form Title: Number EU (Timeline)
             * Display Form ID: timeline.aba81lMifn6q
             */ NumberEU: newAttribute("timeline.aba81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Timeline)
         * Date Attribute ID: timeline.euweek.in.quarter
         */ WeekMonSunOfQtr: {
            ref: idRef("timeline.euweek.in.quarter", "attribute"),
            identifier: "timeline.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Timeline)
             * Display Form ID: timeline.abg81lMifn6q
             */ NumberEU: newAttribute("timeline.abg81lMifn6q"),
        },
        /**
         * Date Attribute: Month (Timeline)
         * Date Attribute ID: timeline.month.in.year
         */ Month: {
            ref: idRef("timeline.month.in.year", "attribute"),
            identifier: "timeline.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Timeline)
             * Display Form ID: timeline.abm81lMifn6q
             */ Short: newAttribute("timeline.abm81lMifn6q"),
            /**
             * Display Form Title: Long (January) (Timeline)
             * Display Form ID: timeline.abs81lMifn6q
             */ Long: newAttribute("timeline.abs81lMifn6q"),
            /**
             * Display Form Title: Number (M1) (Timeline)
             * Display Form ID: timeline.abq81lMifn6q
             */ Number: newAttribute("timeline.abq81lMifn6q"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Timeline)
             * Display Form ID: timeline.abo81lMifn6q
             */ MQ: newAttribute("timeline.abo81lMifn6q"),
        },
        /**
         * Date Attribute: Month of Quarter (Timeline)
         * Date Attribute ID: timeline.month.in.quarter
         */ MonthOfQuarter: {
            ref: idRef("timeline.month.in.quarter", "attribute"),
            identifier: "timeline.month.in.quarter",
            /**
             * Display Form Title: Number (Timeline)
             * Display Form ID: timeline.aby81lMifn6q
             */ Number: newAttribute("timeline.aby81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Year (Timeline)
         * Date Attribute ID: timeline.day.in.year
         */ DayOfYear: {
            ref: idRef("timeline.day.in.year", "attribute"),
            identifier: "timeline.day.in.year",
            /**
             * Display Form Title: default (Timeline)
             * Display Form ID: timeline.abE81lMifn6q
             */ Default: newAttribute("timeline.abE81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Timeline)
         * Date Attribute ID: timeline.day.in.week
         */ DayOfWeekSunSat: {
            ref: idRef("timeline.day.in.week", "attribute"),
            identifier: "timeline.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Timeline)
             * Display Form ID: timeline.abK81lMifn6q
             */ Short: newAttribute("timeline.abK81lMifn6q"),
            /**
             * Display Form Title: Long (Sunday) (Timeline)
             * Display Form ID: timeline.abO81lMifn6q
             */ Long: newAttribute("timeline.abO81lMifn6q"),
            /**
             * Display Form Title: Number (1=Sunday) (Timeline)
             * Display Form ID: timeline.abM81lMifn6q
             */ Number: newAttribute("timeline.abM81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Timeline)
         * Date Attribute ID: timeline.day.in.euweek
         */ DayOfWeekMonSun: {
            ref: idRef("timeline.day.in.euweek", "attribute"),
            identifier: "timeline.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Timeline)
             * Display Form ID: timeline.abU81lMifn6q
             */ Short: newAttribute("timeline.abU81lMifn6q"),
            /**
             * Display Form Title: Long (Monday) (Timeline)
             * Display Form ID: timeline.abY81lMifn6q
             */ Long: newAttribute("timeline.abY81lMifn6q"),
            /**
             * Display Form Title: Number (1=Monday) (Timeline)
             * Display Form ID: timeline.abW81lMifn6q
             */ Number: newAttribute("timeline.abW81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Quarter (Timeline)
         * Date Attribute ID: timeline.day.in.quarter
         */ DayOfQuarter: {
            ref: idRef("timeline.day.in.quarter", "attribute"),
            identifier: "timeline.day.in.quarter",
            /**
             * Display Form Title: default (Timeline)
             * Display Form ID: timeline.ab481lMifn6q
             */ Default: newAttribute("timeline.ab481lMifn6q"),
        },
        /**
         * Date Attribute: Day of Month (Timeline)
         * Date Attribute ID: timeline.day.in.month
         */ DayOfMonth: {
            ref: idRef("timeline.day.in.month", "attribute"),
            identifier: "timeline.day.in.month",
            /**
             * Display Form Title: default (Timeline)
             * Display Form ID: timeline.aca81lMifn6q
             */ Default: newAttribute("timeline.aca81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter/Year (Timeline)
         * Date Attribute ID: timeline.quarter
         */ QuarterYear: {
            ref: idRef("timeline.quarter", "attribute"),
            identifier: "timeline.quarter",
            /**
             * Display Form Title: US Short (Timeline)
             * Display Form ID: timeline.aci81lMifn6q
             */ USShort: newAttribute("timeline.aci81lMifn6q"),
        },
        /**
         * Date Attribute: Month/Year (Timeline)
         * Date Attribute ID: timeline.month
         */ MonthYear: {
            ref: idRef("timeline.month", "attribute"),
            identifier: "timeline.month",
            /**
             * Display Form Title: Short (Jan 2010) (Timeline)
             * Display Form ID: timeline.act81lMifn6q
             */ Short: newAttribute("timeline.act81lMifn6q"),
            /**
             * Display Form Title: Long (January 2010) (Timeline)
             * Display Form ID: timeline.acx81lMifn6q
             */ Long: newAttribute("timeline.acx81lMifn6q"),
            /**
             * Display Form Title: Number (1/2010) (Timeline)
             * Display Form ID: timeline.acv81lMifn6q
             */ Number: newAttribute("timeline.acv81lMifn6q"),
        },
        /**
         * Date Attribute: Date (Timeline)
         * Date Attribute ID: timeline.date
         */ Date: {
            ref: idRef("timeline.date", "attribute"),
            identifier: "timeline.date",
            /**
             * Display Form Title: mm/dd/yyyy (Timeline)
             * Display Form ID: timeline.date.mmddyyyy
             */ MmDdYyyy: newAttribute("timeline.date.mmddyyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Timeline)
             * Display Form ID: timeline.date.yyyymmdd
             */ YyyyMmDd: newAttribute("timeline.date.yyyymmdd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Timeline)
             * Display Form ID: timeline.date.mdyy
             */ MDYy: newAttribute("timeline.date.mdyy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Timeline)
             * Display Form ID: timeline.date.long
             */ Long: newAttribute("timeline.date.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Timeline)
             * Display Form ID: timeline.date.ddmmyyyy
             */ DdMmYyyy: newAttribute("timeline.date.ddmmyyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Timeline)
             * Display Form ID: timeline.date.eddmmyyyy
             */ DdMmYyyy_1: newAttribute("timeline.date.eddmmyyyy"),
        },
    },
    /**
     * Date Data Set Title: Date (Fiscal Date)
     * Date Data Set ID: fiscaldate.fiscaljun1_dataset.dt
     */ FiscalDate: {
        ref: idRef("fiscaldate.fiscaljun1_dataset.dt", "dataSet"),
        identifier: "fiscaldate.fiscaljun1_dataset.dt",
        /**
         * Date Attribute: Year (Fiscal Date)
         * Date Attribute ID: fiscaldate.fiscaljun1_year
         */ Year: {
            ref: idRef("fiscaldate.fiscaljun1_year", "attribute"),
            identifier: "fiscaldate.fiscaljun1_year",
            /**
             * Display Form Title: Year (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_aag81lMifn6q
             */ Default: newAttribute("fiscaldate.fiscaljun1_aag81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter (Fiscal Date)
         * Date Attribute ID: fiscaldate.fiscaljun1_quarter.in.year
         */ Quarter: {
            ref: idRef("fiscaldate.fiscaljun1_quarter.in.year", "attribute"),
            identifier: "fiscaldate.fiscaljun1_quarter.in.year",
            /**
             * Display Form Title: default (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_aam81lMifn6q
             */ Default: newAttribute("fiscaldate.fiscaljun1_aam81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Fiscal Date)
         * Date Attribute ID: fiscaldate.fiscaljun1_week
         */ WeekSunSatYear: {
            ref: idRef("fiscaldate.fiscaljun1_week", "attribute"),
            identifier: "fiscaldate.fiscaljun1_week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_aaA81lMifn6q
             */ WeekNrYear: newAttribute("fiscaldate.fiscaljun1_aaA81lMifn6q"),
            /**
             * Display Form Title: Week Starting (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_aaw81lMifn6q
             */ WeekStarting: newAttribute("fiscaldate.fiscaljun1_aaw81lMifn6q"),
            /**
             * Display Form Title: From - To (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_aau81lMifn6q
             */ FromTo: newAttribute("fiscaldate.fiscaljun1_aau81lMifn6q"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_aay81lMifn6q
             */ WeekNrYear_1: newAttribute("fiscaldate.fiscaljun1_aay81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_aaC81lMifn6q
             */ WkQtrYear: newAttribute("fiscaldate.fiscaljun1_aaC81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_aas81lMifn6q
             */ WkQtrYear_1: newAttribute("fiscaldate.fiscaljun1_aas81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Fiscal Date)
         * Date Attribute ID: fiscaldate.fiscaljun1_week.in.year
         */ WeekSunSat: {
            ref: idRef("fiscaldate.fiscaljun1_week.in.year", "attribute"),
            identifier: "fiscaldate.fiscaljun1_week.in.year",
            /**
             * Display Form Title: Number US (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_aaI81lMifn6q
             */ NumberUS: newAttribute("fiscaldate.fiscaljun1_aaI81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Fiscal Date)
         * Date Attribute ID: fiscaldate.fiscaljun1_week.in.quarter
         */ WeekSunSatOfQtr: {
            ref: idRef("fiscaldate.fiscaljun1_week.in.quarter", "attribute"),
            identifier: "fiscaldate.fiscaljun1_week.in.quarter",
            /**
             * Display Form Title: Number US (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_aaO81lMifn6q
             */ NumberUS: newAttribute("fiscaldate.fiscaljun1_aaO81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Fiscal Date)
         * Date Attribute ID: fiscaldate.fiscaljun1_euweek
         */ WeekMonSunYear: {
            ref: idRef("fiscaldate.fiscaljun1_euweek", "attribute"),
            identifier: "fiscaldate.fiscaljun1_euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_aa281lMifn6q
             */ WeekNrYear: newAttribute("fiscaldate.fiscaljun1_aa281lMifn6q"),
            /**
             * Display Form Title: Week Starting (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_aaY81lMifn6q
             */ WeekStarting: newAttribute("fiscaldate.fiscaljun1_aaY81lMifn6q"),
            /**
             * Display Form Title: From - To (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_aaW81lMifn6q
             */ FromTo: newAttribute("fiscaldate.fiscaljun1_aaW81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Fiscal Date)
         * Date Attribute ID: fiscaldate.fiscaljun1_euweek.in.year
         */ WeekMonSun: {
            ref: idRef("fiscaldate.fiscaljun1_euweek.in.year", "attribute"),
            identifier: "fiscaldate.fiscaljun1_euweek.in.year",
            /**
             * Display Form Title: Number EU (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_aba81lMifn6q
             */ NumberEU: newAttribute("fiscaldate.fiscaljun1_aba81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Fiscal Date)
         * Date Attribute ID: fiscaldate.fiscaljun1_euweek.in.quarter
         */ WeekMonSunOfQtr: {
            ref: idRef("fiscaldate.fiscaljun1_euweek.in.quarter", "attribute"),
            identifier: "fiscaldate.fiscaljun1_euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_abg81lMifn6q
             */ NumberEU: newAttribute("fiscaldate.fiscaljun1_abg81lMifn6q"),
        },
        /**
         * Date Attribute: Month (Fiscal Date)
         * Date Attribute ID: fiscaldate.fiscaljun1_month.in.year
         */ Month: {
            ref: idRef("fiscaldate.fiscaljun1_month.in.year", "attribute"),
            identifier: "fiscaldate.fiscaljun1_month.in.year",
            /**
             * Display Form Title: Short (Jan) (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_abm81lMifn6q
             */ Short: newAttribute("fiscaldate.fiscaljun1_abm81lMifn6q"),
            /**
             * Display Form Title: Long (January) (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_abs81lMifn6q
             */ Long: newAttribute("fiscaldate.fiscaljun1_abs81lMifn6q"),
            /**
             * Display Form Title: Number (M1) (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_abq81lMifn6q
             */ Number: newAttribute("fiscaldate.fiscaljun1_abq81lMifn6q"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_abo81lMifn6q
             */ MQ: newAttribute("fiscaldate.fiscaljun1_abo81lMifn6q"),
        },
        /**
         * Date Attribute: Month of Quarter (Fiscal Date)
         * Date Attribute ID: fiscaldate.fiscaljun1_month.in.quarter
         */ MonthOfQuarter: {
            ref: idRef("fiscaldate.fiscaljun1_month.in.quarter", "attribute"),
            identifier: "fiscaldate.fiscaljun1_month.in.quarter",
            /**
             * Display Form Title: Number (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_aby81lMifn6q
             */ Number: newAttribute("fiscaldate.fiscaljun1_aby81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Year (Fiscal Date)
         * Date Attribute ID: fiscaldate.fiscaljun1_day.in.year
         */ DayOfYear: {
            ref: idRef("fiscaldate.fiscaljun1_day.in.year", "attribute"),
            identifier: "fiscaldate.fiscaljun1_day.in.year",
            /**
             * Display Form Title: default (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_abE81lMifn6q
             */ Default: newAttribute("fiscaldate.fiscaljun1_abE81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Fiscal Date)
         * Date Attribute ID: fiscaldate.fiscaljun1_day.in.week
         */ DayOfWeekSunSat: {
            ref: idRef("fiscaldate.fiscaljun1_day.in.week", "attribute"),
            identifier: "fiscaldate.fiscaljun1_day.in.week",
            /**
             * Display Form Title: Short (Sun) (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_abK81lMifn6q
             */ Short: newAttribute("fiscaldate.fiscaljun1_abK81lMifn6q"),
            /**
             * Display Form Title: Long (Sunday) (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_abO81lMifn6q
             */ Long: newAttribute("fiscaldate.fiscaljun1_abO81lMifn6q"),
            /**
             * Display Form Title: Number (1=Sunday) (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_abM81lMifn6q
             */ Number: newAttribute("fiscaldate.fiscaljun1_abM81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Fiscal Date)
         * Date Attribute ID: fiscaldate.fiscaljun1_day.in.euweek
         */ DayOfWeekMonSun: {
            ref: idRef("fiscaldate.fiscaljun1_day.in.euweek", "attribute"),
            identifier: "fiscaldate.fiscaljun1_day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_abU81lMifn6q
             */ Short: newAttribute("fiscaldate.fiscaljun1_abU81lMifn6q"),
            /**
             * Display Form Title: Long (Monday) (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_abY81lMifn6q
             */ Long: newAttribute("fiscaldate.fiscaljun1_abY81lMifn6q"),
            /**
             * Display Form Title: Number (1=Monday) (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_abW81lMifn6q
             */ Number: newAttribute("fiscaldate.fiscaljun1_abW81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Quarter (Fiscal Date)
         * Date Attribute ID: fiscaldate.fiscaljun1_day.in.quarter
         */ DayOfQuarter: {
            ref: idRef("fiscaldate.fiscaljun1_day.in.quarter", "attribute"),
            identifier: "fiscaldate.fiscaljun1_day.in.quarter",
            /**
             * Display Form Title: default (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_ab481lMifn6q
             */ Default: newAttribute("fiscaldate.fiscaljun1_ab481lMifn6q"),
        },
        /**
         * Date Attribute: Day of Month (Fiscal Date)
         * Date Attribute ID: fiscaldate.fiscaljun1_day.in.month
         */ DayOfMonth: {
            ref: idRef("fiscaldate.fiscaljun1_day.in.month", "attribute"),
            identifier: "fiscaldate.fiscaljun1_day.in.month",
            /**
             * Display Form Title: default (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_aca81lMifn6q
             */ Default: newAttribute("fiscaldate.fiscaljun1_aca81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter/Year (Fiscal Date)
         * Date Attribute ID: fiscaldate.fiscaljun1_quarter
         */ QuarterYear: {
            ref: idRef("fiscaldate.fiscaljun1_quarter", "attribute"),
            identifier: "fiscaldate.fiscaljun1_quarter",
            /**
             * Display Form Title: US Short (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_aci81lMifn6q
             */ USShort: newAttribute("fiscaldate.fiscaljun1_aci81lMifn6q"),
        },
        /**
         * Date Attribute: Month/Year (Fiscal Date)
         * Date Attribute ID: fiscaldate.fiscaljun1_month
         */ MonthYear: {
            ref: idRef("fiscaldate.fiscaljun1_month", "attribute"),
            identifier: "fiscaldate.fiscaljun1_month",
            /**
             * Display Form Title: Short (Jan 2010) (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_act81lMifn6q
             */ Short: newAttribute("fiscaldate.fiscaljun1_act81lMifn6q"),
            /**
             * Display Form Title: Long (January 2010) (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_acx81lMifn6q
             */ Long: newAttribute("fiscaldate.fiscaljun1_acx81lMifn6q"),
            /**
             * Display Form Title: Number (1/2010) (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_acv81lMifn6q
             */ Number: newAttribute("fiscaldate.fiscaljun1_acv81lMifn6q"),
        },
        /**
         * Date Attribute: Date (Fiscal Date)
         * Date Attribute ID: fiscaldate.fiscaljun1_date
         */ Date: {
            ref: idRef("fiscaldate.fiscaljun1_date", "attribute"),
            identifier: "fiscaldate.fiscaljun1_date",
            /**
             * Display Form Title: mm/dd/yyyy (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_date.mmddyyyy
             */ MmDdYyyy: newAttribute("fiscaldate.fiscaljun1_date.mmddyyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_date.yyyymmdd
             */ YyyyMmDd: newAttribute("fiscaldate.fiscaljun1_date.yyyymmdd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_date.mdyy
             */ MDYy: newAttribute("fiscaldate.fiscaljun1_date.mdyy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_date.long
             */ Long: newAttribute("fiscaldate.fiscaljun1_date.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_date.ddmmyyyy
             */ DdMmYyyy: newAttribute("fiscaldate.fiscaljun1_date.ddmmyyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Fiscal Date)
             * Display Form ID: fiscaldate.fiscaljun1_date.eddmmyyyy
             */ DdMmYyyy_1: newAttribute("fiscaldate.fiscaljun1_date.eddmmyyyy"),
        },
    },
    /**
     * Date Data Set Title: Date (Date 1)
     * Date Data Set ID: date_1.dataset.dt
     */ Date1: {
        ref: idRef("date_1.dataset.dt", "dataSet"),
        identifier: "date_1.dataset.dt",
        /**
         * Date Attribute: Year (Date 1)
         * Date Attribute ID: date_1.year
         */ Year: {
            ref: idRef("date_1.year", "attribute"),
            identifier: "date_1.year",
            /**
             * Display Form Title: Year (Date 1)
             * Display Form ID: date_1.aag81lMifn6q
             */ Default: newAttribute("date_1.aag81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter (Date 1)
         * Date Attribute ID: date_1.quarter.in.year
         */ Quarter: {
            ref: idRef("date_1.quarter.in.year", "attribute"),
            identifier: "date_1.quarter.in.year",
            /**
             * Display Form Title: default (Date 1)
             * Display Form ID: date_1.aam81lMifn6q
             */ Default: newAttribute("date_1.aam81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Date 1)
         * Date Attribute ID: date_1.week
         */ WeekSunSatYear: {
            ref: idRef("date_1.week", "attribute"),
            identifier: "date_1.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date 1)
             * Display Form ID: date_1.aaA81lMifn6q
             */ WeekNrYear: newAttribute("date_1.aaA81lMifn6q"),
            /**
             * Display Form Title: Week Starting (Date 1)
             * Display Form ID: date_1.aaw81lMifn6q
             */ WeekStarting: newAttribute("date_1.aaw81lMifn6q"),
            /**
             * Display Form Title: From - To (Date 1)
             * Display Form ID: date_1.aau81lMifn6q
             */ FromTo: newAttribute("date_1.aau81lMifn6q"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Date 1)
             * Display Form ID: date_1.aay81lMifn6q
             */ WeekNrYear_1: newAttribute("date_1.aay81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Date 1)
             * Display Form ID: date_1.aaC81lMifn6q
             */ WkQtrYear: newAttribute("date_1.aaC81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Date 1)
             * Display Form ID: date_1.aas81lMifn6q
             */ WkQtrYear_1: newAttribute("date_1.aas81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Date 1)
         * Date Attribute ID: date_1.week.in.year
         */ WeekSunSat: {
            ref: idRef("date_1.week.in.year", "attribute"),
            identifier: "date_1.week.in.year",
            /**
             * Display Form Title: Number US (Date 1)
             * Display Form ID: date_1.aaI81lMifn6q
             */ NumberUS: newAttribute("date_1.aaI81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Date 1)
         * Date Attribute ID: date_1.week.in.quarter
         */ WeekSunSatOfQtr: {
            ref: idRef("date_1.week.in.quarter", "attribute"),
            identifier: "date_1.week.in.quarter",
            /**
             * Display Form Title: Number US (Date 1)
             * Display Form ID: date_1.aaO81lMifn6q
             */ NumberUS: newAttribute("date_1.aaO81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Date 1)
         * Date Attribute ID: date_1.euweek
         */ WeekMonSunYear: {
            ref: idRef("date_1.euweek", "attribute"),
            identifier: "date_1.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date 1)
             * Display Form ID: date_1.aa281lMifn6q
             */ WeekNrYear: newAttribute("date_1.aa281lMifn6q"),
            /**
             * Display Form Title: Week Starting (Date 1)
             * Display Form ID: date_1.aaY81lMifn6q
             */ WeekStarting: newAttribute("date_1.aaY81lMifn6q"),
            /**
             * Display Form Title: From - To (Date 1)
             * Display Form ID: date_1.aaW81lMifn6q
             */ FromTo: newAttribute("date_1.aaW81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Date 1)
         * Date Attribute ID: date_1.euweek.in.year
         */ WeekMonSun: {
            ref: idRef("date_1.euweek.in.year", "attribute"),
            identifier: "date_1.euweek.in.year",
            /**
             * Display Form Title: Number EU (Date 1)
             * Display Form ID: date_1.aba81lMifn6q
             */ NumberEU: newAttribute("date_1.aba81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Date 1)
         * Date Attribute ID: date_1.euweek.in.quarter
         */ WeekMonSunOfQtr: {
            ref: idRef("date_1.euweek.in.quarter", "attribute"),
            identifier: "date_1.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Date 1)
             * Display Form ID: date_1.abg81lMifn6q
             */ NumberEU: newAttribute("date_1.abg81lMifn6q"),
        },
        /**
         * Date Attribute: Month (Date 1)
         * Date Attribute ID: date_1.month.in.year
         */ Month: {
            ref: idRef("date_1.month.in.year", "attribute"),
            identifier: "date_1.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Date 1)
             * Display Form ID: date_1.abm81lMifn6q
             */ Short: newAttribute("date_1.abm81lMifn6q"),
            /**
             * Display Form Title: Long (January) (Date 1)
             * Display Form ID: date_1.abs81lMifn6q
             */ Long: newAttribute("date_1.abs81lMifn6q"),
            /**
             * Display Form Title: Number (M1) (Date 1)
             * Display Form ID: date_1.abq81lMifn6q
             */ Number: newAttribute("date_1.abq81lMifn6q"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Date 1)
             * Display Form ID: date_1.abo81lMifn6q
             */ MQ: newAttribute("date_1.abo81lMifn6q"),
        },
        /**
         * Date Attribute: Month of Quarter (Date 1)
         * Date Attribute ID: date_1.month.in.quarter
         */ MonthOfQuarter: {
            ref: idRef("date_1.month.in.quarter", "attribute"),
            identifier: "date_1.month.in.quarter",
            /**
             * Display Form Title: Number (Date 1)
             * Display Form ID: date_1.aby81lMifn6q
             */ Number: newAttribute("date_1.aby81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Year (Date 1)
         * Date Attribute ID: date_1.day.in.year
         */ DayOfYear: {
            ref: idRef("date_1.day.in.year", "attribute"),
            identifier: "date_1.day.in.year",
            /**
             * Display Form Title: default (Date 1)
             * Display Form ID: date_1.abE81lMifn6q
             */ Default: newAttribute("date_1.abE81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Date 1)
         * Date Attribute ID: date_1.day.in.week
         */ DayOfWeekSunSat: {
            ref: idRef("date_1.day.in.week", "attribute"),
            identifier: "date_1.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Date 1)
             * Display Form ID: date_1.abK81lMifn6q
             */ Short: newAttribute("date_1.abK81lMifn6q"),
            /**
             * Display Form Title: Long (Sunday) (Date 1)
             * Display Form ID: date_1.abO81lMifn6q
             */ Long: newAttribute("date_1.abO81lMifn6q"),
            /**
             * Display Form Title: Number (1=Sunday) (Date 1)
             * Display Form ID: date_1.abM81lMifn6q
             */ Number: newAttribute("date_1.abM81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Date 1)
         * Date Attribute ID: date_1.day.in.euweek
         */ DayOfWeekMonSun: {
            ref: idRef("date_1.day.in.euweek", "attribute"),
            identifier: "date_1.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Date 1)
             * Display Form ID: date_1.abU81lMifn6q
             */ Short: newAttribute("date_1.abU81lMifn6q"),
            /**
             * Display Form Title: Long (Monday) (Date 1)
             * Display Form ID: date_1.abY81lMifn6q
             */ Long: newAttribute("date_1.abY81lMifn6q"),
            /**
             * Display Form Title: Number (1=Monday) (Date 1)
             * Display Form ID: date_1.abW81lMifn6q
             */ Number: newAttribute("date_1.abW81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Quarter (Date 1)
         * Date Attribute ID: date_1.day.in.quarter
         */ DayOfQuarter: {
            ref: idRef("date_1.day.in.quarter", "attribute"),
            identifier: "date_1.day.in.quarter",
            /**
             * Display Form Title: default (Date 1)
             * Display Form ID: date_1.ab481lMifn6q
             */ Default: newAttribute("date_1.ab481lMifn6q"),
        },
        /**
         * Date Attribute: Day of Month (Date 1)
         * Date Attribute ID: date_1.day.in.month
         */ DayOfMonth: {
            ref: idRef("date_1.day.in.month", "attribute"),
            identifier: "date_1.day.in.month",
            /**
             * Display Form Title: default (Date 1)
             * Display Form ID: date_1.aca81lMifn6q
             */ Default: newAttribute("date_1.aca81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter/Year (Date 1)
         * Date Attribute ID: date_1.quarter
         */ QuarterYear: {
            ref: idRef("date_1.quarter", "attribute"),
            identifier: "date_1.quarter",
            /**
             * Display Form Title: US Short (Date 1)
             * Display Form ID: date_1.aci81lMifn6q
             */ USShort: newAttribute("date_1.aci81lMifn6q"),
        },
        /**
         * Date Attribute: Month/Year (Date 1)
         * Date Attribute ID: date_1.month
         */ MonthYear: {
            ref: idRef("date_1.month", "attribute"),
            identifier: "date_1.month",
            /**
             * Display Form Title: Short (Jan 2010) (Date 1)
             * Display Form ID: date_1.act81lMifn6q
             */ Short: newAttribute("date_1.act81lMifn6q"),
            /**
             * Display Form Title: Long (January 2010) (Date 1)
             * Display Form ID: date_1.acx81lMifn6q
             */ Long: newAttribute("date_1.acx81lMifn6q"),
            /**
             * Display Form Title: Number (1/2010) (Date 1)
             * Display Form ID: date_1.acv81lMifn6q
             */ Number: newAttribute("date_1.acv81lMifn6q"),
        },
        /**
         * Date Attribute: Date (Date 1)
         * Date Attribute ID: date_1.date
         */ Date: {
            ref: idRef("date_1.date", "attribute"),
            identifier: "date_1.date",
            /**
             * Display Form Title: mm/dd/yyyy (Date 1)
             * Display Form ID: date_1.date.mmddyyyy
             */ MmDdYyyy: newAttribute("date_1.date.mmddyyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Date 1)
             * Display Form ID: date_1.date.yyyymmdd
             */ YyyyMmDd: newAttribute("date_1.date.yyyymmdd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Date 1)
             * Display Form ID: date_1.date.mdyy
             */ MDYy: newAttribute("date_1.date.mdyy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Date 1)
             * Display Form ID: date_1.date.long
             */ Long: newAttribute("date_1.date.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Date 1)
             * Display Form ID: date_1.date.ddmmyyyy
             */ DdMmYyyy: newAttribute("date_1.date.ddmmyyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Date 1)
             * Display Form ID: date_1.date.eddmmyyyy
             */ DdMmYyyy_1: newAttribute("date_1.date.eddmmyyyy"),
        },
    },
    /**
     * Date Data Set Title: Date (Date 2)
     * Date Data Set ID: date_2.dataset.dt
     */ Date2: {
        ref: idRef("date_2.dataset.dt", "dataSet"),
        identifier: "date_2.dataset.dt",
        /**
         * Date Attribute: Year (Date 2)
         * Date Attribute ID: date_2.year
         */ Year: {
            ref: idRef("date_2.year", "attribute"),
            identifier: "date_2.year",
            /**
             * Display Form Title: Year (Date 2)
             * Display Form ID: date_2.aag81lMifn6q
             */ Default: newAttribute("date_2.aag81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter (Date 2)
         * Date Attribute ID: date_2.quarter.in.year
         */ Quarter: {
            ref: idRef("date_2.quarter.in.year", "attribute"),
            identifier: "date_2.quarter.in.year",
            /**
             * Display Form Title: default (Date 2)
             * Display Form ID: date_2.aam81lMifn6q
             */ Default: newAttribute("date_2.aam81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Date 2)
         * Date Attribute ID: date_2.week
         */ WeekSunSatYear: {
            ref: idRef("date_2.week", "attribute"),
            identifier: "date_2.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date 2)
             * Display Form ID: date_2.aaA81lMifn6q
             */ WeekNrYear: newAttribute("date_2.aaA81lMifn6q"),
            /**
             * Display Form Title: Week Starting (Date 2)
             * Display Form ID: date_2.aaw81lMifn6q
             */ WeekStarting: newAttribute("date_2.aaw81lMifn6q"),
            /**
             * Display Form Title: From - To (Date 2)
             * Display Form ID: date_2.aau81lMifn6q
             */ FromTo: newAttribute("date_2.aau81lMifn6q"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Date 2)
             * Display Form ID: date_2.aay81lMifn6q
             */ WeekNrYear_1: newAttribute("date_2.aay81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Date 2)
             * Display Form ID: date_2.aaC81lMifn6q
             */ WkQtrYear: newAttribute("date_2.aaC81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Date 2)
             * Display Form ID: date_2.aas81lMifn6q
             */ WkQtrYear_1: newAttribute("date_2.aas81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Date 2)
         * Date Attribute ID: date_2.week.in.year
         */ WeekSunSat: {
            ref: idRef("date_2.week.in.year", "attribute"),
            identifier: "date_2.week.in.year",
            /**
             * Display Form Title: Number US (Date 2)
             * Display Form ID: date_2.aaI81lMifn6q
             */ NumberUS: newAttribute("date_2.aaI81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Date 2)
         * Date Attribute ID: date_2.week.in.quarter
         */ WeekSunSatOfQtr: {
            ref: idRef("date_2.week.in.quarter", "attribute"),
            identifier: "date_2.week.in.quarter",
            /**
             * Display Form Title: Number US (Date 2)
             * Display Form ID: date_2.aaO81lMifn6q
             */ NumberUS: newAttribute("date_2.aaO81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Date 2)
         * Date Attribute ID: date_2.euweek
         */ WeekMonSunYear: {
            ref: idRef("date_2.euweek", "attribute"),
            identifier: "date_2.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date 2)
             * Display Form ID: date_2.aa281lMifn6q
             */ WeekNrYear: newAttribute("date_2.aa281lMifn6q"),
            /**
             * Display Form Title: Week Starting (Date 2)
             * Display Form ID: date_2.aaY81lMifn6q
             */ WeekStarting: newAttribute("date_2.aaY81lMifn6q"),
            /**
             * Display Form Title: From - To (Date 2)
             * Display Form ID: date_2.aaW81lMifn6q
             */ FromTo: newAttribute("date_2.aaW81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Date 2)
         * Date Attribute ID: date_2.euweek.in.year
         */ WeekMonSun: {
            ref: idRef("date_2.euweek.in.year", "attribute"),
            identifier: "date_2.euweek.in.year",
            /**
             * Display Form Title: Number EU (Date 2)
             * Display Form ID: date_2.aba81lMifn6q
             */ NumberEU: newAttribute("date_2.aba81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Date 2)
         * Date Attribute ID: date_2.euweek.in.quarter
         */ WeekMonSunOfQtr: {
            ref: idRef("date_2.euweek.in.quarter", "attribute"),
            identifier: "date_2.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Date 2)
             * Display Form ID: date_2.abg81lMifn6q
             */ NumberEU: newAttribute("date_2.abg81lMifn6q"),
        },
        /**
         * Date Attribute: Month (Date 2)
         * Date Attribute ID: date_2.month.in.year
         */ Month: {
            ref: idRef("date_2.month.in.year", "attribute"),
            identifier: "date_2.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Date 2)
             * Display Form ID: date_2.abm81lMifn6q
             */ Short: newAttribute("date_2.abm81lMifn6q"),
            /**
             * Display Form Title: Long (January) (Date 2)
             * Display Form ID: date_2.abs81lMifn6q
             */ Long: newAttribute("date_2.abs81lMifn6q"),
            /**
             * Display Form Title: Number (M1) (Date 2)
             * Display Form ID: date_2.abq81lMifn6q
             */ Number: newAttribute("date_2.abq81lMifn6q"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Date 2)
             * Display Form ID: date_2.abo81lMifn6q
             */ MQ: newAttribute("date_2.abo81lMifn6q"),
        },
        /**
         * Date Attribute: Month of Quarter (Date 2)
         * Date Attribute ID: date_2.month.in.quarter
         */ MonthOfQuarter: {
            ref: idRef("date_2.month.in.quarter", "attribute"),
            identifier: "date_2.month.in.quarter",
            /**
             * Display Form Title: Number (Date 2)
             * Display Form ID: date_2.aby81lMifn6q
             */ Number: newAttribute("date_2.aby81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Year (Date 2)
         * Date Attribute ID: date_2.day.in.year
         */ DayOfYear: {
            ref: idRef("date_2.day.in.year", "attribute"),
            identifier: "date_2.day.in.year",
            /**
             * Display Form Title: default (Date 2)
             * Display Form ID: date_2.abE81lMifn6q
             */ Default: newAttribute("date_2.abE81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Date 2)
         * Date Attribute ID: date_2.day.in.week
         */ DayOfWeekSunSat: {
            ref: idRef("date_2.day.in.week", "attribute"),
            identifier: "date_2.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Date 2)
             * Display Form ID: date_2.abK81lMifn6q
             */ Short: newAttribute("date_2.abK81lMifn6q"),
            /**
             * Display Form Title: Long (Sunday) (Date 2)
             * Display Form ID: date_2.abO81lMifn6q
             */ Long: newAttribute("date_2.abO81lMifn6q"),
            /**
             * Display Form Title: Number (1=Sunday) (Date 2)
             * Display Form ID: date_2.abM81lMifn6q
             */ Number: newAttribute("date_2.abM81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Date 2)
         * Date Attribute ID: date_2.day.in.euweek
         */ DayOfWeekMonSun: {
            ref: idRef("date_2.day.in.euweek", "attribute"),
            identifier: "date_2.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Date 2)
             * Display Form ID: date_2.abU81lMifn6q
             */ Short: newAttribute("date_2.abU81lMifn6q"),
            /**
             * Display Form Title: Long (Monday) (Date 2)
             * Display Form ID: date_2.abY81lMifn6q
             */ Long: newAttribute("date_2.abY81lMifn6q"),
            /**
             * Display Form Title: Number (1=Monday) (Date 2)
             * Display Form ID: date_2.abW81lMifn6q
             */ Number: newAttribute("date_2.abW81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Quarter (Date 2)
         * Date Attribute ID: date_2.day.in.quarter
         */ DayOfQuarter: {
            ref: idRef("date_2.day.in.quarter", "attribute"),
            identifier: "date_2.day.in.quarter",
            /**
             * Display Form Title: default (Date 2)
             * Display Form ID: date_2.ab481lMifn6q
             */ Default: newAttribute("date_2.ab481lMifn6q"),
        },
        /**
         * Date Attribute: Day of Month (Date 2)
         * Date Attribute ID: date_2.day.in.month
         */ DayOfMonth: {
            ref: idRef("date_2.day.in.month", "attribute"),
            identifier: "date_2.day.in.month",
            /**
             * Display Form Title: default (Date 2)
             * Display Form ID: date_2.aca81lMifn6q
             */ Default: newAttribute("date_2.aca81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter/Year (Date 2)
         * Date Attribute ID: date_2.quarter
         */ QuarterYear: {
            ref: idRef("date_2.quarter", "attribute"),
            identifier: "date_2.quarter",
            /**
             * Display Form Title: US Short (Date 2)
             * Display Form ID: date_2.aci81lMifn6q
             */ USShort: newAttribute("date_2.aci81lMifn6q"),
        },
        /**
         * Date Attribute: Month/Year (Date 2)
         * Date Attribute ID: date_2.month
         */ MonthYear: {
            ref: idRef("date_2.month", "attribute"),
            identifier: "date_2.month",
            /**
             * Display Form Title: Short (Jan 2010) (Date 2)
             * Display Form ID: date_2.act81lMifn6q
             */ Short: newAttribute("date_2.act81lMifn6q"),
            /**
             * Display Form Title: Long (January 2010) (Date 2)
             * Display Form ID: date_2.acx81lMifn6q
             */ Long: newAttribute("date_2.acx81lMifn6q"),
            /**
             * Display Form Title: Number (1/2010) (Date 2)
             * Display Form ID: date_2.acv81lMifn6q
             */ Number: newAttribute("date_2.acv81lMifn6q"),
        },
        /**
         * Date Attribute: Date (Date 2)
         * Date Attribute ID: date_2.date
         */ Date: {
            ref: idRef("date_2.date", "attribute"),
            identifier: "date_2.date",
            /**
             * Display Form Title: mm/dd/yyyy (Date 2)
             * Display Form ID: date_2.date.mmddyyyy
             */ MmDdYyyy: newAttribute("date_2.date.mmddyyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Date 2)
             * Display Form ID: date_2.date.yyyymmdd
             */ YyyyMmDd: newAttribute("date_2.date.yyyymmdd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Date 2)
             * Display Form ID: date_2.date.mdyy
             */ MDYy: newAttribute("date_2.date.mdyy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Date 2)
             * Display Form ID: date_2.date.long
             */ Long: newAttribute("date_2.date.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Date 2)
             * Display Form ID: date_2.date.ddmmyyyy
             */ DdMmYyyy: newAttribute("date_2.date.ddmmyyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Date 2)
             * Display Form ID: date_2.date.eddmmyyyy
             */ DdMmYyyy_1: newAttribute("date_2.date.eddmmyyyy"),
        },
    },
    /**
     * Date Data Set Title: Date (Date 3)
     * Date Data Set ID: date_3.dataset.dt
     */ Date3: {
        ref: idRef("date_3.dataset.dt", "dataSet"),
        identifier: "date_3.dataset.dt",
        /**
         * Date Attribute: Year (Date 3)
         * Date Attribute ID: date_3.year
         */ Year: {
            ref: idRef("date_3.year", "attribute"),
            identifier: "date_3.year",
            /**
             * Display Form Title: Year (Date 3)
             * Display Form ID: date_3.aag81lMifn6q
             */ Default: newAttribute("date_3.aag81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter (Date 3)
         * Date Attribute ID: date_3.quarter.in.year
         */ Quarter: {
            ref: idRef("date_3.quarter.in.year", "attribute"),
            identifier: "date_3.quarter.in.year",
            /**
             * Display Form Title: default (Date 3)
             * Display Form ID: date_3.aam81lMifn6q
             */ Default: newAttribute("date_3.aam81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Date 3)
         * Date Attribute ID: date_3.week
         */ WeekSunSatYear: {
            ref: idRef("date_3.week", "attribute"),
            identifier: "date_3.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date 3)
             * Display Form ID: date_3.aaA81lMifn6q
             */ WeekNrYear: newAttribute("date_3.aaA81lMifn6q"),
            /**
             * Display Form Title: Week Starting (Date 3)
             * Display Form ID: date_3.aaw81lMifn6q
             */ WeekStarting: newAttribute("date_3.aaw81lMifn6q"),
            /**
             * Display Form Title: From - To (Date 3)
             * Display Form ID: date_3.aau81lMifn6q
             */ FromTo: newAttribute("date_3.aau81lMifn6q"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Date 3)
             * Display Form ID: date_3.aay81lMifn6q
             */ WeekNrYear_1: newAttribute("date_3.aay81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Date 3)
             * Display Form ID: date_3.aaC81lMifn6q
             */ WkQtrYear: newAttribute("date_3.aaC81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Date 3)
             * Display Form ID: date_3.aas81lMifn6q
             */ WkQtrYear_1: newAttribute("date_3.aas81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Date 3)
         * Date Attribute ID: date_3.week.in.year
         */ WeekSunSat: {
            ref: idRef("date_3.week.in.year", "attribute"),
            identifier: "date_3.week.in.year",
            /**
             * Display Form Title: Number US (Date 3)
             * Display Form ID: date_3.aaI81lMifn6q
             */ NumberUS: newAttribute("date_3.aaI81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Date 3)
         * Date Attribute ID: date_3.week.in.quarter
         */ WeekSunSatOfQtr: {
            ref: idRef("date_3.week.in.quarter", "attribute"),
            identifier: "date_3.week.in.quarter",
            /**
             * Display Form Title: Number US (Date 3)
             * Display Form ID: date_3.aaO81lMifn6q
             */ NumberUS: newAttribute("date_3.aaO81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Date 3)
         * Date Attribute ID: date_3.euweek
         */ WeekMonSunYear: {
            ref: idRef("date_3.euweek", "attribute"),
            identifier: "date_3.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date 3)
             * Display Form ID: date_3.aa281lMifn6q
             */ WeekNrYear: newAttribute("date_3.aa281lMifn6q"),
            /**
             * Display Form Title: Week Starting (Date 3)
             * Display Form ID: date_3.aaY81lMifn6q
             */ WeekStarting: newAttribute("date_3.aaY81lMifn6q"),
            /**
             * Display Form Title: From - To (Date 3)
             * Display Form ID: date_3.aaW81lMifn6q
             */ FromTo: newAttribute("date_3.aaW81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Date 3)
         * Date Attribute ID: date_3.euweek.in.year
         */ WeekMonSun: {
            ref: idRef("date_3.euweek.in.year", "attribute"),
            identifier: "date_3.euweek.in.year",
            /**
             * Display Form Title: Number EU (Date 3)
             * Display Form ID: date_3.aba81lMifn6q
             */ NumberEU: newAttribute("date_3.aba81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Date 3)
         * Date Attribute ID: date_3.euweek.in.quarter
         */ WeekMonSunOfQtr: {
            ref: idRef("date_3.euweek.in.quarter", "attribute"),
            identifier: "date_3.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Date 3)
             * Display Form ID: date_3.abg81lMifn6q
             */ NumberEU: newAttribute("date_3.abg81lMifn6q"),
        },
        /**
         * Date Attribute: Month (Date 3)
         * Date Attribute ID: date_3.month.in.year
         */ Month: {
            ref: idRef("date_3.month.in.year", "attribute"),
            identifier: "date_3.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Date 3)
             * Display Form ID: date_3.abm81lMifn6q
             */ Short: newAttribute("date_3.abm81lMifn6q"),
            /**
             * Display Form Title: Long (January) (Date 3)
             * Display Form ID: date_3.abs81lMifn6q
             */ Long: newAttribute("date_3.abs81lMifn6q"),
            /**
             * Display Form Title: Number (M1) (Date 3)
             * Display Form ID: date_3.abq81lMifn6q
             */ Number: newAttribute("date_3.abq81lMifn6q"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Date 3)
             * Display Form ID: date_3.abo81lMifn6q
             */ MQ: newAttribute("date_3.abo81lMifn6q"),
        },
        /**
         * Date Attribute: Month of Quarter (Date 3)
         * Date Attribute ID: date_3.month.in.quarter
         */ MonthOfQuarter: {
            ref: idRef("date_3.month.in.quarter", "attribute"),
            identifier: "date_3.month.in.quarter",
            /**
             * Display Form Title: Number (Date 3)
             * Display Form ID: date_3.aby81lMifn6q
             */ Number: newAttribute("date_3.aby81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Year (Date 3)
         * Date Attribute ID: date_3.day.in.year
         */ DayOfYear: {
            ref: idRef("date_3.day.in.year", "attribute"),
            identifier: "date_3.day.in.year",
            /**
             * Display Form Title: default (Date 3)
             * Display Form ID: date_3.abE81lMifn6q
             */ Default: newAttribute("date_3.abE81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Date 3)
         * Date Attribute ID: date_3.day.in.week
         */ DayOfWeekSunSat: {
            ref: idRef("date_3.day.in.week", "attribute"),
            identifier: "date_3.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Date 3)
             * Display Form ID: date_3.abK81lMifn6q
             */ Short: newAttribute("date_3.abK81lMifn6q"),
            /**
             * Display Form Title: Long (Sunday) (Date 3)
             * Display Form ID: date_3.abO81lMifn6q
             */ Long: newAttribute("date_3.abO81lMifn6q"),
            /**
             * Display Form Title: Number (1=Sunday) (Date 3)
             * Display Form ID: date_3.abM81lMifn6q
             */ Number: newAttribute("date_3.abM81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Date 3)
         * Date Attribute ID: date_3.day.in.euweek
         */ DayOfWeekMonSun: {
            ref: idRef("date_3.day.in.euweek", "attribute"),
            identifier: "date_3.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Date 3)
             * Display Form ID: date_3.abU81lMifn6q
             */ Short: newAttribute("date_3.abU81lMifn6q"),
            /**
             * Display Form Title: Long (Monday) (Date 3)
             * Display Form ID: date_3.abY81lMifn6q
             */ Long: newAttribute("date_3.abY81lMifn6q"),
            /**
             * Display Form Title: Number (1=Monday) (Date 3)
             * Display Form ID: date_3.abW81lMifn6q
             */ Number: newAttribute("date_3.abW81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Quarter (Date 3)
         * Date Attribute ID: date_3.day.in.quarter
         */ DayOfQuarter: {
            ref: idRef("date_3.day.in.quarter", "attribute"),
            identifier: "date_3.day.in.quarter",
            /**
             * Display Form Title: default (Date 3)
             * Display Form ID: date_3.ab481lMifn6q
             */ Default: newAttribute("date_3.ab481lMifn6q"),
        },
        /**
         * Date Attribute: Day of Month (Date 3)
         * Date Attribute ID: date_3.day.in.month
         */ DayOfMonth: {
            ref: idRef("date_3.day.in.month", "attribute"),
            identifier: "date_3.day.in.month",
            /**
             * Display Form Title: default (Date 3)
             * Display Form ID: date_3.aca81lMifn6q
             */ Default: newAttribute("date_3.aca81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter/Year (Date 3)
         * Date Attribute ID: date_3.quarter
         */ QuarterYear: {
            ref: idRef("date_3.quarter", "attribute"),
            identifier: "date_3.quarter",
            /**
             * Display Form Title: US Short (Date 3)
             * Display Form ID: date_3.aci81lMifn6q
             */ USShort: newAttribute("date_3.aci81lMifn6q"),
        },
        /**
         * Date Attribute: Month/Year (Date 3)
         * Date Attribute ID: date_3.month
         */ MonthYear: {
            ref: idRef("date_3.month", "attribute"),
            identifier: "date_3.month",
            /**
             * Display Form Title: Short (Jan 2010) (Date 3)
             * Display Form ID: date_3.act81lMifn6q
             */ Short: newAttribute("date_3.act81lMifn6q"),
            /**
             * Display Form Title: Long (January 2010) (Date 3)
             * Display Form ID: date_3.acx81lMifn6q
             */ Long: newAttribute("date_3.acx81lMifn6q"),
            /**
             * Display Form Title: Number (1/2010) (Date 3)
             * Display Form ID: date_3.acv81lMifn6q
             */ Number: newAttribute("date_3.acv81lMifn6q"),
        },
        /**
         * Date Attribute: Date (Date 3)
         * Date Attribute ID: date_3.date
         */ Date: {
            ref: idRef("date_3.date", "attribute"),
            identifier: "date_3.date",
            /**
             * Display Form Title: mm/dd/yyyy (Date 3)
             * Display Form ID: date_3.date.mmddyyyy
             */ MmDdYyyy: newAttribute("date_3.date.mmddyyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Date 3)
             * Display Form ID: date_3.date.yyyymmdd
             */ YyyyMmDd: newAttribute("date_3.date.yyyymmdd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Date 3)
             * Display Form ID: date_3.date.mdyy
             */ MDYy: newAttribute("date_3.date.mdyy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Date 3)
             * Display Form ID: date_3.date.long
             */ Long: newAttribute("date_3.date.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Date 3)
             * Display Form ID: date_3.date.ddmmyyyy
             */ DdMmYyyy: newAttribute("date_3.date.ddmmyyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Date 3)
             * Display Form ID: date_3.date.eddmmyyyy
             */ DdMmYyyy_1: newAttribute("date_3.date.eddmmyyyy"),
        },
    },
    /**
     * Date Data Set Title: Date (Date 4)
     * Date Data Set ID: date_4.dataset.dt
     */ Date4: {
        ref: idRef("date_4.dataset.dt", "dataSet"),
        identifier: "date_4.dataset.dt",
        /**
         * Date Attribute: Year (Date 4)
         * Date Attribute ID: date_4.year
         */ Year: {
            ref: idRef("date_4.year", "attribute"),
            identifier: "date_4.year",
            /**
             * Display Form Title: Year (Date 4)
             * Display Form ID: date_4.aag81lMifn6q
             */ Default: newAttribute("date_4.aag81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter (Date 4)
         * Date Attribute ID: date_4.quarter.in.year
         */ Quarter: {
            ref: idRef("date_4.quarter.in.year", "attribute"),
            identifier: "date_4.quarter.in.year",
            /**
             * Display Form Title: default (Date 4)
             * Display Form ID: date_4.aam81lMifn6q
             */ Default: newAttribute("date_4.aam81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Date 4)
         * Date Attribute ID: date_4.week
         */ WeekSunSatYear: {
            ref: idRef("date_4.week", "attribute"),
            identifier: "date_4.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date 4)
             * Display Form ID: date_4.aaA81lMifn6q
             */ WeekNrYear: newAttribute("date_4.aaA81lMifn6q"),
            /**
             * Display Form Title: Week Starting (Date 4)
             * Display Form ID: date_4.aaw81lMifn6q
             */ WeekStarting: newAttribute("date_4.aaw81lMifn6q"),
            /**
             * Display Form Title: From - To (Date 4)
             * Display Form ID: date_4.aau81lMifn6q
             */ FromTo: newAttribute("date_4.aau81lMifn6q"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Date 4)
             * Display Form ID: date_4.aay81lMifn6q
             */ WeekNrYear_1: newAttribute("date_4.aay81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Date 4)
             * Display Form ID: date_4.aaC81lMifn6q
             */ WkQtrYear: newAttribute("date_4.aaC81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Date 4)
             * Display Form ID: date_4.aas81lMifn6q
             */ WkQtrYear_1: newAttribute("date_4.aas81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Date 4)
         * Date Attribute ID: date_4.week.in.year
         */ WeekSunSat: {
            ref: idRef("date_4.week.in.year", "attribute"),
            identifier: "date_4.week.in.year",
            /**
             * Display Form Title: Number US (Date 4)
             * Display Form ID: date_4.aaI81lMifn6q
             */ NumberUS: newAttribute("date_4.aaI81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Date 4)
         * Date Attribute ID: date_4.week.in.quarter
         */ WeekSunSatOfQtr: {
            ref: idRef("date_4.week.in.quarter", "attribute"),
            identifier: "date_4.week.in.quarter",
            /**
             * Display Form Title: Number US (Date 4)
             * Display Form ID: date_4.aaO81lMifn6q
             */ NumberUS: newAttribute("date_4.aaO81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Date 4)
         * Date Attribute ID: date_4.euweek
         */ WeekMonSunYear: {
            ref: idRef("date_4.euweek", "attribute"),
            identifier: "date_4.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date 4)
             * Display Form ID: date_4.aa281lMifn6q
             */ WeekNrYear: newAttribute("date_4.aa281lMifn6q"),
            /**
             * Display Form Title: Week Starting (Date 4)
             * Display Form ID: date_4.aaY81lMifn6q
             */ WeekStarting: newAttribute("date_4.aaY81lMifn6q"),
            /**
             * Display Form Title: From - To (Date 4)
             * Display Form ID: date_4.aaW81lMifn6q
             */ FromTo: newAttribute("date_4.aaW81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Date 4)
         * Date Attribute ID: date_4.euweek.in.year
         */ WeekMonSun: {
            ref: idRef("date_4.euweek.in.year", "attribute"),
            identifier: "date_4.euweek.in.year",
            /**
             * Display Form Title: Number EU (Date 4)
             * Display Form ID: date_4.aba81lMifn6q
             */ NumberEU: newAttribute("date_4.aba81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Date 4)
         * Date Attribute ID: date_4.euweek.in.quarter
         */ WeekMonSunOfQtr: {
            ref: idRef("date_4.euweek.in.quarter", "attribute"),
            identifier: "date_4.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Date 4)
             * Display Form ID: date_4.abg81lMifn6q
             */ NumberEU: newAttribute("date_4.abg81lMifn6q"),
        },
        /**
         * Date Attribute: Month (Date 4)
         * Date Attribute ID: date_4.month.in.year
         */ Month: {
            ref: idRef("date_4.month.in.year", "attribute"),
            identifier: "date_4.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Date 4)
             * Display Form ID: date_4.abm81lMifn6q
             */ Short: newAttribute("date_4.abm81lMifn6q"),
            /**
             * Display Form Title: Long (January) (Date 4)
             * Display Form ID: date_4.abs81lMifn6q
             */ Long: newAttribute("date_4.abs81lMifn6q"),
            /**
             * Display Form Title: Number (M1) (Date 4)
             * Display Form ID: date_4.abq81lMifn6q
             */ Number: newAttribute("date_4.abq81lMifn6q"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Date 4)
             * Display Form ID: date_4.abo81lMifn6q
             */ MQ: newAttribute("date_4.abo81lMifn6q"),
        },
        /**
         * Date Attribute: Month of Quarter (Date 4)
         * Date Attribute ID: date_4.month.in.quarter
         */ MonthOfQuarter: {
            ref: idRef("date_4.month.in.quarter", "attribute"),
            identifier: "date_4.month.in.quarter",
            /**
             * Display Form Title: Number (Date 4)
             * Display Form ID: date_4.aby81lMifn6q
             */ Number: newAttribute("date_4.aby81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Year (Date 4)
         * Date Attribute ID: date_4.day.in.year
         */ DayOfYear: {
            ref: idRef("date_4.day.in.year", "attribute"),
            identifier: "date_4.day.in.year",
            /**
             * Display Form Title: default (Date 4)
             * Display Form ID: date_4.abE81lMifn6q
             */ Default: newAttribute("date_4.abE81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Date 4)
         * Date Attribute ID: date_4.day.in.week
         */ DayOfWeekSunSat: {
            ref: idRef("date_4.day.in.week", "attribute"),
            identifier: "date_4.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Date 4)
             * Display Form ID: date_4.abK81lMifn6q
             */ Short: newAttribute("date_4.abK81lMifn6q"),
            /**
             * Display Form Title: Long (Sunday) (Date 4)
             * Display Form ID: date_4.abO81lMifn6q
             */ Long: newAttribute("date_4.abO81lMifn6q"),
            /**
             * Display Form Title: Number (1=Sunday) (Date 4)
             * Display Form ID: date_4.abM81lMifn6q
             */ Number: newAttribute("date_4.abM81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Date 4)
         * Date Attribute ID: date_4.day.in.euweek
         */ DayOfWeekMonSun: {
            ref: idRef("date_4.day.in.euweek", "attribute"),
            identifier: "date_4.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Date 4)
             * Display Form ID: date_4.abU81lMifn6q
             */ Short: newAttribute("date_4.abU81lMifn6q"),
            /**
             * Display Form Title: Long (Monday) (Date 4)
             * Display Form ID: date_4.abY81lMifn6q
             */ Long: newAttribute("date_4.abY81lMifn6q"),
            /**
             * Display Form Title: Number (1=Monday) (Date 4)
             * Display Form ID: date_4.abW81lMifn6q
             */ Number: newAttribute("date_4.abW81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Quarter (Date 4)
         * Date Attribute ID: date_4.day.in.quarter
         */ DayOfQuarter: {
            ref: idRef("date_4.day.in.quarter", "attribute"),
            identifier: "date_4.day.in.quarter",
            /**
             * Display Form Title: default (Date 4)
             * Display Form ID: date_4.ab481lMifn6q
             */ Default: newAttribute("date_4.ab481lMifn6q"),
        },
        /**
         * Date Attribute: Day of Month (Date 4)
         * Date Attribute ID: date_4.day.in.month
         */ DayOfMonth: {
            ref: idRef("date_4.day.in.month", "attribute"),
            identifier: "date_4.day.in.month",
            /**
             * Display Form Title: default (Date 4)
             * Display Form ID: date_4.aca81lMifn6q
             */ Default: newAttribute("date_4.aca81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter/Year (Date 4)
         * Date Attribute ID: date_4.quarter
         */ QuarterYear: {
            ref: idRef("date_4.quarter", "attribute"),
            identifier: "date_4.quarter",
            /**
             * Display Form Title: US Short (Date 4)
             * Display Form ID: date_4.aci81lMifn6q
             */ USShort: newAttribute("date_4.aci81lMifn6q"),
        },
        /**
         * Date Attribute: Month/Year (Date 4)
         * Date Attribute ID: date_4.month
         */ MonthYear: {
            ref: idRef("date_4.month", "attribute"),
            identifier: "date_4.month",
            /**
             * Display Form Title: Short (Jan 2010) (Date 4)
             * Display Form ID: date_4.act81lMifn6q
             */ Short: newAttribute("date_4.act81lMifn6q"),
            /**
             * Display Form Title: Long (January 2010) (Date 4)
             * Display Form ID: date_4.acx81lMifn6q
             */ Long: newAttribute("date_4.acx81lMifn6q"),
            /**
             * Display Form Title: Number (1/2010) (Date 4)
             * Display Form ID: date_4.acv81lMifn6q
             */ Number: newAttribute("date_4.acv81lMifn6q"),
        },
        /**
         * Date Attribute: Date (Date 4)
         * Date Attribute ID: date_4.date
         */ Date: {
            ref: idRef("date_4.date", "attribute"),
            identifier: "date_4.date",
            /**
             * Display Form Title: mm/dd/yyyy (Date 4)
             * Display Form ID: date_4.date.mmddyyyy
             */ MmDdYyyy: newAttribute("date_4.date.mmddyyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Date 4)
             * Display Form ID: date_4.date.yyyymmdd
             */ YyyyMmDd: newAttribute("date_4.date.yyyymmdd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Date 4)
             * Display Form ID: date_4.date.mdyy
             */ MDYy: newAttribute("date_4.date.mdyy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Date 4)
             * Display Form ID: date_4.date.long
             */ Long: newAttribute("date_4.date.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Date 4)
             * Display Form ID: date_4.date.ddmmyyyy
             */ DdMmYyyy: newAttribute("date_4.date.ddmmyyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Date 4)
             * Display Form ID: date_4.date.eddmmyyyy
             */ DdMmYyyy_1: newAttribute("date_4.date.eddmmyyyy"),
        },
    },
    /**
     * Date Data Set Title: Date (Paydate)
     * Date Data Set ID: paydate.dataset.dt
     */ Paydate: {
        ref: idRef("paydate.dataset.dt", "dataSet"),
        identifier: "paydate.dataset.dt",
        /**
         * Date Attribute: Year (Paydate)
         * Date Attribute ID: paydate.year
         */ Year: {
            ref: idRef("paydate.year", "attribute"),
            identifier: "paydate.year",
            /**
             * Display Form Title: Year (Paydate)
             * Display Form ID: paydate.aag81lMifn6q
             */ Default: newAttribute("paydate.aag81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter (Paydate)
         * Date Attribute ID: paydate.quarter.in.year
         */ Quarter: {
            ref: idRef("paydate.quarter.in.year", "attribute"),
            identifier: "paydate.quarter.in.year",
            /**
             * Display Form Title: default (Paydate)
             * Display Form ID: paydate.aam81lMifn6q
             */ Default: newAttribute("paydate.aam81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Paydate)
         * Date Attribute ID: paydate.week
         */ WeekSunSatYear: {
            ref: idRef("paydate.week", "attribute"),
            identifier: "paydate.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Paydate)
             * Display Form ID: paydate.aaA81lMifn6q
             */ WeekNrYear: newAttribute("paydate.aaA81lMifn6q"),
            /**
             * Display Form Title: Week Starting (Paydate)
             * Display Form ID: paydate.aaw81lMifn6q
             */ WeekStarting: newAttribute("paydate.aaw81lMifn6q"),
            /**
             * Display Form Title: From - To (Paydate)
             * Display Form ID: paydate.aau81lMifn6q
             */ FromTo: newAttribute("paydate.aau81lMifn6q"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Paydate)
             * Display Form ID: paydate.aay81lMifn6q
             */ WeekNrYear_1: newAttribute("paydate.aay81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Paydate)
             * Display Form ID: paydate.aaC81lMifn6q
             */ WkQtrYear: newAttribute("paydate.aaC81lMifn6q"),
            /**
             * Display Form Title: Wk/Qtr/Year (Paydate)
             * Display Form ID: paydate.aas81lMifn6q
             */ WkQtrYear_1: newAttribute("paydate.aas81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Paydate)
         * Date Attribute ID: paydate.week.in.year
         */ WeekSunSat: {
            ref: idRef("paydate.week.in.year", "attribute"),
            identifier: "paydate.week.in.year",
            /**
             * Display Form Title: Number US (Paydate)
             * Display Form ID: paydate.aaI81lMifn6q
             */ NumberUS: newAttribute("paydate.aaI81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Paydate)
         * Date Attribute ID: paydate.week.in.quarter
         */ WeekSunSatOfQtr: {
            ref: idRef("paydate.week.in.quarter", "attribute"),
            identifier: "paydate.week.in.quarter",
            /**
             * Display Form Title: Number US (Paydate)
             * Display Form ID: paydate.aaO81lMifn6q
             */ NumberUS: newAttribute("paydate.aaO81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Paydate)
         * Date Attribute ID: paydate.euweek
         */ WeekMonSunYear: {
            ref: idRef("paydate.euweek", "attribute"),
            identifier: "paydate.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Paydate)
             * Display Form ID: paydate.aa281lMifn6q
             */ WeekNrYear: newAttribute("paydate.aa281lMifn6q"),
            /**
             * Display Form Title: Week Starting (Paydate)
             * Display Form ID: paydate.aaY81lMifn6q
             */ WeekStarting: newAttribute("paydate.aaY81lMifn6q"),
            /**
             * Display Form Title: From - To (Paydate)
             * Display Form ID: paydate.aaW81lMifn6q
             */ FromTo: newAttribute("paydate.aaW81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Paydate)
         * Date Attribute ID: paydate.euweek.in.year
         */ WeekMonSun: {
            ref: idRef("paydate.euweek.in.year", "attribute"),
            identifier: "paydate.euweek.in.year",
            /**
             * Display Form Title: Number EU (Paydate)
             * Display Form ID: paydate.aba81lMifn6q
             */ NumberEU: newAttribute("paydate.aba81lMifn6q"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Paydate)
         * Date Attribute ID: paydate.euweek.in.quarter
         */ WeekMonSunOfQtr: {
            ref: idRef("paydate.euweek.in.quarter", "attribute"),
            identifier: "paydate.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Paydate)
             * Display Form ID: paydate.abg81lMifn6q
             */ NumberEU: newAttribute("paydate.abg81lMifn6q"),
        },
        /**
         * Date Attribute: Month (Paydate)
         * Date Attribute ID: paydate.month.in.year
         */ Month: {
            ref: idRef("paydate.month.in.year", "attribute"),
            identifier: "paydate.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Paydate)
             * Display Form ID: paydate.abm81lMifn6q
             */ Short: newAttribute("paydate.abm81lMifn6q"),
            /**
             * Display Form Title: Long (January) (Paydate)
             * Display Form ID: paydate.abs81lMifn6q
             */ Long: newAttribute("paydate.abs81lMifn6q"),
            /**
             * Display Form Title: Number (M1) (Paydate)
             * Display Form ID: paydate.abq81lMifn6q
             */ Number: newAttribute("paydate.abq81lMifn6q"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Paydate)
             * Display Form ID: paydate.abo81lMifn6q
             */ MQ: newAttribute("paydate.abo81lMifn6q"),
        },
        /**
         * Date Attribute: Month of Quarter (Paydate)
         * Date Attribute ID: paydate.month.in.quarter
         */ MonthOfQuarter: {
            ref: idRef("paydate.month.in.quarter", "attribute"),
            identifier: "paydate.month.in.quarter",
            /**
             * Display Form Title: Number (Paydate)
             * Display Form ID: paydate.aby81lMifn6q
             */ Number: newAttribute("paydate.aby81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Year (Paydate)
         * Date Attribute ID: paydate.day.in.year
         */ DayOfYear: {
            ref: idRef("paydate.day.in.year", "attribute"),
            identifier: "paydate.day.in.year",
            /**
             * Display Form Title: default (Paydate)
             * Display Form ID: paydate.abE81lMifn6q
             */ Default: newAttribute("paydate.abE81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Paydate)
         * Date Attribute ID: paydate.day.in.week
         */ DayOfWeekSunSat: {
            ref: idRef("paydate.day.in.week", "attribute"),
            identifier: "paydate.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Paydate)
             * Display Form ID: paydate.abK81lMifn6q
             */ Short: newAttribute("paydate.abK81lMifn6q"),
            /**
             * Display Form Title: Long (Sunday) (Paydate)
             * Display Form ID: paydate.abO81lMifn6q
             */ Long: newAttribute("paydate.abO81lMifn6q"),
            /**
             * Display Form Title: Number (1=Sunday) (Paydate)
             * Display Form ID: paydate.abM81lMifn6q
             */ Number: newAttribute("paydate.abM81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Paydate)
         * Date Attribute ID: paydate.day.in.euweek
         */ DayOfWeekMonSun: {
            ref: idRef("paydate.day.in.euweek", "attribute"),
            identifier: "paydate.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Paydate)
             * Display Form ID: paydate.abU81lMifn6q
             */ Short: newAttribute("paydate.abU81lMifn6q"),
            /**
             * Display Form Title: Long (Monday) (Paydate)
             * Display Form ID: paydate.abY81lMifn6q
             */ Long: newAttribute("paydate.abY81lMifn6q"),
            /**
             * Display Form Title: Number (1=Monday) (Paydate)
             * Display Form ID: paydate.abW81lMifn6q
             */ Number: newAttribute("paydate.abW81lMifn6q"),
        },
        /**
         * Date Attribute: Day of Quarter (Paydate)
         * Date Attribute ID: paydate.day.in.quarter
         */ DayOfQuarter: {
            ref: idRef("paydate.day.in.quarter", "attribute"),
            identifier: "paydate.day.in.quarter",
            /**
             * Display Form Title: default (Paydate)
             * Display Form ID: paydate.ab481lMifn6q
             */ Default: newAttribute("paydate.ab481lMifn6q"),
        },
        /**
         * Date Attribute: Day of Month (Paydate)
         * Date Attribute ID: paydate.day.in.month
         */ DayOfMonth: {
            ref: idRef("paydate.day.in.month", "attribute"),
            identifier: "paydate.day.in.month",
            /**
             * Display Form Title: default (Paydate)
             * Display Form ID: paydate.aca81lMifn6q
             */ Default: newAttribute("paydate.aca81lMifn6q"),
        },
        /**
         * Date Attribute: Quarter/Year (Paydate)
         * Date Attribute ID: paydate.quarter
         */ QuarterYear: {
            ref: idRef("paydate.quarter", "attribute"),
            identifier: "paydate.quarter",
            /**
             * Display Form Title: US Short (Paydate)
             * Display Form ID: paydate.aci81lMifn6q
             */ USShort: newAttribute("paydate.aci81lMifn6q"),
        },
        /**
         * Date Attribute: Month/Year (Paydate)
         * Date Attribute ID: paydate.month
         */ MonthYear: {
            ref: idRef("paydate.month", "attribute"),
            identifier: "paydate.month",
            /**
             * Display Form Title: Short (Jan 2010) (Paydate)
             * Display Form ID: paydate.act81lMifn6q
             */ Short: newAttribute("paydate.act81lMifn6q"),
            /**
             * Display Form Title: Long (January 2010) (Paydate)
             * Display Form ID: paydate.acx81lMifn6q
             */ Long: newAttribute("paydate.acx81lMifn6q"),
            /**
             * Display Form Title: Number (1/2010) (Paydate)
             * Display Form ID: paydate.acv81lMifn6q
             */ Number: newAttribute("paydate.acv81lMifn6q"),
        },
        /**
         * Date Attribute: Date (Paydate)
         * Date Attribute ID: paydate.date
         */ Date: {
            ref: idRef("paydate.date", "attribute"),
            identifier: "paydate.date",
            /**
             * Display Form Title: mm/dd/yyyy (Paydate)
             * Display Form ID: paydate.date.mmddyyyy
             */ MmDdYyyy: newAttribute("paydate.date.mmddyyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Paydate)
             * Display Form ID: paydate.date.yyyymmdd
             */ YyyyMmDd: newAttribute("paydate.date.yyyymmdd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Paydate)
             * Display Form ID: paydate.date.mdyy
             */ MDYy: newAttribute("paydate.date.mdyy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Paydate)
             * Display Form ID: paydate.date.long
             */ Long: newAttribute("paydate.date.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Paydate)
             * Display Form ID: paydate.date.ddmmyyyy
             */ DdMmYyyy: newAttribute("paydate.date.ddmmyyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Paydate)
             * Display Form ID: paydate.date.eddmmyyyy
             */ DdMmYyyy_1: newAttribute("paydate.date.eddmmyyyy"),
        },
    },
    /**
     * Date Data Set Title: Date (Date10)
     * Date Data Set ID: date10.dataset.dt
     */ Date10: {
        ref: idRef("date10.dataset.dt", "dataSet"),
        identifier: "date10.dataset.dt",
        /**
         * Date Attribute: Year (Date10)
         * Date Attribute ID: date10.year
         */ Year: {
            ref: idRef("date10.year", "attribute"),
            identifier: "date10.year",
            /**
             * Display Form Title: Year (Date10)
             * Display Form ID: date10.year.default
             */ Default: newAttribute("date10.year.default"),
        },
        /**
         * Date Attribute: Quarter (Date10)
         * Date Attribute ID: date10.quarter.in.year
         */ Quarter: {
            ref: idRef("date10.quarter.in.year", "attribute"),
            identifier: "date10.quarter.in.year",
            /**
             * Display Form Title: default (Date10)
             * Display Form ID: date10.quarter.in.year.default
             */ Default: newAttribute("date10.quarter.in.year.default"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Date10)
         * Date Attribute ID: date10.week
         */ WeekSunSatYear: {
            ref: idRef("date10.week", "attribute"),
            identifier: "date10.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date10)
             * Display Form ID: date10.week.wk_year
             */ WeekNrYear: newAttribute("date10.week.wk_year"),
            /**
             * Display Form Title: Week Starting (Date10)
             * Display Form ID: date10.week.starting
             */ WeekStarting: newAttribute("date10.week.starting"),
            /**
             * Display Form Title: From - To (Date10)
             * Display Form ID: date10.week.from_to
             */ FromTo: newAttribute("date10.week.from_to"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Date10)
             * Display Form ID: date10.week.wk_year_cont
             */ WeekNrYear_1: newAttribute("date10.week.wk_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Date10)
             * Display Form ID: date10.week.wk_qtr_year_cont
             */ WkQtrYear: newAttribute("date10.week.wk_qtr_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Date10)
             * Display Form ID: date10.week.wk_qtr_year
             */ WkQtrYear_1: newAttribute("date10.week.wk_qtr_year"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Date10)
         * Date Attribute ID: date10.week.in.year
         */ WeekSunSat: {
            ref: idRef("date10.week.in.year", "attribute"),
            identifier: "date10.week.in.year",
            /**
             * Display Form Title: Number US (Date10)
             * Display Form ID: date10.week.in.year.number_us
             */ NumberUS: newAttribute("date10.week.in.year.number_us"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Date10)
         * Date Attribute ID: date10.week.in.quarter
         */ WeekSunSatOfQtr: {
            ref: idRef("date10.week.in.quarter", "attribute"),
            identifier: "date10.week.in.quarter",
            /**
             * Display Form Title: Number US (Date10)
             * Display Form ID: date10.week.in.quarter.number_us
             */ NumberUS: newAttribute("date10.week.in.quarter.number_us"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Date10)
         * Date Attribute ID: date10.euweek
         */ WeekMonSunYear: {
            ref: idRef("date10.euweek", "attribute"),
            identifier: "date10.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date10)
             * Display Form ID: date10.euweek.wk_year
             */ WeekNrYear: newAttribute("date10.euweek.wk_year"),
            /**
             * Display Form Title: Week Starting (Date10)
             * Display Form ID: date10.euweek.starting
             */ WeekStarting: newAttribute("date10.euweek.starting"),
            /**
             * Display Form Title: From - To (Date10)
             * Display Form ID: date10.euweek.from_to
             */ FromTo: newAttribute("date10.euweek.from_to"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Date10)
         * Date Attribute ID: date10.euweek.in.year
         */ WeekMonSun: {
            ref: idRef("date10.euweek.in.year", "attribute"),
            identifier: "date10.euweek.in.year",
            /**
             * Display Form Title: Number EU (Date10)
             * Display Form ID: date10.euweek.in.year.number_eu
             */ NumberEU: newAttribute("date10.euweek.in.year.number_eu"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Date10)
         * Date Attribute ID: date10.euweek.in.quarter
         */ WeekMonSunOfQtr: {
            ref: idRef("date10.euweek.in.quarter", "attribute"),
            identifier: "date10.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Date10)
             * Display Form ID: date10.euweek.in.quarter.number_eu
             */ NumberEU: newAttribute("date10.euweek.in.quarter.number_eu"),
        },
        /**
         * Date Attribute: Month (Date10)
         * Date Attribute ID: date10.month.in.year
         */ Month: {
            ref: idRef("date10.month.in.year", "attribute"),
            identifier: "date10.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Date10)
             * Display Form ID: date10.month.in.year.short
             */ Short: newAttribute("date10.month.in.year.short"),
            /**
             * Display Form Title: Long (January) (Date10)
             * Display Form ID: date10.month.in.year.long
             */ Long: newAttribute("date10.month.in.year.long"),
            /**
             * Display Form Title: Number (M1) (Date10)
             * Display Form ID: date10.month.in.year.number
             */ Number: newAttribute("date10.month.in.year.number"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Date10)
             * Display Form ID: date10.month.in.year.m_q
             */ MQ: newAttribute("date10.month.in.year.m_q"),
        },
        /**
         * Date Attribute: Month of Quarter (Date10)
         * Date Attribute ID: date10.month.in.quarter
         */ MonthOfQuarter: {
            ref: idRef("date10.month.in.quarter", "attribute"),
            identifier: "date10.month.in.quarter",
            /**
             * Display Form Title: Number (Date10)
             * Display Form ID: date10.month.in.quarter.number
             */ Number: newAttribute("date10.month.in.quarter.number"),
        },
        /**
         * Date Attribute: Day of Year (Date10)
         * Date Attribute ID: date10.day.in.year
         */ DayOfYear: {
            ref: idRef("date10.day.in.year", "attribute"),
            identifier: "date10.day.in.year",
            /**
             * Display Form Title: default (Date10)
             * Display Form ID: date10.day.in.year.default
             */ Default: newAttribute("date10.day.in.year.default"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Date10)
         * Date Attribute ID: date10.day.in.week
         */ DayOfWeekSunSat: {
            ref: idRef("date10.day.in.week", "attribute"),
            identifier: "date10.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Date10)
             * Display Form ID: date10.day.in.week.short
             */ Short: newAttribute("date10.day.in.week.short"),
            /**
             * Display Form Title: Long (Sunday) (Date10)
             * Display Form ID: date10.day.in.week.long
             */ Long: newAttribute("date10.day.in.week.long"),
            /**
             * Display Form Title: Number (1=Sunday) (Date10)
             * Display Form ID: date10.day.in.week.number
             */ Number: newAttribute("date10.day.in.week.number"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Date10)
         * Date Attribute ID: date10.day.in.euweek
         */ DayOfWeekMonSun: {
            ref: idRef("date10.day.in.euweek", "attribute"),
            identifier: "date10.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Date10)
             * Display Form ID: date10.day.in.euweek.short
             */ Short: newAttribute("date10.day.in.euweek.short"),
            /**
             * Display Form Title: Long (Monday) (Date10)
             * Display Form ID: date10.day.in.euweek.long
             */ Long: newAttribute("date10.day.in.euweek.long"),
            /**
             * Display Form Title: Number (1=Monday) (Date10)
             * Display Form ID: date10.day.in.euweek.number
             */ Number: newAttribute("date10.day.in.euweek.number"),
        },
        /**
         * Date Attribute: Day of Quarter (Date10)
         * Date Attribute ID: date10.day.in.quarter
         */ DayOfQuarter: {
            ref: idRef("date10.day.in.quarter", "attribute"),
            identifier: "date10.day.in.quarter",
            /**
             * Display Form Title: default (Date10)
             * Display Form ID: date10.day.in.quarter.default
             */ Default: newAttribute("date10.day.in.quarter.default"),
        },
        /**
         * Date Attribute: Day of Month (Date10)
         * Date Attribute ID: date10.day.in.month
         */ DayOfMonth: {
            ref: idRef("date10.day.in.month", "attribute"),
            identifier: "date10.day.in.month",
            /**
             * Display Form Title: default (Date10)
             * Display Form ID: date10.day.in.month.default
             */ Default: newAttribute("date10.day.in.month.default"),
        },
        /**
         * Date Attribute: Quarter/Year (Date10)
         * Date Attribute ID: date10.quarter
         */ QuarterYear: {
            ref: idRef("date10.quarter", "attribute"),
            identifier: "date10.quarter",
            /**
             * Display Form Title: US Short (Date10)
             * Display Form ID: date10.quarter.short_us
             */ USShort: newAttribute("date10.quarter.short_us"),
        },
        /**
         * Date Attribute: Month/Year (Date10)
         * Date Attribute ID: date10.month
         */ MonthYear: {
            ref: idRef("date10.month", "attribute"),
            identifier: "date10.month",
            /**
             * Display Form Title: Short (Jan 2010) (Date10)
             * Display Form ID: date10.month.short
             */ Short: newAttribute("date10.month.short"),
            /**
             * Display Form Title: Long (January 2010) (Date10)
             * Display Form ID: date10.month.long
             */ Long: newAttribute("date10.month.long"),
            /**
             * Display Form Title: Number (1/2010) (Date10)
             * Display Form ID: date10.month.number
             */ Number: newAttribute("date10.month.number"),
        },
        /**
         * Date Attribute: Date (Date10)
         * Date Attribute ID: date10.date
         */ Date: {
            ref: idRef("date10.date", "attribute"),
            identifier: "date10.date",
            /**
             * Display Form Title: mm/dd/yyyy (Date10)
             * Display Form ID: date10.date.day.us.mm_dd_yyyy
             */ MmDdYyyy: newAttribute("date10.date.day.us.mm_dd_yyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Date10)
             * Display Form ID: date10.date.day.yyyy_mm_dd
             */ YyyyMmDd: newAttribute("date10.date.day.yyyy_mm_dd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Date10)
             * Display Form ID: date10.date.day.us.m_d_yy
             */ MDYy: newAttribute("date10.date.day.us.m_d_yy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Date10)
             * Display Form ID: date10.date.day.us.long
             */ Long: newAttribute("date10.date.day.us.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Date10)
             * Display Form ID: date10.date.day.uk.dd_mm_yyyy
             */ DdMmYyyy: newAttribute("date10.date.day.uk.dd_mm_yyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Date10)
             * Display Form ID: date10.date.day.eu.dd_mm_yyyy
             */ DdMmYyyy_1: newAttribute("date10.date.day.eu.dd_mm_yyyy"),
        },
        /**
         * Date Attribute: US Week Year (Date10)
         * Date Attribute ID: date10.year.for.week
         */ USWeekYear: {
            ref: idRef("date10.year.for.week", "attribute"),
            identifier: "date10.year.for.week",
            /**
             * Display Form Title: Week Year (Date10)
             * Display Form ID: date10.year.for.week.number
             */ WeekYear: newAttribute("date10.year.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Year (Date10)
         * Date Attribute ID: date10.year.for.euweek
         */ EUWeekYear: {
            ref: idRef("date10.year.for.euweek", "attribute"),
            identifier: "date10.year.for.euweek",
            /**
             * Display Form Title: Week Year (Date10)
             * Display Form ID: date10.year.for.euweek.number
             */ WeekYear: newAttribute("date10.year.for.euweek.number"),
        },
        /**
         * Date Attribute: US Week Quarter (Date10)
         * Date Attribute ID: date10.quarter.for.week
         */ USWeekQuarter: {
            ref: idRef("date10.quarter.for.week", "attribute"),
            identifier: "date10.quarter.for.week",
            /**
             * Display Form Title: Week Quarter (Date10)
             * Display Form ID: date10.quarter.for.week.number
             */ WeekQuarter: newAttribute("date10.quarter.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Quarter (Date10)
         * Date Attribute ID: date10.quarter.for.euweek
         */ EUWeekQuarter: {
            ref: idRef("date10.quarter.for.euweek", "attribute"),
            identifier: "date10.quarter.for.euweek",
            /**
             * Display Form Title: Week Quarter (Date10)
             * Display Form ID: date10.quarter.for.euweek.number
             */ WeekQuarter: newAttribute("date10.quarter.for.euweek.number"),
        },
    },
    /**
     * Date Data Set Title: Date (Date11)
     * Date Data Set ID: date11.dataset.dt
     */ Date11: {
        ref: idRef("date11.dataset.dt", "dataSet"),
        identifier: "date11.dataset.dt",
        /**
         * Date Attribute: Year (Date11)
         * Date Attribute ID: date11.year
         */ Year: {
            ref: idRef("date11.year", "attribute"),
            identifier: "date11.year",
            /**
             * Display Form Title: Year (Date11)
             * Display Form ID: date11.year.default
             */ Default: newAttribute("date11.year.default"),
        },
        /**
         * Date Attribute: Quarter (Date11)
         * Date Attribute ID: date11.quarter.in.year
         */ Quarter: {
            ref: idRef("date11.quarter.in.year", "attribute"),
            identifier: "date11.quarter.in.year",
            /**
             * Display Form Title: default (Date11)
             * Display Form ID: date11.quarter.in.year.default
             */ Default: newAttribute("date11.quarter.in.year.default"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Date11)
         * Date Attribute ID: date11.week
         */ WeekSunSatYear: {
            ref: idRef("date11.week", "attribute"),
            identifier: "date11.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date11)
             * Display Form ID: date11.week.wk_year
             */ WeekNrYear: newAttribute("date11.week.wk_year"),
            /**
             * Display Form Title: Week Starting (Date11)
             * Display Form ID: date11.week.starting
             */ WeekStarting: newAttribute("date11.week.starting"),
            /**
             * Display Form Title: From - To (Date11)
             * Display Form ID: date11.week.from_to
             */ FromTo: newAttribute("date11.week.from_to"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Date11)
             * Display Form ID: date11.week.wk_year_cont
             */ WeekNrYear_1: newAttribute("date11.week.wk_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Date11)
             * Display Form ID: date11.week.wk_qtr_year_cont
             */ WkQtrYear: newAttribute("date11.week.wk_qtr_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Date11)
             * Display Form ID: date11.week.wk_qtr_year
             */ WkQtrYear_1: newAttribute("date11.week.wk_qtr_year"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Date11)
         * Date Attribute ID: date11.week.in.year
         */ WeekSunSat: {
            ref: idRef("date11.week.in.year", "attribute"),
            identifier: "date11.week.in.year",
            /**
             * Display Form Title: Number US (Date11)
             * Display Form ID: date11.week.in.year.number_us
             */ NumberUS: newAttribute("date11.week.in.year.number_us"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Date11)
         * Date Attribute ID: date11.week.in.quarter
         */ WeekSunSatOfQtr: {
            ref: idRef("date11.week.in.quarter", "attribute"),
            identifier: "date11.week.in.quarter",
            /**
             * Display Form Title: Number US (Date11)
             * Display Form ID: date11.week.in.quarter.number_us
             */ NumberUS: newAttribute("date11.week.in.quarter.number_us"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Date11)
         * Date Attribute ID: date11.euweek
         */ WeekMonSunYear: {
            ref: idRef("date11.euweek", "attribute"),
            identifier: "date11.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date11)
             * Display Form ID: date11.euweek.wk_year
             */ WeekNrYear: newAttribute("date11.euweek.wk_year"),
            /**
             * Display Form Title: Week Starting (Date11)
             * Display Form ID: date11.euweek.starting
             */ WeekStarting: newAttribute("date11.euweek.starting"),
            /**
             * Display Form Title: From - To (Date11)
             * Display Form ID: date11.euweek.from_to
             */ FromTo: newAttribute("date11.euweek.from_to"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Date11)
         * Date Attribute ID: date11.euweek.in.year
         */ WeekMonSun: {
            ref: idRef("date11.euweek.in.year", "attribute"),
            identifier: "date11.euweek.in.year",
            /**
             * Display Form Title: Number EU (Date11)
             * Display Form ID: date11.euweek.in.year.number_eu
             */ NumberEU: newAttribute("date11.euweek.in.year.number_eu"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Date11)
         * Date Attribute ID: date11.euweek.in.quarter
         */ WeekMonSunOfQtr: {
            ref: idRef("date11.euweek.in.quarter", "attribute"),
            identifier: "date11.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Date11)
             * Display Form ID: date11.euweek.in.quarter.number_eu
             */ NumberEU: newAttribute("date11.euweek.in.quarter.number_eu"),
        },
        /**
         * Date Attribute: Month (Date11)
         * Date Attribute ID: date11.month.in.year
         */ Month: {
            ref: idRef("date11.month.in.year", "attribute"),
            identifier: "date11.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Date11)
             * Display Form ID: date11.month.in.year.short
             */ Short: newAttribute("date11.month.in.year.short"),
            /**
             * Display Form Title: Long (January) (Date11)
             * Display Form ID: date11.month.in.year.long
             */ Long: newAttribute("date11.month.in.year.long"),
            /**
             * Display Form Title: Number (M1) (Date11)
             * Display Form ID: date11.month.in.year.number
             */ Number: newAttribute("date11.month.in.year.number"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Date11)
             * Display Form ID: date11.month.in.year.m_q
             */ MQ: newAttribute("date11.month.in.year.m_q"),
        },
        /**
         * Date Attribute: Month of Quarter (Date11)
         * Date Attribute ID: date11.month.in.quarter
         */ MonthOfQuarter: {
            ref: idRef("date11.month.in.quarter", "attribute"),
            identifier: "date11.month.in.quarter",
            /**
             * Display Form Title: Number (Date11)
             * Display Form ID: date11.month.in.quarter.number
             */ Number: newAttribute("date11.month.in.quarter.number"),
        },
        /**
         * Date Attribute: Day of Year (Date11)
         * Date Attribute ID: date11.day.in.year
         */ DayOfYear: {
            ref: idRef("date11.day.in.year", "attribute"),
            identifier: "date11.day.in.year",
            /**
             * Display Form Title: default (Date11)
             * Display Form ID: date11.day.in.year.default
             */ Default: newAttribute("date11.day.in.year.default"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Date11)
         * Date Attribute ID: date11.day.in.week
         */ DayOfWeekSunSat: {
            ref: idRef("date11.day.in.week", "attribute"),
            identifier: "date11.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Date11)
             * Display Form ID: date11.day.in.week.short
             */ Short: newAttribute("date11.day.in.week.short"),
            /**
             * Display Form Title: Long (Sunday) (Date11)
             * Display Form ID: date11.day.in.week.long
             */ Long: newAttribute("date11.day.in.week.long"),
            /**
             * Display Form Title: Number (1=Sunday) (Date11)
             * Display Form ID: date11.day.in.week.number
             */ Number: newAttribute("date11.day.in.week.number"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Date11)
         * Date Attribute ID: date11.day.in.euweek
         */ DayOfWeekMonSun: {
            ref: idRef("date11.day.in.euweek", "attribute"),
            identifier: "date11.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Date11)
             * Display Form ID: date11.day.in.euweek.short
             */ Short: newAttribute("date11.day.in.euweek.short"),
            /**
             * Display Form Title: Long (Monday) (Date11)
             * Display Form ID: date11.day.in.euweek.long
             */ Long: newAttribute("date11.day.in.euweek.long"),
            /**
             * Display Form Title: Number (1=Monday) (Date11)
             * Display Form ID: date11.day.in.euweek.number
             */ Number: newAttribute("date11.day.in.euweek.number"),
        },
        /**
         * Date Attribute: Day of Quarter (Date11)
         * Date Attribute ID: date11.day.in.quarter
         */ DayOfQuarter: {
            ref: idRef("date11.day.in.quarter", "attribute"),
            identifier: "date11.day.in.quarter",
            /**
             * Display Form Title: default (Date11)
             * Display Form ID: date11.day.in.quarter.default
             */ Default: newAttribute("date11.day.in.quarter.default"),
        },
        /**
         * Date Attribute: Day of Month (Date11)
         * Date Attribute ID: date11.day.in.month
         */ DayOfMonth: {
            ref: idRef("date11.day.in.month", "attribute"),
            identifier: "date11.day.in.month",
            /**
             * Display Form Title: default (Date11)
             * Display Form ID: date11.day.in.month.default
             */ Default: newAttribute("date11.day.in.month.default"),
        },
        /**
         * Date Attribute: Quarter/Year (Date11)
         * Date Attribute ID: date11.quarter
         */ QuarterYear: {
            ref: idRef("date11.quarter", "attribute"),
            identifier: "date11.quarter",
            /**
             * Display Form Title: US Short (Date11)
             * Display Form ID: date11.quarter.short_us
             */ USShort: newAttribute("date11.quarter.short_us"),
        },
        /**
         * Date Attribute: Month/Year (Date11)
         * Date Attribute ID: date11.month
         */ MonthYear: {
            ref: idRef("date11.month", "attribute"),
            identifier: "date11.month",
            /**
             * Display Form Title: Short (Jan 2010) (Date11)
             * Display Form ID: date11.month.short
             */ Short: newAttribute("date11.month.short"),
            /**
             * Display Form Title: Long (January 2010) (Date11)
             * Display Form ID: date11.month.long
             */ Long: newAttribute("date11.month.long"),
            /**
             * Display Form Title: Number (1/2010) (Date11)
             * Display Form ID: date11.month.number
             */ Number: newAttribute("date11.month.number"),
        },
        /**
         * Date Attribute: Date (Date11)
         * Date Attribute ID: date11.date
         */ Date: {
            ref: idRef("date11.date", "attribute"),
            identifier: "date11.date",
            /**
             * Display Form Title: mm/dd/yyyy (Date11)
             * Display Form ID: date11.date.day.us.mm_dd_yyyy
             */ MmDdYyyy: newAttribute("date11.date.day.us.mm_dd_yyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Date11)
             * Display Form ID: date11.date.day.yyyy_mm_dd
             */ YyyyMmDd: newAttribute("date11.date.day.yyyy_mm_dd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Date11)
             * Display Form ID: date11.date.day.us.m_d_yy
             */ MDYy: newAttribute("date11.date.day.us.m_d_yy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Date11)
             * Display Form ID: date11.date.day.us.long
             */ Long: newAttribute("date11.date.day.us.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Date11)
             * Display Form ID: date11.date.day.uk.dd_mm_yyyy
             */ DdMmYyyy: newAttribute("date11.date.day.uk.dd_mm_yyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Date11)
             * Display Form ID: date11.date.day.eu.dd_mm_yyyy
             */ DdMmYyyy_1: newAttribute("date11.date.day.eu.dd_mm_yyyy"),
        },
        /**
         * Date Attribute: US Week Year (Date11)
         * Date Attribute ID: date11.year.for.week
         */ USWeekYear: {
            ref: idRef("date11.year.for.week", "attribute"),
            identifier: "date11.year.for.week",
            /**
             * Display Form Title: Week Year (Date11)
             * Display Form ID: date11.year.for.week.number
             */ WeekYear: newAttribute("date11.year.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Year (Date11)
         * Date Attribute ID: date11.year.for.euweek
         */ EUWeekYear: {
            ref: idRef("date11.year.for.euweek", "attribute"),
            identifier: "date11.year.for.euweek",
            /**
             * Display Form Title: Week Year (Date11)
             * Display Form ID: date11.year.for.euweek.number
             */ WeekYear: newAttribute("date11.year.for.euweek.number"),
        },
        /**
         * Date Attribute: US Week Quarter (Date11)
         * Date Attribute ID: date11.quarter.for.week
         */ USWeekQuarter: {
            ref: idRef("date11.quarter.for.week", "attribute"),
            identifier: "date11.quarter.for.week",
            /**
             * Display Form Title: Week Quarter (Date11)
             * Display Form ID: date11.quarter.for.week.number
             */ WeekQuarter: newAttribute("date11.quarter.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Quarter (Date11)
         * Date Attribute ID: date11.quarter.for.euweek
         */ EUWeekQuarter: {
            ref: idRef("date11.quarter.for.euweek", "attribute"),
            identifier: "date11.quarter.for.euweek",
            /**
             * Display Form Title: Week Quarter (Date11)
             * Display Form ID: date11.quarter.for.euweek.number
             */ WeekQuarter: newAttribute("date11.quarter.for.euweek.number"),
        },
    },
    /**
     * Date Data Set Title: Date (Date12)
     * Date Data Set ID: date12.dataset.dt
     */ Date12: {
        ref: idRef("date12.dataset.dt", "dataSet"),
        identifier: "date12.dataset.dt",
        /**
         * Date Attribute: Year (Date12)
         * Date Attribute ID: date12.year
         */ Year: {
            ref: idRef("date12.year", "attribute"),
            identifier: "date12.year",
            /**
             * Display Form Title: Year (Date12)
             * Display Form ID: date12.year.default
             */ Default: newAttribute("date12.year.default"),
        },
        /**
         * Date Attribute: Quarter (Date12)
         * Date Attribute ID: date12.quarter.in.year
         */ Quarter: {
            ref: idRef("date12.quarter.in.year", "attribute"),
            identifier: "date12.quarter.in.year",
            /**
             * Display Form Title: default (Date12)
             * Display Form ID: date12.quarter.in.year.default
             */ Default: newAttribute("date12.quarter.in.year.default"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Date12)
         * Date Attribute ID: date12.week
         */ WeekSunSatYear: {
            ref: idRef("date12.week", "attribute"),
            identifier: "date12.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date12)
             * Display Form ID: date12.week.wk_year
             */ WeekNrYear: newAttribute("date12.week.wk_year"),
            /**
             * Display Form Title: Week Starting (Date12)
             * Display Form ID: date12.week.starting
             */ WeekStarting: newAttribute("date12.week.starting"),
            /**
             * Display Form Title: From - To (Date12)
             * Display Form ID: date12.week.from_to
             */ FromTo: newAttribute("date12.week.from_to"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Date12)
             * Display Form ID: date12.week.wk_year_cont
             */ WeekNrYear_1: newAttribute("date12.week.wk_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Date12)
             * Display Form ID: date12.week.wk_qtr_year_cont
             */ WkQtrYear: newAttribute("date12.week.wk_qtr_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Date12)
             * Display Form ID: date12.week.wk_qtr_year
             */ WkQtrYear_1: newAttribute("date12.week.wk_qtr_year"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Date12)
         * Date Attribute ID: date12.week.in.year
         */ WeekSunSat: {
            ref: idRef("date12.week.in.year", "attribute"),
            identifier: "date12.week.in.year",
            /**
             * Display Form Title: Number US (Date12)
             * Display Form ID: date12.week.in.year.number_us
             */ NumberUS: newAttribute("date12.week.in.year.number_us"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Date12)
         * Date Attribute ID: date12.week.in.quarter
         */ WeekSunSatOfQtr: {
            ref: idRef("date12.week.in.quarter", "attribute"),
            identifier: "date12.week.in.quarter",
            /**
             * Display Form Title: Number US (Date12)
             * Display Form ID: date12.week.in.quarter.number_us
             */ NumberUS: newAttribute("date12.week.in.quarter.number_us"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Date12)
         * Date Attribute ID: date12.euweek
         */ WeekMonSunYear: {
            ref: idRef("date12.euweek", "attribute"),
            identifier: "date12.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date12)
             * Display Form ID: date12.euweek.wk_year
             */ WeekNrYear: newAttribute("date12.euweek.wk_year"),
            /**
             * Display Form Title: Week Starting (Date12)
             * Display Form ID: date12.euweek.starting
             */ WeekStarting: newAttribute("date12.euweek.starting"),
            /**
             * Display Form Title: From - To (Date12)
             * Display Form ID: date12.euweek.from_to
             */ FromTo: newAttribute("date12.euweek.from_to"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Date12)
         * Date Attribute ID: date12.euweek.in.year
         */ WeekMonSun: {
            ref: idRef("date12.euweek.in.year", "attribute"),
            identifier: "date12.euweek.in.year",
            /**
             * Display Form Title: Number EU (Date12)
             * Display Form ID: date12.euweek.in.year.number_eu
             */ NumberEU: newAttribute("date12.euweek.in.year.number_eu"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Date12)
         * Date Attribute ID: date12.euweek.in.quarter
         */ WeekMonSunOfQtr: {
            ref: idRef("date12.euweek.in.quarter", "attribute"),
            identifier: "date12.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Date12)
             * Display Form ID: date12.euweek.in.quarter.number_eu
             */ NumberEU: newAttribute("date12.euweek.in.quarter.number_eu"),
        },
        /**
         * Date Attribute: Month (Date12)
         * Date Attribute ID: date12.month.in.year
         */ Month: {
            ref: idRef("date12.month.in.year", "attribute"),
            identifier: "date12.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Date12)
             * Display Form ID: date12.month.in.year.short
             */ Short: newAttribute("date12.month.in.year.short"),
            /**
             * Display Form Title: Long (January) (Date12)
             * Display Form ID: date12.month.in.year.long
             */ Long: newAttribute("date12.month.in.year.long"),
            /**
             * Display Form Title: Number (M1) (Date12)
             * Display Form ID: date12.month.in.year.number
             */ Number: newAttribute("date12.month.in.year.number"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Date12)
             * Display Form ID: date12.month.in.year.m_q
             */ MQ: newAttribute("date12.month.in.year.m_q"),
        },
        /**
         * Date Attribute: Month of Quarter (Date12)
         * Date Attribute ID: date12.month.in.quarter
         */ MonthOfQuarter: {
            ref: idRef("date12.month.in.quarter", "attribute"),
            identifier: "date12.month.in.quarter",
            /**
             * Display Form Title: Number (Date12)
             * Display Form ID: date12.month.in.quarter.number
             */ Number: newAttribute("date12.month.in.quarter.number"),
        },
        /**
         * Date Attribute: Day of Year (Date12)
         * Date Attribute ID: date12.day.in.year
         */ DayOfYear: {
            ref: idRef("date12.day.in.year", "attribute"),
            identifier: "date12.day.in.year",
            /**
             * Display Form Title: default (Date12)
             * Display Form ID: date12.day.in.year.default
             */ Default: newAttribute("date12.day.in.year.default"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Date12)
         * Date Attribute ID: date12.day.in.week
         */ DayOfWeekSunSat: {
            ref: idRef("date12.day.in.week", "attribute"),
            identifier: "date12.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Date12)
             * Display Form ID: date12.day.in.week.short
             */ Short: newAttribute("date12.day.in.week.short"),
            /**
             * Display Form Title: Long (Sunday) (Date12)
             * Display Form ID: date12.day.in.week.long
             */ Long: newAttribute("date12.day.in.week.long"),
            /**
             * Display Form Title: Number (1=Sunday) (Date12)
             * Display Form ID: date12.day.in.week.number
             */ Number: newAttribute("date12.day.in.week.number"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Date12)
         * Date Attribute ID: date12.day.in.euweek
         */ DayOfWeekMonSun: {
            ref: idRef("date12.day.in.euweek", "attribute"),
            identifier: "date12.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Date12)
             * Display Form ID: date12.day.in.euweek.short
             */ Short: newAttribute("date12.day.in.euweek.short"),
            /**
             * Display Form Title: Long (Monday) (Date12)
             * Display Form ID: date12.day.in.euweek.long
             */ Long: newAttribute("date12.day.in.euweek.long"),
            /**
             * Display Form Title: Number (1=Monday) (Date12)
             * Display Form ID: date12.day.in.euweek.number
             */ Number: newAttribute("date12.day.in.euweek.number"),
        },
        /**
         * Date Attribute: Day of Quarter (Date12)
         * Date Attribute ID: date12.day.in.quarter
         */ DayOfQuarter: {
            ref: idRef("date12.day.in.quarter", "attribute"),
            identifier: "date12.day.in.quarter",
            /**
             * Display Form Title: default (Date12)
             * Display Form ID: date12.day.in.quarter.default
             */ Default: newAttribute("date12.day.in.quarter.default"),
        },
        /**
         * Date Attribute: Day of Month (Date12)
         * Date Attribute ID: date12.day.in.month
         */ DayOfMonth: {
            ref: idRef("date12.day.in.month", "attribute"),
            identifier: "date12.day.in.month",
            /**
             * Display Form Title: default (Date12)
             * Display Form ID: date12.day.in.month.default
             */ Default: newAttribute("date12.day.in.month.default"),
        },
        /**
         * Date Attribute: Quarter/Year (Date12)
         * Date Attribute ID: date12.quarter
         */ QuarterYear: {
            ref: idRef("date12.quarter", "attribute"),
            identifier: "date12.quarter",
            /**
             * Display Form Title: US Short (Date12)
             * Display Form ID: date12.quarter.short_us
             */ USShort: newAttribute("date12.quarter.short_us"),
        },
        /**
         * Date Attribute: Month/Year (Date12)
         * Date Attribute ID: date12.month
         */ MonthYear: {
            ref: idRef("date12.month", "attribute"),
            identifier: "date12.month",
            /**
             * Display Form Title: Short (Jan 2010) (Date12)
             * Display Form ID: date12.month.short
             */ Short: newAttribute("date12.month.short"),
            /**
             * Display Form Title: Long (January 2010) (Date12)
             * Display Form ID: date12.month.long
             */ Long: newAttribute("date12.month.long"),
            /**
             * Display Form Title: Number (1/2010) (Date12)
             * Display Form ID: date12.month.number
             */ Number: newAttribute("date12.month.number"),
        },
        /**
         * Date Attribute: Date (Date12)
         * Date Attribute ID: date12.date
         */ Date: {
            ref: idRef("date12.date", "attribute"),
            identifier: "date12.date",
            /**
             * Display Form Title: mm/dd/yyyy (Date12)
             * Display Form ID: date12.date.day.us.mm_dd_yyyy
             */ MmDdYyyy: newAttribute("date12.date.day.us.mm_dd_yyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Date12)
             * Display Form ID: date12.date.day.yyyy_mm_dd
             */ YyyyMmDd: newAttribute("date12.date.day.yyyy_mm_dd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Date12)
             * Display Form ID: date12.date.day.us.m_d_yy
             */ MDYy: newAttribute("date12.date.day.us.m_d_yy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Date12)
             * Display Form ID: date12.date.day.us.long
             */ Long: newAttribute("date12.date.day.us.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Date12)
             * Display Form ID: date12.date.day.uk.dd_mm_yyyy
             */ DdMmYyyy: newAttribute("date12.date.day.uk.dd_mm_yyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Date12)
             * Display Form ID: date12.date.day.eu.dd_mm_yyyy
             */ DdMmYyyy_1: newAttribute("date12.date.day.eu.dd_mm_yyyy"),
        },
        /**
         * Date Attribute: US Week Year (Date12)
         * Date Attribute ID: date12.year.for.week
         */ USWeekYear: {
            ref: idRef("date12.year.for.week", "attribute"),
            identifier: "date12.year.for.week",
            /**
             * Display Form Title: Week Year (Date12)
             * Display Form ID: date12.year.for.week.number
             */ WeekYear: newAttribute("date12.year.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Year (Date12)
         * Date Attribute ID: date12.year.for.euweek
         */ EUWeekYear: {
            ref: idRef("date12.year.for.euweek", "attribute"),
            identifier: "date12.year.for.euweek",
            /**
             * Display Form Title: Week Year (Date12)
             * Display Form ID: date12.year.for.euweek.number
             */ WeekYear: newAttribute("date12.year.for.euweek.number"),
        },
        /**
         * Date Attribute: US Week Quarter (Date12)
         * Date Attribute ID: date12.quarter.for.week
         */ USWeekQuarter: {
            ref: idRef("date12.quarter.for.week", "attribute"),
            identifier: "date12.quarter.for.week",
            /**
             * Display Form Title: Week Quarter (Date12)
             * Display Form ID: date12.quarter.for.week.number
             */ WeekQuarter: newAttribute("date12.quarter.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Quarter (Date12)
         * Date Attribute ID: date12.quarter.for.euweek
         */ EUWeekQuarter: {
            ref: idRef("date12.quarter.for.euweek", "attribute"),
            identifier: "date12.quarter.for.euweek",
            /**
             * Display Form Title: Week Quarter (Date12)
             * Display Form ID: date12.quarter.for.euweek.number
             */ WeekQuarter: newAttribute("date12.quarter.for.euweek.number"),
        },
    },
    /**
     * Date Data Set Title: Date (Date13)
     * Date Data Set ID: date13.dataset.dt
     */ Date13: {
        ref: idRef("date13.dataset.dt", "dataSet"),
        identifier: "date13.dataset.dt",
        /**
         * Date Attribute: Year (Date13)
         * Date Attribute ID: date13.year
         */ Year: {
            ref: idRef("date13.year", "attribute"),
            identifier: "date13.year",
            /**
             * Display Form Title: Year (Date13)
             * Display Form ID: date13.year.default
             */ Default: newAttribute("date13.year.default"),
        },
        /**
         * Date Attribute: Quarter (Date13)
         * Date Attribute ID: date13.quarter.in.year
         */ Quarter: {
            ref: idRef("date13.quarter.in.year", "attribute"),
            identifier: "date13.quarter.in.year",
            /**
             * Display Form Title: default (Date13)
             * Display Form ID: date13.quarter.in.year.default
             */ Default: newAttribute("date13.quarter.in.year.default"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Date13)
         * Date Attribute ID: date13.week
         */ WeekSunSatYear: {
            ref: idRef("date13.week", "attribute"),
            identifier: "date13.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date13)
             * Display Form ID: date13.week.wk_year
             */ WeekNrYear: newAttribute("date13.week.wk_year"),
            /**
             * Display Form Title: Week Starting (Date13)
             * Display Form ID: date13.week.starting
             */ WeekStarting: newAttribute("date13.week.starting"),
            /**
             * Display Form Title: From - To (Date13)
             * Display Form ID: date13.week.from_to
             */ FromTo: newAttribute("date13.week.from_to"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Date13)
             * Display Form ID: date13.week.wk_year_cont
             */ WeekNrYear_1: newAttribute("date13.week.wk_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Date13)
             * Display Form ID: date13.week.wk_qtr_year_cont
             */ WkQtrYear: newAttribute("date13.week.wk_qtr_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Date13)
             * Display Form ID: date13.week.wk_qtr_year
             */ WkQtrYear_1: newAttribute("date13.week.wk_qtr_year"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Date13)
         * Date Attribute ID: date13.week.in.year
         */ WeekSunSat: {
            ref: idRef("date13.week.in.year", "attribute"),
            identifier: "date13.week.in.year",
            /**
             * Display Form Title: Number US (Date13)
             * Display Form ID: date13.week.in.year.number_us
             */ NumberUS: newAttribute("date13.week.in.year.number_us"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Date13)
         * Date Attribute ID: date13.week.in.quarter
         */ WeekSunSatOfQtr: {
            ref: idRef("date13.week.in.quarter", "attribute"),
            identifier: "date13.week.in.quarter",
            /**
             * Display Form Title: Number US (Date13)
             * Display Form ID: date13.week.in.quarter.number_us
             */ NumberUS: newAttribute("date13.week.in.quarter.number_us"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Date13)
         * Date Attribute ID: date13.euweek
         */ WeekMonSunYear: {
            ref: idRef("date13.euweek", "attribute"),
            identifier: "date13.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date13)
             * Display Form ID: date13.euweek.wk_year
             */ WeekNrYear: newAttribute("date13.euweek.wk_year"),
            /**
             * Display Form Title: Week Starting (Date13)
             * Display Form ID: date13.euweek.starting
             */ WeekStarting: newAttribute("date13.euweek.starting"),
            /**
             * Display Form Title: From - To (Date13)
             * Display Form ID: date13.euweek.from_to
             */ FromTo: newAttribute("date13.euweek.from_to"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Date13)
         * Date Attribute ID: date13.euweek.in.year
         */ WeekMonSun: {
            ref: idRef("date13.euweek.in.year", "attribute"),
            identifier: "date13.euweek.in.year",
            /**
             * Display Form Title: Number EU (Date13)
             * Display Form ID: date13.euweek.in.year.number_eu
             */ NumberEU: newAttribute("date13.euweek.in.year.number_eu"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Date13)
         * Date Attribute ID: date13.euweek.in.quarter
         */ WeekMonSunOfQtr: {
            ref: idRef("date13.euweek.in.quarter", "attribute"),
            identifier: "date13.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Date13)
             * Display Form ID: date13.euweek.in.quarter.number_eu
             */ NumberEU: newAttribute("date13.euweek.in.quarter.number_eu"),
        },
        /**
         * Date Attribute: Month (Date13)
         * Date Attribute ID: date13.month.in.year
         */ Month: {
            ref: idRef("date13.month.in.year", "attribute"),
            identifier: "date13.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Date13)
             * Display Form ID: date13.month.in.year.short
             */ Short: newAttribute("date13.month.in.year.short"),
            /**
             * Display Form Title: Long (January) (Date13)
             * Display Form ID: date13.month.in.year.long
             */ Long: newAttribute("date13.month.in.year.long"),
            /**
             * Display Form Title: Number (M1) (Date13)
             * Display Form ID: date13.month.in.year.number
             */ Number: newAttribute("date13.month.in.year.number"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Date13)
             * Display Form ID: date13.month.in.year.m_q
             */ MQ: newAttribute("date13.month.in.year.m_q"),
        },
        /**
         * Date Attribute: Month of Quarter (Date13)
         * Date Attribute ID: date13.month.in.quarter
         */ MonthOfQuarter: {
            ref: idRef("date13.month.in.quarter", "attribute"),
            identifier: "date13.month.in.quarter",
            /**
             * Display Form Title: Number (Date13)
             * Display Form ID: date13.month.in.quarter.number
             */ Number: newAttribute("date13.month.in.quarter.number"),
        },
        /**
         * Date Attribute: Day of Year (Date13)
         * Date Attribute ID: date13.day.in.year
         */ DayOfYear: {
            ref: idRef("date13.day.in.year", "attribute"),
            identifier: "date13.day.in.year",
            /**
             * Display Form Title: default (Date13)
             * Display Form ID: date13.day.in.year.default
             */ Default: newAttribute("date13.day.in.year.default"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Date13)
         * Date Attribute ID: date13.day.in.week
         */ DayOfWeekSunSat: {
            ref: idRef("date13.day.in.week", "attribute"),
            identifier: "date13.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Date13)
             * Display Form ID: date13.day.in.week.short
             */ Short: newAttribute("date13.day.in.week.short"),
            /**
             * Display Form Title: Long (Sunday) (Date13)
             * Display Form ID: date13.day.in.week.long
             */ Long: newAttribute("date13.day.in.week.long"),
            /**
             * Display Form Title: Number (1=Sunday) (Date13)
             * Display Form ID: date13.day.in.week.number
             */ Number: newAttribute("date13.day.in.week.number"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Date13)
         * Date Attribute ID: date13.day.in.euweek
         */ DayOfWeekMonSun: {
            ref: idRef("date13.day.in.euweek", "attribute"),
            identifier: "date13.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Date13)
             * Display Form ID: date13.day.in.euweek.short
             */ Short: newAttribute("date13.day.in.euweek.short"),
            /**
             * Display Form Title: Long (Monday) (Date13)
             * Display Form ID: date13.day.in.euweek.long
             */ Long: newAttribute("date13.day.in.euweek.long"),
            /**
             * Display Form Title: Number (1=Monday) (Date13)
             * Display Form ID: date13.day.in.euweek.number
             */ Number: newAttribute("date13.day.in.euweek.number"),
        },
        /**
         * Date Attribute: Day of Quarter (Date13)
         * Date Attribute ID: date13.day.in.quarter
         */ DayOfQuarter: {
            ref: idRef("date13.day.in.quarter", "attribute"),
            identifier: "date13.day.in.quarter",
            /**
             * Display Form Title: default (Date13)
             * Display Form ID: date13.day.in.quarter.default
             */ Default: newAttribute("date13.day.in.quarter.default"),
        },
        /**
         * Date Attribute: Day of Month (Date13)
         * Date Attribute ID: date13.day.in.month
         */ DayOfMonth: {
            ref: idRef("date13.day.in.month", "attribute"),
            identifier: "date13.day.in.month",
            /**
             * Display Form Title: default (Date13)
             * Display Form ID: date13.day.in.month.default
             */ Default: newAttribute("date13.day.in.month.default"),
        },
        /**
         * Date Attribute: Quarter/Year (Date13)
         * Date Attribute ID: date13.quarter
         */ QuarterYear: {
            ref: idRef("date13.quarter", "attribute"),
            identifier: "date13.quarter",
            /**
             * Display Form Title: US Short (Date13)
             * Display Form ID: date13.quarter.short_us
             */ USShort: newAttribute("date13.quarter.short_us"),
        },
        /**
         * Date Attribute: Month/Year (Date13)
         * Date Attribute ID: date13.month
         */ MonthYear: {
            ref: idRef("date13.month", "attribute"),
            identifier: "date13.month",
            /**
             * Display Form Title: Short (Jan 2010) (Date13)
             * Display Form ID: date13.month.short
             */ Short: newAttribute("date13.month.short"),
            /**
             * Display Form Title: Long (January 2010) (Date13)
             * Display Form ID: date13.month.long
             */ Long: newAttribute("date13.month.long"),
            /**
             * Display Form Title: Number (1/2010) (Date13)
             * Display Form ID: date13.month.number
             */ Number: newAttribute("date13.month.number"),
        },
        /**
         * Date Attribute: Date (Date13)
         * Date Attribute ID: date13.date
         */ Date: {
            ref: idRef("date13.date", "attribute"),
            identifier: "date13.date",
            /**
             * Display Form Title: mm/dd/yyyy (Date13)
             * Display Form ID: date13.date.day.us.mm_dd_yyyy
             */ MmDdYyyy: newAttribute("date13.date.day.us.mm_dd_yyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Date13)
             * Display Form ID: date13.date.day.yyyy_mm_dd
             */ YyyyMmDd: newAttribute("date13.date.day.yyyy_mm_dd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Date13)
             * Display Form ID: date13.date.day.us.m_d_yy
             */ MDYy: newAttribute("date13.date.day.us.m_d_yy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Date13)
             * Display Form ID: date13.date.day.us.long
             */ Long: newAttribute("date13.date.day.us.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Date13)
             * Display Form ID: date13.date.day.uk.dd_mm_yyyy
             */ DdMmYyyy: newAttribute("date13.date.day.uk.dd_mm_yyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Date13)
             * Display Form ID: date13.date.day.eu.dd_mm_yyyy
             */ DdMmYyyy_1: newAttribute("date13.date.day.eu.dd_mm_yyyy"),
        },
        /**
         * Date Attribute: US Week Year (Date13)
         * Date Attribute ID: date13.year.for.week
         */ USWeekYear: {
            ref: idRef("date13.year.for.week", "attribute"),
            identifier: "date13.year.for.week",
            /**
             * Display Form Title: Week Year (Date13)
             * Display Form ID: date13.year.for.week.number
             */ WeekYear: newAttribute("date13.year.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Year (Date13)
         * Date Attribute ID: date13.year.for.euweek
         */ EUWeekYear: {
            ref: idRef("date13.year.for.euweek", "attribute"),
            identifier: "date13.year.for.euweek",
            /**
             * Display Form Title: Week Year (Date13)
             * Display Form ID: date13.year.for.euweek.number
             */ WeekYear: newAttribute("date13.year.for.euweek.number"),
        },
        /**
         * Date Attribute: US Week Quarter (Date13)
         * Date Attribute ID: date13.quarter.for.week
         */ USWeekQuarter: {
            ref: idRef("date13.quarter.for.week", "attribute"),
            identifier: "date13.quarter.for.week",
            /**
             * Display Form Title: Week Quarter (Date13)
             * Display Form ID: date13.quarter.for.week.number
             */ WeekQuarter: newAttribute("date13.quarter.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Quarter (Date13)
         * Date Attribute ID: date13.quarter.for.euweek
         */ EUWeekQuarter: {
            ref: idRef("date13.quarter.for.euweek", "attribute"),
            identifier: "date13.quarter.for.euweek",
            /**
             * Display Form Title: Week Quarter (Date13)
             * Display Form ID: date13.quarter.for.euweek.number
             */ WeekQuarter: newAttribute("date13.quarter.for.euweek.number"),
        },
    },
    /**
     * Date Data Set Title: Date (D Date)
     * Date Data Set ID: d_date.dataset.dt
     */ DDate: {
        ref: idRef("d_date.dataset.dt", "dataSet"),
        identifier: "d_date.dataset.dt",
        /**
         * Date Attribute: Year (D Date)
         * Date Attribute ID: d_date.year
         */ Year: {
            ref: idRef("d_date.year", "attribute"),
            identifier: "d_date.year",
            /**
             * Display Form Title: Year (D Date)
             * Display Form ID: d_date.year.default
             */ Default: newAttribute("d_date.year.default"),
        },
        /**
         * Date Attribute: Quarter (D Date)
         * Date Attribute ID: d_date.quarter.in.year
         */ Quarter: {
            ref: idRef("d_date.quarter.in.year", "attribute"),
            identifier: "d_date.quarter.in.year",
            /**
             * Display Form Title: default (D Date)
             * Display Form ID: d_date.quarter.in.year.default
             */ Default: newAttribute("d_date.quarter.in.year.default"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (D Date)
         * Date Attribute ID: d_date.week
         */ WeekSunSatYear: {
            ref: idRef("d_date.week", "attribute"),
            identifier: "d_date.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (D Date)
             * Display Form ID: d_date.week.wk_year
             */ WeekNrYear: newAttribute("d_date.week.wk_year"),
            /**
             * Display Form Title: Week Starting (D Date)
             * Display Form ID: d_date.week.starting
             */ WeekStarting: newAttribute("d_date.week.starting"),
            /**
             * Display Form Title: From - To (D Date)
             * Display Form ID: d_date.week.from_to
             */ FromTo: newAttribute("d_date.week.from_to"),
            /**
             * Display Form Title: Week #/Year (Cont.) (D Date)
             * Display Form ID: d_date.week.wk_year_cont
             */ WeekNrYear_1: newAttribute("d_date.week.wk_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (D Date)
             * Display Form ID: d_date.week.wk_qtr_year_cont
             */ WkQtrYear: newAttribute("d_date.week.wk_qtr_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (D Date)
             * Display Form ID: d_date.week.wk_qtr_year
             */ WkQtrYear_1: newAttribute("d_date.week.wk_qtr_year"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (D Date)
         * Date Attribute ID: d_date.week.in.year
         */ WeekSunSat: {
            ref: idRef("d_date.week.in.year", "attribute"),
            identifier: "d_date.week.in.year",
            /**
             * Display Form Title: Number US (D Date)
             * Display Form ID: d_date.week.in.year.number_us
             */ NumberUS: newAttribute("d_date.week.in.year.number_us"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (D Date)
         * Date Attribute ID: d_date.week.in.quarter
         */ WeekSunSatOfQtr: {
            ref: idRef("d_date.week.in.quarter", "attribute"),
            identifier: "d_date.week.in.quarter",
            /**
             * Display Form Title: Number US (D Date)
             * Display Form ID: d_date.week.in.quarter.number_us
             */ NumberUS: newAttribute("d_date.week.in.quarter.number_us"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (D Date)
         * Date Attribute ID: d_date.euweek
         */ WeekMonSunYear: {
            ref: idRef("d_date.euweek", "attribute"),
            identifier: "d_date.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (D Date)
             * Display Form ID: d_date.euweek.wk_year
             */ WeekNrYear: newAttribute("d_date.euweek.wk_year"),
            /**
             * Display Form Title: Week Starting (D Date)
             * Display Form ID: d_date.euweek.starting
             */ WeekStarting: newAttribute("d_date.euweek.starting"),
            /**
             * Display Form Title: From - To (D Date)
             * Display Form ID: d_date.euweek.from_to
             */ FromTo: newAttribute("d_date.euweek.from_to"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (D Date)
         * Date Attribute ID: d_date.euweek.in.year
         */ WeekMonSun: {
            ref: idRef("d_date.euweek.in.year", "attribute"),
            identifier: "d_date.euweek.in.year",
            /**
             * Display Form Title: Number EU (D Date)
             * Display Form ID: d_date.euweek.in.year.number_eu
             */ NumberEU: newAttribute("d_date.euweek.in.year.number_eu"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (D Date)
         * Date Attribute ID: d_date.euweek.in.quarter
         */ WeekMonSunOfQtr: {
            ref: idRef("d_date.euweek.in.quarter", "attribute"),
            identifier: "d_date.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (D Date)
             * Display Form ID: d_date.euweek.in.quarter.number_eu
             */ NumberEU: newAttribute("d_date.euweek.in.quarter.number_eu"),
        },
        /**
         * Date Attribute: Month (D Date)
         * Date Attribute ID: d_date.month.in.year
         */ Month: {
            ref: idRef("d_date.month.in.year", "attribute"),
            identifier: "d_date.month.in.year",
            /**
             * Display Form Title: Short (Jan) (D Date)
             * Display Form ID: d_date.month.in.year.short
             */ Short: newAttribute("d_date.month.in.year.short"),
            /**
             * Display Form Title: Long (January) (D Date)
             * Display Form ID: d_date.month.in.year.long
             */ Long: newAttribute("d_date.month.in.year.long"),
            /**
             * Display Form Title: Number (M1) (D Date)
             * Display Form ID: d_date.month.in.year.number
             */ Number: newAttribute("d_date.month.in.year.number"),
            /**
             * Display Form Title: M/Q (M1/Q1) (D Date)
             * Display Form ID: d_date.month.in.year.m_q
             */ MQ: newAttribute("d_date.month.in.year.m_q"),
        },
        /**
         * Date Attribute: Month of Quarter (D Date)
         * Date Attribute ID: d_date.month.in.quarter
         */ MonthOfQuarter: {
            ref: idRef("d_date.month.in.quarter", "attribute"),
            identifier: "d_date.month.in.quarter",
            /**
             * Display Form Title: Number (D Date)
             * Display Form ID: d_date.month.in.quarter.number
             */ Number: newAttribute("d_date.month.in.quarter.number"),
        },
        /**
         * Date Attribute: Day of Year (D Date)
         * Date Attribute ID: d_date.day.in.year
         */ DayOfYear: {
            ref: idRef("d_date.day.in.year", "attribute"),
            identifier: "d_date.day.in.year",
            /**
             * Display Form Title: default (D Date)
             * Display Form ID: d_date.day.in.year.default
             */ Default: newAttribute("d_date.day.in.year.default"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (D Date)
         * Date Attribute ID: d_date.day.in.week
         */ DayOfWeekSunSat: {
            ref: idRef("d_date.day.in.week", "attribute"),
            identifier: "d_date.day.in.week",
            /**
             * Display Form Title: Short (Sun) (D Date)
             * Display Form ID: d_date.day.in.week.short
             */ Short: newAttribute("d_date.day.in.week.short"),
            /**
             * Display Form Title: Long (Sunday) (D Date)
             * Display Form ID: d_date.day.in.week.long
             */ Long: newAttribute("d_date.day.in.week.long"),
            /**
             * Display Form Title: Number (1=Sunday) (D Date)
             * Display Form ID: d_date.day.in.week.number
             */ Number: newAttribute("d_date.day.in.week.number"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (D Date)
         * Date Attribute ID: d_date.day.in.euweek
         */ DayOfWeekMonSun: {
            ref: idRef("d_date.day.in.euweek", "attribute"),
            identifier: "d_date.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (D Date)
             * Display Form ID: d_date.day.in.euweek.short
             */ Short: newAttribute("d_date.day.in.euweek.short"),
            /**
             * Display Form Title: Long (Monday) (D Date)
             * Display Form ID: d_date.day.in.euweek.long
             */ Long: newAttribute("d_date.day.in.euweek.long"),
            /**
             * Display Form Title: Number (1=Monday) (D Date)
             * Display Form ID: d_date.day.in.euweek.number
             */ Number: newAttribute("d_date.day.in.euweek.number"),
        },
        /**
         * Date Attribute: Day of Quarter (D Date)
         * Date Attribute ID: d_date.day.in.quarter
         */ DayOfQuarter: {
            ref: idRef("d_date.day.in.quarter", "attribute"),
            identifier: "d_date.day.in.quarter",
            /**
             * Display Form Title: default (D Date)
             * Display Form ID: d_date.day.in.quarter.default
             */ Default: newAttribute("d_date.day.in.quarter.default"),
        },
        /**
         * Date Attribute: Day of Month (D Date)
         * Date Attribute ID: d_date.day.in.month
         */ DayOfMonth: {
            ref: idRef("d_date.day.in.month", "attribute"),
            identifier: "d_date.day.in.month",
            /**
             * Display Form Title: default (D Date)
             * Display Form ID: d_date.day.in.month.default
             */ Default: newAttribute("d_date.day.in.month.default"),
        },
        /**
         * Date Attribute: Quarter/Year (D Date)
         * Date Attribute ID: d_date.quarter
         */ QuarterYear: {
            ref: idRef("d_date.quarter", "attribute"),
            identifier: "d_date.quarter",
            /**
             * Display Form Title: US Short (D Date)
             * Display Form ID: d_date.quarter.short_us
             */ USShort: newAttribute("d_date.quarter.short_us"),
        },
        /**
         * Date Attribute: Month/Year (D Date)
         * Date Attribute ID: d_date.month
         */ MonthYear: {
            ref: idRef("d_date.month", "attribute"),
            identifier: "d_date.month",
            /**
             * Display Form Title: Short (Jan 2010) (D Date)
             * Display Form ID: d_date.month.short
             */ Short: newAttribute("d_date.month.short"),
            /**
             * Display Form Title: Long (January 2010) (D Date)
             * Display Form ID: d_date.month.long
             */ Long: newAttribute("d_date.month.long"),
            /**
             * Display Form Title: Number (1/2010) (D Date)
             * Display Form ID: d_date.month.number
             */ Number: newAttribute("d_date.month.number"),
        },
        /**
         * Date Attribute: Date (D Date)
         * Date Attribute ID: d_date.date
         */ Date: {
            ref: idRef("d_date.date", "attribute"),
            identifier: "d_date.date",
            /**
             * Display Form Title: mm/dd/yyyy (D Date)
             * Display Form ID: d_date.date.day.us.mm_dd_yyyy
             */ MmDdYyyy: newAttribute("d_date.date.day.us.mm_dd_yyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (D Date)
             * Display Form ID: d_date.date.day.yyyy_mm_dd
             */ YyyyMmDd: newAttribute("d_date.date.day.yyyy_mm_dd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (D Date)
             * Display Form ID: d_date.date.day.us.m_d_yy
             */ MDYy: newAttribute("d_date.date.day.us.m_d_yy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (D Date)
             * Display Form ID: d_date.date.day.us.long
             */ Long: newAttribute("d_date.date.day.us.long"),
            /**
             * Display Form Title: dd/mm/yyyy (D Date)
             * Display Form ID: d_date.date.day.uk.dd_mm_yyyy
             */ DdMmYyyy: newAttribute("d_date.date.day.uk.dd_mm_yyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (D Date)
             * Display Form ID: d_date.date.day.eu.dd_mm_yyyy
             */ DdMmYyyy_1: newAttribute("d_date.date.day.eu.dd_mm_yyyy"),
        },
        /**
         * Date Attribute: US Week Year (D Date)
         * Date Attribute ID: d_date.year.for.week
         */ USWeekYear: {
            ref: idRef("d_date.year.for.week", "attribute"),
            identifier: "d_date.year.for.week",
            /**
             * Display Form Title: Week Year (D Date)
             * Display Form ID: d_date.year.for.week.number
             */ WeekYear: newAttribute("d_date.year.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Year (D Date)
         * Date Attribute ID: d_date.year.for.euweek
         */ EUWeekYear: {
            ref: idRef("d_date.year.for.euweek", "attribute"),
            identifier: "d_date.year.for.euweek",
            /**
             * Display Form Title: Week Year (D Date)
             * Display Form ID: d_date.year.for.euweek.number
             */ WeekYear: newAttribute("d_date.year.for.euweek.number"),
        },
        /**
         * Date Attribute: US Week Quarter (D Date)
         * Date Attribute ID: d_date.quarter.for.week
         */ USWeekQuarter: {
            ref: idRef("d_date.quarter.for.week", "attribute"),
            identifier: "d_date.quarter.for.week",
            /**
             * Display Form Title: Week Quarter (D Date)
             * Display Form ID: d_date.quarter.for.week.number
             */ WeekQuarter: newAttribute("d_date.quarter.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Quarter (D Date)
         * Date Attribute ID: d_date.quarter.for.euweek
         */ EUWeekQuarter: {
            ref: idRef("d_date.quarter.for.euweek", "attribute"),
            identifier: "d_date.quarter.for.euweek",
            /**
             * Display Form Title: Week Quarter (D Date)
             * Display Form ID: d_date.quarter.for.euweek.number
             */ WeekQuarter: newAttribute("d_date.quarter.for.euweek.number"),
        },
    },
    /**
     * Date Data Set Title: Date (Datum Proveden)
     * Date Data Set ID: datum_proveden.dataset.dt
     */ DatumProveden: {
        ref: idRef("datum_proveden.dataset.dt", "dataSet"),
        identifier: "datum_proveden.dataset.dt",
        /**
         * Date Attribute: Year (Datum Proveden)
         * Date Attribute ID: datum_proveden.year
         */ Year: {
            ref: idRef("datum_proveden.year", "attribute"),
            identifier: "datum_proveden.year",
            /**
             * Display Form Title: Year (Datum Proveden)
             * Display Form ID: datum_proveden.year.default
             */ Default: newAttribute("datum_proveden.year.default"),
        },
        /**
         * Date Attribute: Quarter (Datum Proveden)
         * Date Attribute ID: datum_proveden.quarter.in.year
         */ Quarter: {
            ref: idRef("datum_proveden.quarter.in.year", "attribute"),
            identifier: "datum_proveden.quarter.in.year",
            /**
             * Display Form Title: default (Datum Proveden)
             * Display Form ID: datum_proveden.quarter.in.year.default
             */ Default: newAttribute("datum_proveden.quarter.in.year.default"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Datum Proveden)
         * Date Attribute ID: datum_proveden.week
         */ WeekSunSatYear: {
            ref: idRef("datum_proveden.week", "attribute"),
            identifier: "datum_proveden.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Datum Proveden)
             * Display Form ID: datum_proveden.week.wk_year
             */ WeekNrYear: newAttribute("datum_proveden.week.wk_year"),
            /**
             * Display Form Title: Week Starting (Datum Proveden)
             * Display Form ID: datum_proveden.week.starting
             */ WeekStarting: newAttribute("datum_proveden.week.starting"),
            /**
             * Display Form Title: From - To (Datum Proveden)
             * Display Form ID: datum_proveden.week.from_to
             */ FromTo: newAttribute("datum_proveden.week.from_to"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Datum Proveden)
             * Display Form ID: datum_proveden.week.wk_year_cont
             */ WeekNrYear_1: newAttribute("datum_proveden.week.wk_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Datum Proveden)
             * Display Form ID: datum_proveden.week.wk_qtr_year_cont
             */ WkQtrYear: newAttribute("datum_proveden.week.wk_qtr_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Datum Proveden)
             * Display Form ID: datum_proveden.week.wk_qtr_year
             */ WkQtrYear_1: newAttribute("datum_proveden.week.wk_qtr_year"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Datum Proveden)
         * Date Attribute ID: datum_proveden.week.in.year
         */ WeekSunSat: {
            ref: idRef("datum_proveden.week.in.year", "attribute"),
            identifier: "datum_proveden.week.in.year",
            /**
             * Display Form Title: Number US (Datum Proveden)
             * Display Form ID: datum_proveden.week.in.year.number_us
             */ NumberUS: newAttribute("datum_proveden.week.in.year.number_us"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Datum Proveden)
         * Date Attribute ID: datum_proveden.week.in.quarter
         */ WeekSunSatOfQtr: {
            ref: idRef("datum_proveden.week.in.quarter", "attribute"),
            identifier: "datum_proveden.week.in.quarter",
            /**
             * Display Form Title: Number US (Datum Proveden)
             * Display Form ID: datum_proveden.week.in.quarter.number_us
             */ NumberUS: newAttribute("datum_proveden.week.in.quarter.number_us"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Datum Proveden)
         * Date Attribute ID: datum_proveden.euweek
         */ WeekMonSunYear: {
            ref: idRef("datum_proveden.euweek", "attribute"),
            identifier: "datum_proveden.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Datum Proveden)
             * Display Form ID: datum_proveden.euweek.wk_year
             */ WeekNrYear: newAttribute("datum_proveden.euweek.wk_year"),
            /**
             * Display Form Title: Week Starting (Datum Proveden)
             * Display Form ID: datum_proveden.euweek.starting
             */ WeekStarting: newAttribute("datum_proveden.euweek.starting"),
            /**
             * Display Form Title: From - To (Datum Proveden)
             * Display Form ID: datum_proveden.euweek.from_to
             */ FromTo: newAttribute("datum_proveden.euweek.from_to"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Datum Proveden)
         * Date Attribute ID: datum_proveden.euweek.in.year
         */ WeekMonSun: {
            ref: idRef("datum_proveden.euweek.in.year", "attribute"),
            identifier: "datum_proveden.euweek.in.year",
            /**
             * Display Form Title: Number EU (Datum Proveden)
             * Display Form ID: datum_proveden.euweek.in.year.number_eu
             */ NumberEU: newAttribute("datum_proveden.euweek.in.year.number_eu"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Datum Proveden)
         * Date Attribute ID: datum_proveden.euweek.in.quarter
         */ WeekMonSunOfQtr: {
            ref: idRef("datum_proveden.euweek.in.quarter", "attribute"),
            identifier: "datum_proveden.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Datum Proveden)
             * Display Form ID: datum_proveden.euweek.in.quarter.number_eu
             */ NumberEU: newAttribute("datum_proveden.euweek.in.quarter.number_eu"),
        },
        /**
         * Date Attribute: Month (Datum Proveden)
         * Date Attribute ID: datum_proveden.month.in.year
         */ Month: {
            ref: idRef("datum_proveden.month.in.year", "attribute"),
            identifier: "datum_proveden.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Datum Proveden)
             * Display Form ID: datum_proveden.month.in.year.short
             */ Short: newAttribute("datum_proveden.month.in.year.short"),
            /**
             * Display Form Title: Long (January) (Datum Proveden)
             * Display Form ID: datum_proveden.month.in.year.long
             */ Long: newAttribute("datum_proveden.month.in.year.long"),
            /**
             * Display Form Title: Number (M1) (Datum Proveden)
             * Display Form ID: datum_proveden.month.in.year.number
             */ Number: newAttribute("datum_proveden.month.in.year.number"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Datum Proveden)
             * Display Form ID: datum_proveden.month.in.year.m_q
             */ MQ: newAttribute("datum_proveden.month.in.year.m_q"),
        },
        /**
         * Date Attribute: Month of Quarter (Datum Proveden)
         * Date Attribute ID: datum_proveden.month.in.quarter
         */ MonthOfQuarter: {
            ref: idRef("datum_proveden.month.in.quarter", "attribute"),
            identifier: "datum_proveden.month.in.quarter",
            /**
             * Display Form Title: Number (Datum Proveden)
             * Display Form ID: datum_proveden.month.in.quarter.number
             */ Number: newAttribute("datum_proveden.month.in.quarter.number"),
        },
        /**
         * Date Attribute: Day of Year (Datum Proveden)
         * Date Attribute ID: datum_proveden.day.in.year
         */ DayOfYear: {
            ref: idRef("datum_proveden.day.in.year", "attribute"),
            identifier: "datum_proveden.day.in.year",
            /**
             * Display Form Title: default (Datum Proveden)
             * Display Form ID: datum_proveden.day.in.year.default
             */ Default: newAttribute("datum_proveden.day.in.year.default"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Datum Proveden)
         * Date Attribute ID: datum_proveden.day.in.week
         */ DayOfWeekSunSat: {
            ref: idRef("datum_proveden.day.in.week", "attribute"),
            identifier: "datum_proveden.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Datum Proveden)
             * Display Form ID: datum_proveden.day.in.week.short
             */ Short: newAttribute("datum_proveden.day.in.week.short"),
            /**
             * Display Form Title: Long (Sunday) (Datum Proveden)
             * Display Form ID: datum_proveden.day.in.week.long
             */ Long: newAttribute("datum_proveden.day.in.week.long"),
            /**
             * Display Form Title: Number (1=Sunday) (Datum Proveden)
             * Display Form ID: datum_proveden.day.in.week.number
             */ Number: newAttribute("datum_proveden.day.in.week.number"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Datum Proveden)
         * Date Attribute ID: datum_proveden.day.in.euweek
         */ DayOfWeekMonSun: {
            ref: idRef("datum_proveden.day.in.euweek", "attribute"),
            identifier: "datum_proveden.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Datum Proveden)
             * Display Form ID: datum_proveden.day.in.euweek.short
             */ Short: newAttribute("datum_proveden.day.in.euweek.short"),
            /**
             * Display Form Title: Long (Monday) (Datum Proveden)
             * Display Form ID: datum_proveden.day.in.euweek.long
             */ Long: newAttribute("datum_proveden.day.in.euweek.long"),
            /**
             * Display Form Title: Number (1=Monday) (Datum Proveden)
             * Display Form ID: datum_proveden.day.in.euweek.number
             */ Number: newAttribute("datum_proveden.day.in.euweek.number"),
        },
        /**
         * Date Attribute: Day of Quarter (Datum Proveden)
         * Date Attribute ID: datum_proveden.day.in.quarter
         */ DayOfQuarter: {
            ref: idRef("datum_proveden.day.in.quarter", "attribute"),
            identifier: "datum_proveden.day.in.quarter",
            /**
             * Display Form Title: default (Datum Proveden)
             * Display Form ID: datum_proveden.day.in.quarter.default
             */ Default: newAttribute("datum_proveden.day.in.quarter.default"),
        },
        /**
         * Date Attribute: Day of Month (Datum Proveden)
         * Date Attribute ID: datum_proveden.day.in.month
         */ DayOfMonth: {
            ref: idRef("datum_proveden.day.in.month", "attribute"),
            identifier: "datum_proveden.day.in.month",
            /**
             * Display Form Title: default (Datum Proveden)
             * Display Form ID: datum_proveden.day.in.month.default
             */ Default: newAttribute("datum_proveden.day.in.month.default"),
        },
        /**
         * Date Attribute: Quarter/Year (Datum Proveden)
         * Date Attribute ID: datum_proveden.quarter
         */ QuarterYear: {
            ref: idRef("datum_proveden.quarter", "attribute"),
            identifier: "datum_proveden.quarter",
            /**
             * Display Form Title: US Short (Datum Proveden)
             * Display Form ID: datum_proveden.quarter.short_us
             */ USShort: newAttribute("datum_proveden.quarter.short_us"),
        },
        /**
         * Date Attribute: Month/Year (Datum Proveden)
         * Date Attribute ID: datum_proveden.month
         */ MonthYear: {
            ref: idRef("datum_proveden.month", "attribute"),
            identifier: "datum_proveden.month",
            /**
             * Display Form Title: Short (Jan 2010) (Datum Proveden)
             * Display Form ID: datum_proveden.month.short
             */ Short: newAttribute("datum_proveden.month.short"),
            /**
             * Display Form Title: Long (January 2010) (Datum Proveden)
             * Display Form ID: datum_proveden.month.long
             */ Long: newAttribute("datum_proveden.month.long"),
            /**
             * Display Form Title: Number (1/2010) (Datum Proveden)
             * Display Form ID: datum_proveden.month.number
             */ Number: newAttribute("datum_proveden.month.number"),
        },
        /**
         * Date Attribute: Date (Datum Proveden)
         * Date Attribute ID: datum_proveden.date
         */ Date: {
            ref: idRef("datum_proveden.date", "attribute"),
            identifier: "datum_proveden.date",
            /**
             * Display Form Title: mm/dd/yyyy (Datum Proveden)
             * Display Form ID: datum_proveden.date.day.us.mm_dd_yyyy
             */ MmDdYyyy: newAttribute("datum_proveden.date.day.us.mm_dd_yyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Datum Proveden)
             * Display Form ID: datum_proveden.date.day.yyyy_mm_dd
             */ YyyyMmDd: newAttribute("datum_proveden.date.day.yyyy_mm_dd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Datum Proveden)
             * Display Form ID: datum_proveden.date.day.us.m_d_yy
             */ MDYy: newAttribute("datum_proveden.date.day.us.m_d_yy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Datum Proveden)
             * Display Form ID: datum_proveden.date.day.us.long
             */ Long: newAttribute("datum_proveden.date.day.us.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Datum Proveden)
             * Display Form ID: datum_proveden.date.day.uk.dd_mm_yyyy
             */ DdMmYyyy: newAttribute("datum_proveden.date.day.uk.dd_mm_yyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Datum Proveden)
             * Display Form ID: datum_proveden.date.day.eu.dd_mm_yyyy
             */ DdMmYyyy_1: newAttribute("datum_proveden.date.day.eu.dd_mm_yyyy"),
        },
        /**
         * Date Attribute: US Week Year (Datum Proveden)
         * Date Attribute ID: datum_proveden.year.for.week
         */ USWeekYear: {
            ref: idRef("datum_proveden.year.for.week", "attribute"),
            identifier: "datum_proveden.year.for.week",
            /**
             * Display Form Title: Week Year (Datum Proveden)
             * Display Form ID: datum_proveden.year.for.week.number
             */ WeekYear: newAttribute("datum_proveden.year.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Year (Datum Proveden)
         * Date Attribute ID: datum_proveden.year.for.euweek
         */ EUWeekYear: {
            ref: idRef("datum_proveden.year.for.euweek", "attribute"),
            identifier: "datum_proveden.year.for.euweek",
            /**
             * Display Form Title: Week Year (Datum Proveden)
             * Display Form ID: datum_proveden.year.for.euweek.number
             */ WeekYear: newAttribute("datum_proveden.year.for.euweek.number"),
        },
        /**
         * Date Attribute: US Week Quarter (Datum Proveden)
         * Date Attribute ID: datum_proveden.quarter.for.week
         */ USWeekQuarter: {
            ref: idRef("datum_proveden.quarter.for.week", "attribute"),
            identifier: "datum_proveden.quarter.for.week",
            /**
             * Display Form Title: Week Quarter (Datum Proveden)
             * Display Form ID: datum_proveden.quarter.for.week.number
             */ WeekQuarter: newAttribute("datum_proveden.quarter.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Quarter (Datum Proveden)
         * Date Attribute ID: datum_proveden.quarter.for.euweek
         */ EUWeekQuarter: {
            ref: idRef("datum_proveden.quarter.for.euweek", "attribute"),
            identifier: "datum_proveden.quarter.for.euweek",
            /**
             * Display Form Title: Week Quarter (Datum Proveden)
             * Display Form ID: datum_proveden.quarter.for.euweek.number
             */ WeekQuarter: newAttribute("datum_proveden.quarter.for.euweek.number"),
        },
    },
    /**
     * Date Data Set Title: Date (Datum Za Tov N)
     * Date Data Set ID: datum_za_tov_n.dataset.dt
     */ DatumZaTovN: {
        ref: idRef("datum_za_tov_n.dataset.dt", "dataSet"),
        identifier: "datum_za_tov_n.dataset.dt",
        /**
         * Date Attribute: Year (Datum Za Tov N)
         * Date Attribute ID: datum_za_tov_n.year
         */ Year: {
            ref: idRef("datum_za_tov_n.year", "attribute"),
            identifier: "datum_za_tov_n.year",
            /**
             * Display Form Title: Year (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.year.default
             */ Default: newAttribute("datum_za_tov_n.year.default"),
        },
        /**
         * Date Attribute: Quarter (Datum Za Tov N)
         * Date Attribute ID: datum_za_tov_n.quarter.in.year
         */ Quarter: {
            ref: idRef("datum_za_tov_n.quarter.in.year", "attribute"),
            identifier: "datum_za_tov_n.quarter.in.year",
            /**
             * Display Form Title: default (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.quarter.in.year.default
             */ Default: newAttribute("datum_za_tov_n.quarter.in.year.default"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Datum Za Tov N)
         * Date Attribute ID: datum_za_tov_n.week
         */ WeekSunSatYear: {
            ref: idRef("datum_za_tov_n.week", "attribute"),
            identifier: "datum_za_tov_n.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.week.wk_year
             */ WeekNrYear: newAttribute("datum_za_tov_n.week.wk_year"),
            /**
             * Display Form Title: Week Starting (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.week.starting
             */ WeekStarting: newAttribute("datum_za_tov_n.week.starting"),
            /**
             * Display Form Title: From - To (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.week.from_to
             */ FromTo: newAttribute("datum_za_tov_n.week.from_to"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.week.wk_year_cont
             */ WeekNrYear_1: newAttribute("datum_za_tov_n.week.wk_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.week.wk_qtr_year_cont
             */ WkQtrYear: newAttribute("datum_za_tov_n.week.wk_qtr_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.week.wk_qtr_year
             */ WkQtrYear_1: newAttribute("datum_za_tov_n.week.wk_qtr_year"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Datum Za Tov N)
         * Date Attribute ID: datum_za_tov_n.week.in.year
         */ WeekSunSat: {
            ref: idRef("datum_za_tov_n.week.in.year", "attribute"),
            identifier: "datum_za_tov_n.week.in.year",
            /**
             * Display Form Title: Number US (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.week.in.year.number_us
             */ NumberUS: newAttribute("datum_za_tov_n.week.in.year.number_us"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Datum Za Tov N)
         * Date Attribute ID: datum_za_tov_n.week.in.quarter
         */ WeekSunSatOfQtr: {
            ref: idRef("datum_za_tov_n.week.in.quarter", "attribute"),
            identifier: "datum_za_tov_n.week.in.quarter",
            /**
             * Display Form Title: Number US (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.week.in.quarter.number_us
             */ NumberUS: newAttribute("datum_za_tov_n.week.in.quarter.number_us"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Datum Za Tov N)
         * Date Attribute ID: datum_za_tov_n.euweek
         */ WeekMonSunYear: {
            ref: idRef("datum_za_tov_n.euweek", "attribute"),
            identifier: "datum_za_tov_n.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.euweek.wk_year
             */ WeekNrYear: newAttribute("datum_za_tov_n.euweek.wk_year"),
            /**
             * Display Form Title: Week Starting (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.euweek.starting
             */ WeekStarting: newAttribute("datum_za_tov_n.euweek.starting"),
            /**
             * Display Form Title: From - To (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.euweek.from_to
             */ FromTo: newAttribute("datum_za_tov_n.euweek.from_to"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Datum Za Tov N)
         * Date Attribute ID: datum_za_tov_n.euweek.in.year
         */ WeekMonSun: {
            ref: idRef("datum_za_tov_n.euweek.in.year", "attribute"),
            identifier: "datum_za_tov_n.euweek.in.year",
            /**
             * Display Form Title: Number EU (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.euweek.in.year.number_eu
             */ NumberEU: newAttribute("datum_za_tov_n.euweek.in.year.number_eu"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Datum Za Tov N)
         * Date Attribute ID: datum_za_tov_n.euweek.in.quarter
         */ WeekMonSunOfQtr: {
            ref: idRef("datum_za_tov_n.euweek.in.quarter", "attribute"),
            identifier: "datum_za_tov_n.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.euweek.in.quarter.number_eu
             */ NumberEU: newAttribute("datum_za_tov_n.euweek.in.quarter.number_eu"),
        },
        /**
         * Date Attribute: Month (Datum Za Tov N)
         * Date Attribute ID: datum_za_tov_n.month.in.year
         */ Month: {
            ref: idRef("datum_za_tov_n.month.in.year", "attribute"),
            identifier: "datum_za_tov_n.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.month.in.year.short
             */ Short: newAttribute("datum_za_tov_n.month.in.year.short"),
            /**
             * Display Form Title: Long (January) (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.month.in.year.long
             */ Long: newAttribute("datum_za_tov_n.month.in.year.long"),
            /**
             * Display Form Title: Number (M1) (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.month.in.year.number
             */ Number: newAttribute("datum_za_tov_n.month.in.year.number"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.month.in.year.m_q
             */ MQ: newAttribute("datum_za_tov_n.month.in.year.m_q"),
        },
        /**
         * Date Attribute: Month of Quarter (Datum Za Tov N)
         * Date Attribute ID: datum_za_tov_n.month.in.quarter
         */ MonthOfQuarter: {
            ref: idRef("datum_za_tov_n.month.in.quarter", "attribute"),
            identifier: "datum_za_tov_n.month.in.quarter",
            /**
             * Display Form Title: Number (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.month.in.quarter.number
             */ Number: newAttribute("datum_za_tov_n.month.in.quarter.number"),
        },
        /**
         * Date Attribute: Day of Year (Datum Za Tov N)
         * Date Attribute ID: datum_za_tov_n.day.in.year
         */ DayOfYear: {
            ref: idRef("datum_za_tov_n.day.in.year", "attribute"),
            identifier: "datum_za_tov_n.day.in.year",
            /**
             * Display Form Title: default (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.day.in.year.default
             */ Default: newAttribute("datum_za_tov_n.day.in.year.default"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Datum Za Tov N)
         * Date Attribute ID: datum_za_tov_n.day.in.week
         */ DayOfWeekSunSat: {
            ref: idRef("datum_za_tov_n.day.in.week", "attribute"),
            identifier: "datum_za_tov_n.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.day.in.week.short
             */ Short: newAttribute("datum_za_tov_n.day.in.week.short"),
            /**
             * Display Form Title: Long (Sunday) (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.day.in.week.long
             */ Long: newAttribute("datum_za_tov_n.day.in.week.long"),
            /**
             * Display Form Title: Number (1=Sunday) (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.day.in.week.number
             */ Number: newAttribute("datum_za_tov_n.day.in.week.number"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Datum Za Tov N)
         * Date Attribute ID: datum_za_tov_n.day.in.euweek
         */ DayOfWeekMonSun: {
            ref: idRef("datum_za_tov_n.day.in.euweek", "attribute"),
            identifier: "datum_za_tov_n.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.day.in.euweek.short
             */ Short: newAttribute("datum_za_tov_n.day.in.euweek.short"),
            /**
             * Display Form Title: Long (Monday) (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.day.in.euweek.long
             */ Long: newAttribute("datum_za_tov_n.day.in.euweek.long"),
            /**
             * Display Form Title: Number (1=Monday) (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.day.in.euweek.number
             */ Number: newAttribute("datum_za_tov_n.day.in.euweek.number"),
        },
        /**
         * Date Attribute: Day of Quarter (Datum Za Tov N)
         * Date Attribute ID: datum_za_tov_n.day.in.quarter
         */ DayOfQuarter: {
            ref: idRef("datum_za_tov_n.day.in.quarter", "attribute"),
            identifier: "datum_za_tov_n.day.in.quarter",
            /**
             * Display Form Title: default (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.day.in.quarter.default
             */ Default: newAttribute("datum_za_tov_n.day.in.quarter.default"),
        },
        /**
         * Date Attribute: Day of Month (Datum Za Tov N)
         * Date Attribute ID: datum_za_tov_n.day.in.month
         */ DayOfMonth: {
            ref: idRef("datum_za_tov_n.day.in.month", "attribute"),
            identifier: "datum_za_tov_n.day.in.month",
            /**
             * Display Form Title: default (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.day.in.month.default
             */ Default: newAttribute("datum_za_tov_n.day.in.month.default"),
        },
        /**
         * Date Attribute: Quarter/Year (Datum Za Tov N)
         * Date Attribute ID: datum_za_tov_n.quarter
         */ QuarterYear: {
            ref: idRef("datum_za_tov_n.quarter", "attribute"),
            identifier: "datum_za_tov_n.quarter",
            /**
             * Display Form Title: US Short (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.quarter.short_us
             */ USShort: newAttribute("datum_za_tov_n.quarter.short_us"),
        },
        /**
         * Date Attribute: Month/Year (Datum Za Tov N)
         * Date Attribute ID: datum_za_tov_n.month
         */ MonthYear: {
            ref: idRef("datum_za_tov_n.month", "attribute"),
            identifier: "datum_za_tov_n.month",
            /**
             * Display Form Title: Short (Jan 2010) (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.month.short
             */ Short: newAttribute("datum_za_tov_n.month.short"),
            /**
             * Display Form Title: Long (January 2010) (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.month.long
             */ Long: newAttribute("datum_za_tov_n.month.long"),
            /**
             * Display Form Title: Number (1/2010) (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.month.number
             */ Number: newAttribute("datum_za_tov_n.month.number"),
        },
        /**
         * Date Attribute: Date (Datum Za Tov N)
         * Date Attribute ID: datum_za_tov_n.date
         */ Date: {
            ref: idRef("datum_za_tov_n.date", "attribute"),
            identifier: "datum_za_tov_n.date",
            /**
             * Display Form Title: mm/dd/yyyy (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.date.day.us.mm_dd_yyyy
             */ MmDdYyyy: newAttribute("datum_za_tov_n.date.day.us.mm_dd_yyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.date.day.yyyy_mm_dd
             */ YyyyMmDd: newAttribute("datum_za_tov_n.date.day.yyyy_mm_dd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.date.day.us.m_d_yy
             */ MDYy: newAttribute("datum_za_tov_n.date.day.us.m_d_yy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.date.day.us.long
             */ Long: newAttribute("datum_za_tov_n.date.day.us.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.date.day.uk.dd_mm_yyyy
             */ DdMmYyyy: newAttribute("datum_za_tov_n.date.day.uk.dd_mm_yyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.date.day.eu.dd_mm_yyyy
             */ DdMmYyyy_1: newAttribute("datum_za_tov_n.date.day.eu.dd_mm_yyyy"),
        },
        /**
         * Date Attribute: US Week Year (Datum Za Tov N)
         * Date Attribute ID: datum_za_tov_n.year.for.week
         */ USWeekYear: {
            ref: idRef("datum_za_tov_n.year.for.week", "attribute"),
            identifier: "datum_za_tov_n.year.for.week",
            /**
             * Display Form Title: Week Year (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.year.for.week.number
             */ WeekYear: newAttribute("datum_za_tov_n.year.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Year (Datum Za Tov N)
         * Date Attribute ID: datum_za_tov_n.year.for.euweek
         */ EUWeekYear: {
            ref: idRef("datum_za_tov_n.year.for.euweek", "attribute"),
            identifier: "datum_za_tov_n.year.for.euweek",
            /**
             * Display Form Title: Week Year (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.year.for.euweek.number
             */ WeekYear: newAttribute("datum_za_tov_n.year.for.euweek.number"),
        },
        /**
         * Date Attribute: US Week Quarter (Datum Za Tov N)
         * Date Attribute ID: datum_za_tov_n.quarter.for.week
         */ USWeekQuarter: {
            ref: idRef("datum_za_tov_n.quarter.for.week", "attribute"),
            identifier: "datum_za_tov_n.quarter.for.week",
            /**
             * Display Form Title: Week Quarter (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.quarter.for.week.number
             */ WeekQuarter: newAttribute("datum_za_tov_n.quarter.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Quarter (Datum Za Tov N)
         * Date Attribute ID: datum_za_tov_n.quarter.for.euweek
         */ EUWeekQuarter: {
            ref: idRef("datum_za_tov_n.quarter.for.euweek", "attribute"),
            identifier: "datum_za_tov_n.quarter.for.euweek",
            /**
             * Display Form Title: Week Quarter (Datum Za Tov N)
             * Display Form ID: datum_za_tov_n.quarter.for.euweek.number
             */ WeekQuarter: newAttribute("datum_za_tov_n.quarter.for.euweek.number"),
        },
    },
    /**
     * Date Data Set Title: Date (Paydate1)
     * Date Data Set ID: paydate1.dataset.dt
     */ Paydate1: {
        ref: idRef("paydate1.dataset.dt", "dataSet"),
        identifier: "paydate1.dataset.dt",
        /**
         * Date Attribute: Year (Paydate1)
         * Date Attribute ID: paydate1.year
         */ Year: {
            ref: idRef("paydate1.year", "attribute"),
            identifier: "paydate1.year",
            /**
             * Display Form Title: Year (Paydate1)
             * Display Form ID: paydate1.year.default
             */ Default: newAttribute("paydate1.year.default"),
        },
        /**
         * Date Attribute: Quarter (Paydate1)
         * Date Attribute ID: paydate1.quarter.in.year
         */ Quarter: {
            ref: idRef("paydate1.quarter.in.year", "attribute"),
            identifier: "paydate1.quarter.in.year",
            /**
             * Display Form Title: default (Paydate1)
             * Display Form ID: paydate1.quarter.in.year.default
             */ Default: newAttribute("paydate1.quarter.in.year.default"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Paydate1)
         * Date Attribute ID: paydate1.week
         */ WeekSunSatYear: {
            ref: idRef("paydate1.week", "attribute"),
            identifier: "paydate1.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Paydate1)
             * Display Form ID: paydate1.week.wk_year
             */ WeekNrYear: newAttribute("paydate1.week.wk_year"),
            /**
             * Display Form Title: Week Starting (Paydate1)
             * Display Form ID: paydate1.week.starting
             */ WeekStarting: newAttribute("paydate1.week.starting"),
            /**
             * Display Form Title: From - To (Paydate1)
             * Display Form ID: paydate1.week.from_to
             */ FromTo: newAttribute("paydate1.week.from_to"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Paydate1)
             * Display Form ID: paydate1.week.wk_year_cont
             */ WeekNrYear_1: newAttribute("paydate1.week.wk_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Paydate1)
             * Display Form ID: paydate1.week.wk_qtr_year_cont
             */ WkQtrYear: newAttribute("paydate1.week.wk_qtr_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Paydate1)
             * Display Form ID: paydate1.week.wk_qtr_year
             */ WkQtrYear_1: newAttribute("paydate1.week.wk_qtr_year"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Paydate1)
         * Date Attribute ID: paydate1.week.in.year
         */ WeekSunSat: {
            ref: idRef("paydate1.week.in.year", "attribute"),
            identifier: "paydate1.week.in.year",
            /**
             * Display Form Title: Number US (Paydate1)
             * Display Form ID: paydate1.week.in.year.number_us
             */ NumberUS: newAttribute("paydate1.week.in.year.number_us"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Paydate1)
         * Date Attribute ID: paydate1.week.in.quarter
         */ WeekSunSatOfQtr: {
            ref: idRef("paydate1.week.in.quarter", "attribute"),
            identifier: "paydate1.week.in.quarter",
            /**
             * Display Form Title: Number US (Paydate1)
             * Display Form ID: paydate1.week.in.quarter.number_us
             */ NumberUS: newAttribute("paydate1.week.in.quarter.number_us"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Paydate1)
         * Date Attribute ID: paydate1.euweek
         */ WeekMonSunYear: {
            ref: idRef("paydate1.euweek", "attribute"),
            identifier: "paydate1.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Paydate1)
             * Display Form ID: paydate1.euweek.wk_year
             */ WeekNrYear: newAttribute("paydate1.euweek.wk_year"),
            /**
             * Display Form Title: Week Starting (Paydate1)
             * Display Form ID: paydate1.euweek.starting
             */ WeekStarting: newAttribute("paydate1.euweek.starting"),
            /**
             * Display Form Title: From - To (Paydate1)
             * Display Form ID: paydate1.euweek.from_to
             */ FromTo: newAttribute("paydate1.euweek.from_to"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Paydate1)
         * Date Attribute ID: paydate1.euweek.in.year
         */ WeekMonSun: {
            ref: idRef("paydate1.euweek.in.year", "attribute"),
            identifier: "paydate1.euweek.in.year",
            /**
             * Display Form Title: Number EU (Paydate1)
             * Display Form ID: paydate1.euweek.in.year.number_eu
             */ NumberEU: newAttribute("paydate1.euweek.in.year.number_eu"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Paydate1)
         * Date Attribute ID: paydate1.euweek.in.quarter
         */ WeekMonSunOfQtr: {
            ref: idRef("paydate1.euweek.in.quarter", "attribute"),
            identifier: "paydate1.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Paydate1)
             * Display Form ID: paydate1.euweek.in.quarter.number_eu
             */ NumberEU: newAttribute("paydate1.euweek.in.quarter.number_eu"),
        },
        /**
         * Date Attribute: Month (Paydate1)
         * Date Attribute ID: paydate1.month.in.year
         */ Month: {
            ref: idRef("paydate1.month.in.year", "attribute"),
            identifier: "paydate1.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Paydate1)
             * Display Form ID: paydate1.month.in.year.short
             */ Short: newAttribute("paydate1.month.in.year.short"),
            /**
             * Display Form Title: Long (January) (Paydate1)
             * Display Form ID: paydate1.month.in.year.long
             */ Long: newAttribute("paydate1.month.in.year.long"),
            /**
             * Display Form Title: Number (M1) (Paydate1)
             * Display Form ID: paydate1.month.in.year.number
             */ Number: newAttribute("paydate1.month.in.year.number"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Paydate1)
             * Display Form ID: paydate1.month.in.year.m_q
             */ MQ: newAttribute("paydate1.month.in.year.m_q"),
        },
        /**
         * Date Attribute: Month of Quarter (Paydate1)
         * Date Attribute ID: paydate1.month.in.quarter
         */ MonthOfQuarter: {
            ref: idRef("paydate1.month.in.quarter", "attribute"),
            identifier: "paydate1.month.in.quarter",
            /**
             * Display Form Title: Number (Paydate1)
             * Display Form ID: paydate1.month.in.quarter.number
             */ Number: newAttribute("paydate1.month.in.quarter.number"),
        },
        /**
         * Date Attribute: Day of Year (Paydate1)
         * Date Attribute ID: paydate1.day.in.year
         */ DayOfYear: {
            ref: idRef("paydate1.day.in.year", "attribute"),
            identifier: "paydate1.day.in.year",
            /**
             * Display Form Title: default (Paydate1)
             * Display Form ID: paydate1.day.in.year.default
             */ Default: newAttribute("paydate1.day.in.year.default"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Paydate1)
         * Date Attribute ID: paydate1.day.in.week
         */ DayOfWeekSunSat: {
            ref: idRef("paydate1.day.in.week", "attribute"),
            identifier: "paydate1.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Paydate1)
             * Display Form ID: paydate1.day.in.week.short
             */ Short: newAttribute("paydate1.day.in.week.short"),
            /**
             * Display Form Title: Long (Sunday) (Paydate1)
             * Display Form ID: paydate1.day.in.week.long
             */ Long: newAttribute("paydate1.day.in.week.long"),
            /**
             * Display Form Title: Number (1=Sunday) (Paydate1)
             * Display Form ID: paydate1.day.in.week.number
             */ Number: newAttribute("paydate1.day.in.week.number"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Paydate1)
         * Date Attribute ID: paydate1.day.in.euweek
         */ DayOfWeekMonSun: {
            ref: idRef("paydate1.day.in.euweek", "attribute"),
            identifier: "paydate1.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Paydate1)
             * Display Form ID: paydate1.day.in.euweek.short
             */ Short: newAttribute("paydate1.day.in.euweek.short"),
            /**
             * Display Form Title: Long (Monday) (Paydate1)
             * Display Form ID: paydate1.day.in.euweek.long
             */ Long: newAttribute("paydate1.day.in.euweek.long"),
            /**
             * Display Form Title: Number (1=Monday) (Paydate1)
             * Display Form ID: paydate1.day.in.euweek.number
             */ Number: newAttribute("paydate1.day.in.euweek.number"),
        },
        /**
         * Date Attribute: Day of Quarter (Paydate1)
         * Date Attribute ID: paydate1.day.in.quarter
         */ DayOfQuarter: {
            ref: idRef("paydate1.day.in.quarter", "attribute"),
            identifier: "paydate1.day.in.quarter",
            /**
             * Display Form Title: default (Paydate1)
             * Display Form ID: paydate1.day.in.quarter.default
             */ Default: newAttribute("paydate1.day.in.quarter.default"),
        },
        /**
         * Date Attribute: Day of Month (Paydate1)
         * Date Attribute ID: paydate1.day.in.month
         */ DayOfMonth: {
            ref: idRef("paydate1.day.in.month", "attribute"),
            identifier: "paydate1.day.in.month",
            /**
             * Display Form Title: default (Paydate1)
             * Display Form ID: paydate1.day.in.month.default
             */ Default: newAttribute("paydate1.day.in.month.default"),
        },
        /**
         * Date Attribute: Quarter/Year (Paydate1)
         * Date Attribute ID: paydate1.quarter
         */ QuarterYear: {
            ref: idRef("paydate1.quarter", "attribute"),
            identifier: "paydate1.quarter",
            /**
             * Display Form Title: US Short (Paydate1)
             * Display Form ID: paydate1.quarter.short_us
             */ USShort: newAttribute("paydate1.quarter.short_us"),
        },
        /**
         * Date Attribute: Month/Year (Paydate1)
         * Date Attribute ID: paydate1.month
         */ MonthYear: {
            ref: idRef("paydate1.month", "attribute"),
            identifier: "paydate1.month",
            /**
             * Display Form Title: Short (Jan 2010) (Paydate1)
             * Display Form ID: paydate1.month.short
             */ Short: newAttribute("paydate1.month.short"),
            /**
             * Display Form Title: Long (January 2010) (Paydate1)
             * Display Form ID: paydate1.month.long
             */ Long: newAttribute("paydate1.month.long"),
            /**
             * Display Form Title: Number (1/2010) (Paydate1)
             * Display Form ID: paydate1.month.number
             */ Number: newAttribute("paydate1.month.number"),
        },
        /**
         * Date Attribute: Date (Paydate1)
         * Date Attribute ID: paydate1.date
         */ Date: {
            ref: idRef("paydate1.date", "attribute"),
            identifier: "paydate1.date",
            /**
             * Display Form Title: mm/dd/yyyy (Paydate1)
             * Display Form ID: paydate1.date.day.us.mm_dd_yyyy
             */ MmDdYyyy: newAttribute("paydate1.date.day.us.mm_dd_yyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Paydate1)
             * Display Form ID: paydate1.date.day.yyyy_mm_dd
             */ YyyyMmDd: newAttribute("paydate1.date.day.yyyy_mm_dd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Paydate1)
             * Display Form ID: paydate1.date.day.us.m_d_yy
             */ MDYy: newAttribute("paydate1.date.day.us.m_d_yy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Paydate1)
             * Display Form ID: paydate1.date.day.us.long
             */ Long: newAttribute("paydate1.date.day.us.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Paydate1)
             * Display Form ID: paydate1.date.day.uk.dd_mm_yyyy
             */ DdMmYyyy: newAttribute("paydate1.date.day.uk.dd_mm_yyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Paydate1)
             * Display Form ID: paydate1.date.day.eu.dd_mm_yyyy
             */ DdMmYyyy_1: newAttribute("paydate1.date.day.eu.dd_mm_yyyy"),
        },
        /**
         * Date Attribute: US Week Year (Paydate1)
         * Date Attribute ID: paydate1.year.for.week
         */ USWeekYear: {
            ref: idRef("paydate1.year.for.week", "attribute"),
            identifier: "paydate1.year.for.week",
            /**
             * Display Form Title: Week Year (Paydate1)
             * Display Form ID: paydate1.year.for.week.number
             */ WeekYear: newAttribute("paydate1.year.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Year (Paydate1)
         * Date Attribute ID: paydate1.year.for.euweek
         */ EUWeekYear: {
            ref: idRef("paydate1.year.for.euweek", "attribute"),
            identifier: "paydate1.year.for.euweek",
            /**
             * Display Form Title: Week Year (Paydate1)
             * Display Form ID: paydate1.year.for.euweek.number
             */ WeekYear: newAttribute("paydate1.year.for.euweek.number"),
        },
        /**
         * Date Attribute: US Week Quarter (Paydate1)
         * Date Attribute ID: paydate1.quarter.for.week
         */ USWeekQuarter: {
            ref: idRef("paydate1.quarter.for.week", "attribute"),
            identifier: "paydate1.quarter.for.week",
            /**
             * Display Form Title: Week Quarter (Paydate1)
             * Display Form ID: paydate1.quarter.for.week.number
             */ WeekQuarter: newAttribute("paydate1.quarter.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Quarter (Paydate1)
         * Date Attribute ID: paydate1.quarter.for.euweek
         */ EUWeekQuarter: {
            ref: idRef("paydate1.quarter.for.euweek", "attribute"),
            identifier: "paydate1.quarter.for.euweek",
            /**
             * Display Form Title: Week Quarter (Paydate1)
             * Display Form ID: paydate1.quarter.for.euweek.number
             */ WeekQuarter: newAttribute("paydate1.quarter.for.euweek.number"),
        },
    },
    /**
     * Date Data Set Title: Date (Paydate2)
     * Date Data Set ID: paydate2.dataset.dt
     */ Paydate2: {
        ref: idRef("paydate2.dataset.dt", "dataSet"),
        identifier: "paydate2.dataset.dt",
        /**
         * Date Attribute: Year (Paydate2)
         * Date Attribute ID: paydate2.year
         */ Year: {
            ref: idRef("paydate2.year", "attribute"),
            identifier: "paydate2.year",
            /**
             * Display Form Title: Year (Paydate2)
             * Display Form ID: paydate2.year.default
             */ Default: newAttribute("paydate2.year.default"),
        },
        /**
         * Date Attribute: Quarter (Paydate2)
         * Date Attribute ID: paydate2.quarter.in.year
         */ Quarter: {
            ref: idRef("paydate2.quarter.in.year", "attribute"),
            identifier: "paydate2.quarter.in.year",
            /**
             * Display Form Title: default (Paydate2)
             * Display Form ID: paydate2.quarter.in.year.default
             */ Default: newAttribute("paydate2.quarter.in.year.default"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Paydate2)
         * Date Attribute ID: paydate2.week
         */ WeekSunSatYear: {
            ref: idRef("paydate2.week", "attribute"),
            identifier: "paydate2.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Paydate2)
             * Display Form ID: paydate2.week.wk_year
             */ WeekNrYear: newAttribute("paydate2.week.wk_year"),
            /**
             * Display Form Title: Week Starting (Paydate2)
             * Display Form ID: paydate2.week.starting
             */ WeekStarting: newAttribute("paydate2.week.starting"),
            /**
             * Display Form Title: From - To (Paydate2)
             * Display Form ID: paydate2.week.from_to
             */ FromTo: newAttribute("paydate2.week.from_to"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Paydate2)
             * Display Form ID: paydate2.week.wk_year_cont
             */ WeekNrYear_1: newAttribute("paydate2.week.wk_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Paydate2)
             * Display Form ID: paydate2.week.wk_qtr_year_cont
             */ WkQtrYear: newAttribute("paydate2.week.wk_qtr_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Paydate2)
             * Display Form ID: paydate2.week.wk_qtr_year
             */ WkQtrYear_1: newAttribute("paydate2.week.wk_qtr_year"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Paydate2)
         * Date Attribute ID: paydate2.week.in.year
         */ WeekSunSat: {
            ref: idRef("paydate2.week.in.year", "attribute"),
            identifier: "paydate2.week.in.year",
            /**
             * Display Form Title: Number US (Paydate2)
             * Display Form ID: paydate2.week.in.year.number_us
             */ NumberUS: newAttribute("paydate2.week.in.year.number_us"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Paydate2)
         * Date Attribute ID: paydate2.week.in.quarter
         */ WeekSunSatOfQtr: {
            ref: idRef("paydate2.week.in.quarter", "attribute"),
            identifier: "paydate2.week.in.quarter",
            /**
             * Display Form Title: Number US (Paydate2)
             * Display Form ID: paydate2.week.in.quarter.number_us
             */ NumberUS: newAttribute("paydate2.week.in.quarter.number_us"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Paydate2)
         * Date Attribute ID: paydate2.euweek
         */ WeekMonSunYear: {
            ref: idRef("paydate2.euweek", "attribute"),
            identifier: "paydate2.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Paydate2)
             * Display Form ID: paydate2.euweek.wk_year
             */ WeekNrYear: newAttribute("paydate2.euweek.wk_year"),
            /**
             * Display Form Title: Week Starting (Paydate2)
             * Display Form ID: paydate2.euweek.starting
             */ WeekStarting: newAttribute("paydate2.euweek.starting"),
            /**
             * Display Form Title: From - To (Paydate2)
             * Display Form ID: paydate2.euweek.from_to
             */ FromTo: newAttribute("paydate2.euweek.from_to"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Paydate2)
         * Date Attribute ID: paydate2.euweek.in.year
         */ WeekMonSun: {
            ref: idRef("paydate2.euweek.in.year", "attribute"),
            identifier: "paydate2.euweek.in.year",
            /**
             * Display Form Title: Number EU (Paydate2)
             * Display Form ID: paydate2.euweek.in.year.number_eu
             */ NumberEU: newAttribute("paydate2.euweek.in.year.number_eu"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Paydate2)
         * Date Attribute ID: paydate2.euweek.in.quarter
         */ WeekMonSunOfQtr: {
            ref: idRef("paydate2.euweek.in.quarter", "attribute"),
            identifier: "paydate2.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Paydate2)
             * Display Form ID: paydate2.euweek.in.quarter.number_eu
             */ NumberEU: newAttribute("paydate2.euweek.in.quarter.number_eu"),
        },
        /**
         * Date Attribute: Month (Paydate2)
         * Date Attribute ID: paydate2.month.in.year
         */ Month: {
            ref: idRef("paydate2.month.in.year", "attribute"),
            identifier: "paydate2.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Paydate2)
             * Display Form ID: paydate2.month.in.year.short
             */ Short: newAttribute("paydate2.month.in.year.short"),
            /**
             * Display Form Title: Long (January) (Paydate2)
             * Display Form ID: paydate2.month.in.year.long
             */ Long: newAttribute("paydate2.month.in.year.long"),
            /**
             * Display Form Title: Number (M1) (Paydate2)
             * Display Form ID: paydate2.month.in.year.number
             */ Number: newAttribute("paydate2.month.in.year.number"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Paydate2)
             * Display Form ID: paydate2.month.in.year.m_q
             */ MQ: newAttribute("paydate2.month.in.year.m_q"),
        },
        /**
         * Date Attribute: Month of Quarter (Paydate2)
         * Date Attribute ID: paydate2.month.in.quarter
         */ MonthOfQuarter: {
            ref: idRef("paydate2.month.in.quarter", "attribute"),
            identifier: "paydate2.month.in.quarter",
            /**
             * Display Form Title: Number (Paydate2)
             * Display Form ID: paydate2.month.in.quarter.number
             */ Number: newAttribute("paydate2.month.in.quarter.number"),
        },
        /**
         * Date Attribute: Day of Year (Paydate2)
         * Date Attribute ID: paydate2.day.in.year
         */ DayOfYear: {
            ref: idRef("paydate2.day.in.year", "attribute"),
            identifier: "paydate2.day.in.year",
            /**
             * Display Form Title: default (Paydate2)
             * Display Form ID: paydate2.day.in.year.default
             */ Default: newAttribute("paydate2.day.in.year.default"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Paydate2)
         * Date Attribute ID: paydate2.day.in.week
         */ DayOfWeekSunSat: {
            ref: idRef("paydate2.day.in.week", "attribute"),
            identifier: "paydate2.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Paydate2)
             * Display Form ID: paydate2.day.in.week.short
             */ Short: newAttribute("paydate2.day.in.week.short"),
            /**
             * Display Form Title: Long (Sunday) (Paydate2)
             * Display Form ID: paydate2.day.in.week.long
             */ Long: newAttribute("paydate2.day.in.week.long"),
            /**
             * Display Form Title: Number (1=Sunday) (Paydate2)
             * Display Form ID: paydate2.day.in.week.number
             */ Number: newAttribute("paydate2.day.in.week.number"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Paydate2)
         * Date Attribute ID: paydate2.day.in.euweek
         */ DayOfWeekMonSun: {
            ref: idRef("paydate2.day.in.euweek", "attribute"),
            identifier: "paydate2.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Paydate2)
             * Display Form ID: paydate2.day.in.euweek.short
             */ Short: newAttribute("paydate2.day.in.euweek.short"),
            /**
             * Display Form Title: Long (Monday) (Paydate2)
             * Display Form ID: paydate2.day.in.euweek.long
             */ Long: newAttribute("paydate2.day.in.euweek.long"),
            /**
             * Display Form Title: Number (1=Monday) (Paydate2)
             * Display Form ID: paydate2.day.in.euweek.number
             */ Number: newAttribute("paydate2.day.in.euweek.number"),
        },
        /**
         * Date Attribute: Day of Quarter (Paydate2)
         * Date Attribute ID: paydate2.day.in.quarter
         */ DayOfQuarter: {
            ref: idRef("paydate2.day.in.quarter", "attribute"),
            identifier: "paydate2.day.in.quarter",
            /**
             * Display Form Title: default (Paydate2)
             * Display Form ID: paydate2.day.in.quarter.default
             */ Default: newAttribute("paydate2.day.in.quarter.default"),
        },
        /**
         * Date Attribute: Day of Month (Paydate2)
         * Date Attribute ID: paydate2.day.in.month
         */ DayOfMonth: {
            ref: idRef("paydate2.day.in.month", "attribute"),
            identifier: "paydate2.day.in.month",
            /**
             * Display Form Title: default (Paydate2)
             * Display Form ID: paydate2.day.in.month.default
             */ Default: newAttribute("paydate2.day.in.month.default"),
        },
        /**
         * Date Attribute: Quarter/Year (Paydate2)
         * Date Attribute ID: paydate2.quarter
         */ QuarterYear: {
            ref: idRef("paydate2.quarter", "attribute"),
            identifier: "paydate2.quarter",
            /**
             * Display Form Title: US Short (Paydate2)
             * Display Form ID: paydate2.quarter.short_us
             */ USShort: newAttribute("paydate2.quarter.short_us"),
        },
        /**
         * Date Attribute: Month/Year (Paydate2)
         * Date Attribute ID: paydate2.month
         */ MonthYear: {
            ref: idRef("paydate2.month", "attribute"),
            identifier: "paydate2.month",
            /**
             * Display Form Title: Short (Jan 2010) (Paydate2)
             * Display Form ID: paydate2.month.short
             */ Short: newAttribute("paydate2.month.short"),
            /**
             * Display Form Title: Long (January 2010) (Paydate2)
             * Display Form ID: paydate2.month.long
             */ Long: newAttribute("paydate2.month.long"),
            /**
             * Display Form Title: Number (1/2010) (Paydate2)
             * Display Form ID: paydate2.month.number
             */ Number: newAttribute("paydate2.month.number"),
        },
        /**
         * Date Attribute: Date (Paydate2)
         * Date Attribute ID: paydate2.date
         */ Date: {
            ref: idRef("paydate2.date", "attribute"),
            identifier: "paydate2.date",
            /**
             * Display Form Title: mm/dd/yyyy (Paydate2)
             * Display Form ID: paydate2.date.day.us.mm_dd_yyyy
             */ MmDdYyyy: newAttribute("paydate2.date.day.us.mm_dd_yyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Paydate2)
             * Display Form ID: paydate2.date.day.yyyy_mm_dd
             */ YyyyMmDd: newAttribute("paydate2.date.day.yyyy_mm_dd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Paydate2)
             * Display Form ID: paydate2.date.day.us.m_d_yy
             */ MDYy: newAttribute("paydate2.date.day.us.m_d_yy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Paydate2)
             * Display Form ID: paydate2.date.day.us.long
             */ Long: newAttribute("paydate2.date.day.us.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Paydate2)
             * Display Form ID: paydate2.date.day.uk.dd_mm_yyyy
             */ DdMmYyyy: newAttribute("paydate2.date.day.uk.dd_mm_yyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Paydate2)
             * Display Form ID: paydate2.date.day.eu.dd_mm_yyyy
             */ DdMmYyyy_1: newAttribute("paydate2.date.day.eu.dd_mm_yyyy"),
        },
        /**
         * Date Attribute: US Week Year (Paydate2)
         * Date Attribute ID: paydate2.year.for.week
         */ USWeekYear: {
            ref: idRef("paydate2.year.for.week", "attribute"),
            identifier: "paydate2.year.for.week",
            /**
             * Display Form Title: Week Year (Paydate2)
             * Display Form ID: paydate2.year.for.week.number
             */ WeekYear: newAttribute("paydate2.year.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Year (Paydate2)
         * Date Attribute ID: paydate2.year.for.euweek
         */ EUWeekYear: {
            ref: idRef("paydate2.year.for.euweek", "attribute"),
            identifier: "paydate2.year.for.euweek",
            /**
             * Display Form Title: Week Year (Paydate2)
             * Display Form ID: paydate2.year.for.euweek.number
             */ WeekYear: newAttribute("paydate2.year.for.euweek.number"),
        },
        /**
         * Date Attribute: US Week Quarter (Paydate2)
         * Date Attribute ID: paydate2.quarter.for.week
         */ USWeekQuarter: {
            ref: idRef("paydate2.quarter.for.week", "attribute"),
            identifier: "paydate2.quarter.for.week",
            /**
             * Display Form Title: Week Quarter (Paydate2)
             * Display Form ID: paydate2.quarter.for.week.number
             */ WeekQuarter: newAttribute("paydate2.quarter.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Quarter (Paydate2)
         * Date Attribute ID: paydate2.quarter.for.euweek
         */ EUWeekQuarter: {
            ref: idRef("paydate2.quarter.for.euweek", "attribute"),
            identifier: "paydate2.quarter.for.euweek",
            /**
             * Display Form Title: Week Quarter (Paydate2)
             * Display Form ID: paydate2.quarter.for.euweek.number
             */ WeekQuarter: newAttribute("paydate2.quarter.for.euweek.number"),
        },
    },
    /**
     * Date Data Set Title: Date (Paydate3)
     * Date Data Set ID: paydate3.dataset.dt
     */ Paydate3: {
        ref: idRef("paydate3.dataset.dt", "dataSet"),
        identifier: "paydate3.dataset.dt",
        /**
         * Date Attribute: Year (Paydate3)
         * Date Attribute ID: paydate3.year
         */ Year: {
            ref: idRef("paydate3.year", "attribute"),
            identifier: "paydate3.year",
            /**
             * Display Form Title: Year (Paydate3)
             * Display Form ID: paydate3.year.default
             */ Default: newAttribute("paydate3.year.default"),
        },
        /**
         * Date Attribute: Quarter (Paydate3)
         * Date Attribute ID: paydate3.quarter.in.year
         */ Quarter: {
            ref: idRef("paydate3.quarter.in.year", "attribute"),
            identifier: "paydate3.quarter.in.year",
            /**
             * Display Form Title: default (Paydate3)
             * Display Form ID: paydate3.quarter.in.year.default
             */ Default: newAttribute("paydate3.quarter.in.year.default"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Paydate3)
         * Date Attribute ID: paydate3.week
         */ WeekSunSatYear: {
            ref: idRef("paydate3.week", "attribute"),
            identifier: "paydate3.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Paydate3)
             * Display Form ID: paydate3.week.wk_year
             */ WeekNrYear: newAttribute("paydate3.week.wk_year"),
            /**
             * Display Form Title: Week Starting (Paydate3)
             * Display Form ID: paydate3.week.starting
             */ WeekStarting: newAttribute("paydate3.week.starting"),
            /**
             * Display Form Title: From - To (Paydate3)
             * Display Form ID: paydate3.week.from_to
             */ FromTo: newAttribute("paydate3.week.from_to"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Paydate3)
             * Display Form ID: paydate3.week.wk_year_cont
             */ WeekNrYear_1: newAttribute("paydate3.week.wk_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Paydate3)
             * Display Form ID: paydate3.week.wk_qtr_year_cont
             */ WkQtrYear: newAttribute("paydate3.week.wk_qtr_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Paydate3)
             * Display Form ID: paydate3.week.wk_qtr_year
             */ WkQtrYear_1: newAttribute("paydate3.week.wk_qtr_year"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Paydate3)
         * Date Attribute ID: paydate3.week.in.year
         */ WeekSunSat: {
            ref: idRef("paydate3.week.in.year", "attribute"),
            identifier: "paydate3.week.in.year",
            /**
             * Display Form Title: Number US (Paydate3)
             * Display Form ID: paydate3.week.in.year.number_us
             */ NumberUS: newAttribute("paydate3.week.in.year.number_us"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Paydate3)
         * Date Attribute ID: paydate3.week.in.quarter
         */ WeekSunSatOfQtr: {
            ref: idRef("paydate3.week.in.quarter", "attribute"),
            identifier: "paydate3.week.in.quarter",
            /**
             * Display Form Title: Number US (Paydate3)
             * Display Form ID: paydate3.week.in.quarter.number_us
             */ NumberUS: newAttribute("paydate3.week.in.quarter.number_us"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Paydate3)
         * Date Attribute ID: paydate3.euweek
         */ WeekMonSunYear: {
            ref: idRef("paydate3.euweek", "attribute"),
            identifier: "paydate3.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Paydate3)
             * Display Form ID: paydate3.euweek.wk_year
             */ WeekNrYear: newAttribute("paydate3.euweek.wk_year"),
            /**
             * Display Form Title: Week Starting (Paydate3)
             * Display Form ID: paydate3.euweek.starting
             */ WeekStarting: newAttribute("paydate3.euweek.starting"),
            /**
             * Display Form Title: From - To (Paydate3)
             * Display Form ID: paydate3.euweek.from_to
             */ FromTo: newAttribute("paydate3.euweek.from_to"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Paydate3)
         * Date Attribute ID: paydate3.euweek.in.year
         */ WeekMonSun: {
            ref: idRef("paydate3.euweek.in.year", "attribute"),
            identifier: "paydate3.euweek.in.year",
            /**
             * Display Form Title: Number EU (Paydate3)
             * Display Form ID: paydate3.euweek.in.year.number_eu
             */ NumberEU: newAttribute("paydate3.euweek.in.year.number_eu"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Paydate3)
         * Date Attribute ID: paydate3.euweek.in.quarter
         */ WeekMonSunOfQtr: {
            ref: idRef("paydate3.euweek.in.quarter", "attribute"),
            identifier: "paydate3.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Paydate3)
             * Display Form ID: paydate3.euweek.in.quarter.number_eu
             */ NumberEU: newAttribute("paydate3.euweek.in.quarter.number_eu"),
        },
        /**
         * Date Attribute: Month (Paydate3)
         * Date Attribute ID: paydate3.month.in.year
         */ Month: {
            ref: idRef("paydate3.month.in.year", "attribute"),
            identifier: "paydate3.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Paydate3)
             * Display Form ID: paydate3.month.in.year.short
             */ Short: newAttribute("paydate3.month.in.year.short"),
            /**
             * Display Form Title: Long (January) (Paydate3)
             * Display Form ID: paydate3.month.in.year.long
             */ Long: newAttribute("paydate3.month.in.year.long"),
            /**
             * Display Form Title: Number (M1) (Paydate3)
             * Display Form ID: paydate3.month.in.year.number
             */ Number: newAttribute("paydate3.month.in.year.number"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Paydate3)
             * Display Form ID: paydate3.month.in.year.m_q
             */ MQ: newAttribute("paydate3.month.in.year.m_q"),
        },
        /**
         * Date Attribute: Month of Quarter (Paydate3)
         * Date Attribute ID: paydate3.month.in.quarter
         */ MonthOfQuarter: {
            ref: idRef("paydate3.month.in.quarter", "attribute"),
            identifier: "paydate3.month.in.quarter",
            /**
             * Display Form Title: Number (Paydate3)
             * Display Form ID: paydate3.month.in.quarter.number
             */ Number: newAttribute("paydate3.month.in.quarter.number"),
        },
        /**
         * Date Attribute: Day of Year (Paydate3)
         * Date Attribute ID: paydate3.day.in.year
         */ DayOfYear: {
            ref: idRef("paydate3.day.in.year", "attribute"),
            identifier: "paydate3.day.in.year",
            /**
             * Display Form Title: default (Paydate3)
             * Display Form ID: paydate3.day.in.year.default
             */ Default: newAttribute("paydate3.day.in.year.default"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Paydate3)
         * Date Attribute ID: paydate3.day.in.week
         */ DayOfWeekSunSat: {
            ref: idRef("paydate3.day.in.week", "attribute"),
            identifier: "paydate3.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Paydate3)
             * Display Form ID: paydate3.day.in.week.short
             */ Short: newAttribute("paydate3.day.in.week.short"),
            /**
             * Display Form Title: Long (Sunday) (Paydate3)
             * Display Form ID: paydate3.day.in.week.long
             */ Long: newAttribute("paydate3.day.in.week.long"),
            /**
             * Display Form Title: Number (1=Sunday) (Paydate3)
             * Display Form ID: paydate3.day.in.week.number
             */ Number: newAttribute("paydate3.day.in.week.number"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Paydate3)
         * Date Attribute ID: paydate3.day.in.euweek
         */ DayOfWeekMonSun: {
            ref: idRef("paydate3.day.in.euweek", "attribute"),
            identifier: "paydate3.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Paydate3)
             * Display Form ID: paydate3.day.in.euweek.short
             */ Short: newAttribute("paydate3.day.in.euweek.short"),
            /**
             * Display Form Title: Long (Monday) (Paydate3)
             * Display Form ID: paydate3.day.in.euweek.long
             */ Long: newAttribute("paydate3.day.in.euweek.long"),
            /**
             * Display Form Title: Number (1=Monday) (Paydate3)
             * Display Form ID: paydate3.day.in.euweek.number
             */ Number: newAttribute("paydate3.day.in.euweek.number"),
        },
        /**
         * Date Attribute: Day of Quarter (Paydate3)
         * Date Attribute ID: paydate3.day.in.quarter
         */ DayOfQuarter: {
            ref: idRef("paydate3.day.in.quarter", "attribute"),
            identifier: "paydate3.day.in.quarter",
            /**
             * Display Form Title: default (Paydate3)
             * Display Form ID: paydate3.day.in.quarter.default
             */ Default: newAttribute("paydate3.day.in.quarter.default"),
        },
        /**
         * Date Attribute: Day of Month (Paydate3)
         * Date Attribute ID: paydate3.day.in.month
         */ DayOfMonth: {
            ref: idRef("paydate3.day.in.month", "attribute"),
            identifier: "paydate3.day.in.month",
            /**
             * Display Form Title: default (Paydate3)
             * Display Form ID: paydate3.day.in.month.default
             */ Default: newAttribute("paydate3.day.in.month.default"),
        },
        /**
         * Date Attribute: Quarter/Year (Paydate3)
         * Date Attribute ID: paydate3.quarter
         */ QuarterYear: {
            ref: idRef("paydate3.quarter", "attribute"),
            identifier: "paydate3.quarter",
            /**
             * Display Form Title: US Short (Paydate3)
             * Display Form ID: paydate3.quarter.short_us
             */ USShort: newAttribute("paydate3.quarter.short_us"),
        },
        /**
         * Date Attribute: Month/Year (Paydate3)
         * Date Attribute ID: paydate3.month
         */ MonthYear: {
            ref: idRef("paydate3.month", "attribute"),
            identifier: "paydate3.month",
            /**
             * Display Form Title: Short (Jan 2010) (Paydate3)
             * Display Form ID: paydate3.month.short
             */ Short: newAttribute("paydate3.month.short"),
            /**
             * Display Form Title: Long (January 2010) (Paydate3)
             * Display Form ID: paydate3.month.long
             */ Long: newAttribute("paydate3.month.long"),
            /**
             * Display Form Title: Number (1/2010) (Paydate3)
             * Display Form ID: paydate3.month.number
             */ Number: newAttribute("paydate3.month.number"),
        },
        /**
         * Date Attribute: Date (Paydate3)
         * Date Attribute ID: paydate3.date
         */ Date: {
            ref: idRef("paydate3.date", "attribute"),
            identifier: "paydate3.date",
            /**
             * Display Form Title: mm/dd/yyyy (Paydate3)
             * Display Form ID: paydate3.date.day.us.mm_dd_yyyy
             */ MmDdYyyy: newAttribute("paydate3.date.day.us.mm_dd_yyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Paydate3)
             * Display Form ID: paydate3.date.day.yyyy_mm_dd
             */ YyyyMmDd: newAttribute("paydate3.date.day.yyyy_mm_dd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Paydate3)
             * Display Form ID: paydate3.date.day.us.m_d_yy
             */ MDYy: newAttribute("paydate3.date.day.us.m_d_yy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Paydate3)
             * Display Form ID: paydate3.date.day.us.long
             */ Long: newAttribute("paydate3.date.day.us.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Paydate3)
             * Display Form ID: paydate3.date.day.uk.dd_mm_yyyy
             */ DdMmYyyy: newAttribute("paydate3.date.day.uk.dd_mm_yyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Paydate3)
             * Display Form ID: paydate3.date.day.eu.dd_mm_yyyy
             */ DdMmYyyy_1: newAttribute("paydate3.date.day.eu.dd_mm_yyyy"),
        },
        /**
         * Date Attribute: US Week Year (Paydate3)
         * Date Attribute ID: paydate3.year.for.week
         */ USWeekYear: {
            ref: idRef("paydate3.year.for.week", "attribute"),
            identifier: "paydate3.year.for.week",
            /**
             * Display Form Title: Week Year (Paydate3)
             * Display Form ID: paydate3.year.for.week.number
             */ WeekYear: newAttribute("paydate3.year.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Year (Paydate3)
         * Date Attribute ID: paydate3.year.for.euweek
         */ EUWeekYear: {
            ref: idRef("paydate3.year.for.euweek", "attribute"),
            identifier: "paydate3.year.for.euweek",
            /**
             * Display Form Title: Week Year (Paydate3)
             * Display Form ID: paydate3.year.for.euweek.number
             */ WeekYear: newAttribute("paydate3.year.for.euweek.number"),
        },
        /**
         * Date Attribute: US Week Quarter (Paydate3)
         * Date Attribute ID: paydate3.quarter.for.week
         */ USWeekQuarter: {
            ref: idRef("paydate3.quarter.for.week", "attribute"),
            identifier: "paydate3.quarter.for.week",
            /**
             * Display Form Title: Week Quarter (Paydate3)
             * Display Form ID: paydate3.quarter.for.week.number
             */ WeekQuarter: newAttribute("paydate3.quarter.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Quarter (Paydate3)
         * Date Attribute ID: paydate3.quarter.for.euweek
         */ EUWeekQuarter: {
            ref: idRef("paydate3.quarter.for.euweek", "attribute"),
            identifier: "paydate3.quarter.for.euweek",
            /**
             * Display Form Title: Week Quarter (Paydate3)
             * Display Form ID: paydate3.quarter.for.euweek.number
             */ WeekQuarter: newAttribute("paydate3.quarter.for.euweek.number"),
        },
    },
    /**
     * Date Data Set Title: Date (Datelan2)
     * Date Data Set ID: datelan2.dataset.dt
     */ Datelan2: {
        ref: idRef("datelan2.dataset.dt", "dataSet"),
        identifier: "datelan2.dataset.dt",
        /**
         * Date Attribute: Year (Datelan2)
         * Date Attribute ID: datelan2.year
         */ Year: {
            ref: idRef("datelan2.year", "attribute"),
            identifier: "datelan2.year",
            /**
             * Display Form Title: Year (Datelan2)
             * Display Form ID: datelan2.year.default
             */ Default: newAttribute("datelan2.year.default"),
        },
        /**
         * Date Attribute: Quarter (Datelan2)
         * Date Attribute ID: datelan2.quarter.in.year
         */ Quarter: {
            ref: idRef("datelan2.quarter.in.year", "attribute"),
            identifier: "datelan2.quarter.in.year",
            /**
             * Display Form Title: default (Datelan2)
             * Display Form ID: datelan2.quarter.in.year.default
             */ Default: newAttribute("datelan2.quarter.in.year.default"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Datelan2)
         * Date Attribute ID: datelan2.week
         */ WeekSunSatYear: {
            ref: idRef("datelan2.week", "attribute"),
            identifier: "datelan2.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Datelan2)
             * Display Form ID: datelan2.week.wk_year
             */ WeekNrYear: newAttribute("datelan2.week.wk_year"),
            /**
             * Display Form Title: Week Starting (Datelan2)
             * Display Form ID: datelan2.week.starting
             */ WeekStarting: newAttribute("datelan2.week.starting"),
            /**
             * Display Form Title: From - To (Datelan2)
             * Display Form ID: datelan2.week.from_to
             */ FromTo: newAttribute("datelan2.week.from_to"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Datelan2)
             * Display Form ID: datelan2.week.wk_year_cont
             */ WeekNrYear_1: newAttribute("datelan2.week.wk_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Datelan2)
             * Display Form ID: datelan2.week.wk_qtr_year_cont
             */ WkQtrYear: newAttribute("datelan2.week.wk_qtr_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Datelan2)
             * Display Form ID: datelan2.week.wk_qtr_year
             */ WkQtrYear_1: newAttribute("datelan2.week.wk_qtr_year"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Datelan2)
         * Date Attribute ID: datelan2.week.in.year
         */ WeekSunSat: {
            ref: idRef("datelan2.week.in.year", "attribute"),
            identifier: "datelan2.week.in.year",
            /**
             * Display Form Title: Number US (Datelan2)
             * Display Form ID: datelan2.week.in.year.number_us
             */ NumberUS: newAttribute("datelan2.week.in.year.number_us"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Datelan2)
         * Date Attribute ID: datelan2.week.in.quarter
         */ WeekSunSatOfQtr: {
            ref: idRef("datelan2.week.in.quarter", "attribute"),
            identifier: "datelan2.week.in.quarter",
            /**
             * Display Form Title: Number US (Datelan2)
             * Display Form ID: datelan2.week.in.quarter.number_us
             */ NumberUS: newAttribute("datelan2.week.in.quarter.number_us"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Datelan2)
         * Date Attribute ID: datelan2.euweek
         */ WeekMonSunYear: {
            ref: idRef("datelan2.euweek", "attribute"),
            identifier: "datelan2.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Datelan2)
             * Display Form ID: datelan2.euweek.wk_year
             */ WeekNrYear: newAttribute("datelan2.euweek.wk_year"),
            /**
             * Display Form Title: Week Starting (Datelan2)
             * Display Form ID: datelan2.euweek.starting
             */ WeekStarting: newAttribute("datelan2.euweek.starting"),
            /**
             * Display Form Title: From - To (Datelan2)
             * Display Form ID: datelan2.euweek.from_to
             */ FromTo: newAttribute("datelan2.euweek.from_to"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Datelan2)
         * Date Attribute ID: datelan2.euweek.in.year
         */ WeekMonSun: {
            ref: idRef("datelan2.euweek.in.year", "attribute"),
            identifier: "datelan2.euweek.in.year",
            /**
             * Display Form Title: Number EU (Datelan2)
             * Display Form ID: datelan2.euweek.in.year.number_eu
             */ NumberEU: newAttribute("datelan2.euweek.in.year.number_eu"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Datelan2)
         * Date Attribute ID: datelan2.euweek.in.quarter
         */ WeekMonSunOfQtr: {
            ref: idRef("datelan2.euweek.in.quarter", "attribute"),
            identifier: "datelan2.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Datelan2)
             * Display Form ID: datelan2.euweek.in.quarter.number_eu
             */ NumberEU: newAttribute("datelan2.euweek.in.quarter.number_eu"),
        },
        /**
         * Date Attribute: Month (Datelan2)
         * Date Attribute ID: datelan2.month.in.year
         */ Month: {
            ref: idRef("datelan2.month.in.year", "attribute"),
            identifier: "datelan2.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Datelan2)
             * Display Form ID: datelan2.month.in.year.short
             */ Short: newAttribute("datelan2.month.in.year.short"),
            /**
             * Display Form Title: Long (January) (Datelan2)
             * Display Form ID: datelan2.month.in.year.long
             */ Long: newAttribute("datelan2.month.in.year.long"),
            /**
             * Display Form Title: Number (M1) (Datelan2)
             * Display Form ID: datelan2.month.in.year.number
             */ Number: newAttribute("datelan2.month.in.year.number"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Datelan2)
             * Display Form ID: datelan2.month.in.year.m_q
             */ MQ: newAttribute("datelan2.month.in.year.m_q"),
        },
        /**
         * Date Attribute: Month of Quarter (Datelan2)
         * Date Attribute ID: datelan2.month.in.quarter
         */ MonthOfQuarter: {
            ref: idRef("datelan2.month.in.quarter", "attribute"),
            identifier: "datelan2.month.in.quarter",
            /**
             * Display Form Title: Number (Datelan2)
             * Display Form ID: datelan2.month.in.quarter.number
             */ Number: newAttribute("datelan2.month.in.quarter.number"),
        },
        /**
         * Date Attribute: Day of Year (Datelan2)
         * Date Attribute ID: datelan2.day.in.year
         */ DayOfYear: {
            ref: idRef("datelan2.day.in.year", "attribute"),
            identifier: "datelan2.day.in.year",
            /**
             * Display Form Title: default (Datelan2)
             * Display Form ID: datelan2.day.in.year.default
             */ Default: newAttribute("datelan2.day.in.year.default"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Datelan2)
         * Date Attribute ID: datelan2.day.in.week
         */ DayOfWeekSunSat: {
            ref: idRef("datelan2.day.in.week", "attribute"),
            identifier: "datelan2.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Datelan2)
             * Display Form ID: datelan2.day.in.week.short
             */ Short: newAttribute("datelan2.day.in.week.short"),
            /**
             * Display Form Title: Long (Sunday) (Datelan2)
             * Display Form ID: datelan2.day.in.week.long
             */ Long: newAttribute("datelan2.day.in.week.long"),
            /**
             * Display Form Title: Number (1=Sunday) (Datelan2)
             * Display Form ID: datelan2.day.in.week.number
             */ Number: newAttribute("datelan2.day.in.week.number"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Datelan2)
         * Date Attribute ID: datelan2.day.in.euweek
         */ DayOfWeekMonSun: {
            ref: idRef("datelan2.day.in.euweek", "attribute"),
            identifier: "datelan2.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Datelan2)
             * Display Form ID: datelan2.day.in.euweek.short
             */ Short: newAttribute("datelan2.day.in.euweek.short"),
            /**
             * Display Form Title: Long (Monday) (Datelan2)
             * Display Form ID: datelan2.day.in.euweek.long
             */ Long: newAttribute("datelan2.day.in.euweek.long"),
            /**
             * Display Form Title: Number (1=Monday) (Datelan2)
             * Display Form ID: datelan2.day.in.euweek.number
             */ Number: newAttribute("datelan2.day.in.euweek.number"),
        },
        /**
         * Date Attribute: Day of Quarter (Datelan2)
         * Date Attribute ID: datelan2.day.in.quarter
         */ DayOfQuarter: {
            ref: idRef("datelan2.day.in.quarter", "attribute"),
            identifier: "datelan2.day.in.quarter",
            /**
             * Display Form Title: default (Datelan2)
             * Display Form ID: datelan2.day.in.quarter.default
             */ Default: newAttribute("datelan2.day.in.quarter.default"),
        },
        /**
         * Date Attribute: Day of Month (Datelan2)
         * Date Attribute ID: datelan2.day.in.month
         */ DayOfMonth: {
            ref: idRef("datelan2.day.in.month", "attribute"),
            identifier: "datelan2.day.in.month",
            /**
             * Display Form Title: default (Datelan2)
             * Display Form ID: datelan2.day.in.month.default
             */ Default: newAttribute("datelan2.day.in.month.default"),
        },
        /**
         * Date Attribute: Quarter/Year (Datelan2)
         * Date Attribute ID: datelan2.quarter
         */ QuarterYear: {
            ref: idRef("datelan2.quarter", "attribute"),
            identifier: "datelan2.quarter",
            /**
             * Display Form Title: US Short (Datelan2)
             * Display Form ID: datelan2.quarter.short_us
             */ USShort: newAttribute("datelan2.quarter.short_us"),
        },
        /**
         * Date Attribute: Month/Year (Datelan2)
         * Date Attribute ID: datelan2.month
         */ MonthYear: {
            ref: idRef("datelan2.month", "attribute"),
            identifier: "datelan2.month",
            /**
             * Display Form Title: Short (Jan 2010) (Datelan2)
             * Display Form ID: datelan2.month.short
             */ Short: newAttribute("datelan2.month.short"),
            /**
             * Display Form Title: Long (January 2010) (Datelan2)
             * Display Form ID: datelan2.month.long
             */ Long: newAttribute("datelan2.month.long"),
            /**
             * Display Form Title: Number (1/2010) (Datelan2)
             * Display Form ID: datelan2.month.number
             */ Number: newAttribute("datelan2.month.number"),
        },
        /**
         * Date Attribute: Date (Datelan2)
         * Date Attribute ID: datelan2.date
         */ Date: {
            ref: idRef("datelan2.date", "attribute"),
            identifier: "datelan2.date",
            /**
             * Display Form Title: mm/dd/yyyy (Datelan2)
             * Display Form ID: datelan2.date.day.us.mm_dd_yyyy
             */ MmDdYyyy: newAttribute("datelan2.date.day.us.mm_dd_yyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Datelan2)
             * Display Form ID: datelan2.date.day.yyyy_mm_dd
             */ YyyyMmDd: newAttribute("datelan2.date.day.yyyy_mm_dd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Datelan2)
             * Display Form ID: datelan2.date.day.us.m_d_yy
             */ MDYy: newAttribute("datelan2.date.day.us.m_d_yy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Datelan2)
             * Display Form ID: datelan2.date.day.us.long
             */ Long: newAttribute("datelan2.date.day.us.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Datelan2)
             * Display Form ID: datelan2.date.day.uk.dd_mm_yyyy
             */ DdMmYyyy: newAttribute("datelan2.date.day.uk.dd_mm_yyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Datelan2)
             * Display Form ID: datelan2.date.day.eu.dd_mm_yyyy
             */ DdMmYyyy_1: newAttribute("datelan2.date.day.eu.dd_mm_yyyy"),
        },
        /**
         * Date Attribute: US Week Year (Datelan2)
         * Date Attribute ID: datelan2.year.for.week
         */ USWeekYear: {
            ref: idRef("datelan2.year.for.week", "attribute"),
            identifier: "datelan2.year.for.week",
            /**
             * Display Form Title: Week Year (Datelan2)
             * Display Form ID: datelan2.year.for.week.number
             */ WeekYear: newAttribute("datelan2.year.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Year (Datelan2)
         * Date Attribute ID: datelan2.year.for.euweek
         */ EUWeekYear: {
            ref: idRef("datelan2.year.for.euweek", "attribute"),
            identifier: "datelan2.year.for.euweek",
            /**
             * Display Form Title: Week Year (Datelan2)
             * Display Form ID: datelan2.year.for.euweek.number
             */ WeekYear: newAttribute("datelan2.year.for.euweek.number"),
        },
        /**
         * Date Attribute: US Week Quarter (Datelan2)
         * Date Attribute ID: datelan2.quarter.for.week
         */ USWeekQuarter: {
            ref: idRef("datelan2.quarter.for.week", "attribute"),
            identifier: "datelan2.quarter.for.week",
            /**
             * Display Form Title: Week Quarter (Datelan2)
             * Display Form ID: datelan2.quarter.for.week.number
             */ WeekQuarter: newAttribute("datelan2.quarter.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Quarter (Datelan2)
         * Date Attribute ID: datelan2.quarter.for.euweek
         */ EUWeekQuarter: {
            ref: idRef("datelan2.quarter.for.euweek", "attribute"),
            identifier: "datelan2.quarter.for.euweek",
            /**
             * Display Form Title: Week Quarter (Datelan2)
             * Display Form ID: datelan2.quarter.for.euweek.number
             */ WeekQuarter: newAttribute("datelan2.quarter.for.euweek.number"),
        },
    },
    /**
     * Date Data Set Title: Date (Date1gen)
     * Date Data Set ID: date1gen.dataset.dt
     */ Date1gen: {
        ref: idRef("date1gen.dataset.dt", "dataSet"),
        identifier: "date1gen.dataset.dt",
        /**
         * Date Attribute: Year (Date1gen)
         * Date Attribute ID: date1gen.year
         */ Year: {
            ref: idRef("date1gen.year", "attribute"),
            identifier: "date1gen.year",
            /**
             * Display Form Title: Year (Date1gen)
             * Display Form ID: date1gen.year.default
             */ Default: newAttribute("date1gen.year.default"),
        },
        /**
         * Date Attribute: Quarter (Date1gen)
         * Date Attribute ID: date1gen.quarter.in.year
         */ Quarter: {
            ref: idRef("date1gen.quarter.in.year", "attribute"),
            identifier: "date1gen.quarter.in.year",
            /**
             * Display Form Title: default (Date1gen)
             * Display Form ID: date1gen.quarter.in.year.default
             */ Default: newAttribute("date1gen.quarter.in.year.default"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Date1gen)
         * Date Attribute ID: date1gen.week
         */ WeekSunSatYear: {
            ref: idRef("date1gen.week", "attribute"),
            identifier: "date1gen.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date1gen)
             * Display Form ID: date1gen.week.wk_year
             */ WeekNrYear: newAttribute("date1gen.week.wk_year"),
            /**
             * Display Form Title: Week Starting (Date1gen)
             * Display Form ID: date1gen.week.starting
             */ WeekStarting: newAttribute("date1gen.week.starting"),
            /**
             * Display Form Title: From - To (Date1gen)
             * Display Form ID: date1gen.week.from_to
             */ FromTo: newAttribute("date1gen.week.from_to"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Date1gen)
             * Display Form ID: date1gen.week.wk_year_cont
             */ WeekNrYear_1: newAttribute("date1gen.week.wk_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Date1gen)
             * Display Form ID: date1gen.week.wk_qtr_year_cont
             */ WkQtrYear: newAttribute("date1gen.week.wk_qtr_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Date1gen)
             * Display Form ID: date1gen.week.wk_qtr_year
             */ WkQtrYear_1: newAttribute("date1gen.week.wk_qtr_year"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Date1gen)
         * Date Attribute ID: date1gen.week.in.year
         */ WeekSunSat: {
            ref: idRef("date1gen.week.in.year", "attribute"),
            identifier: "date1gen.week.in.year",
            /**
             * Display Form Title: Number US (Date1gen)
             * Display Form ID: date1gen.week.in.year.number_us
             */ NumberUS: newAttribute("date1gen.week.in.year.number_us"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Date1gen)
         * Date Attribute ID: date1gen.week.in.quarter
         */ WeekSunSatOfQtr: {
            ref: idRef("date1gen.week.in.quarter", "attribute"),
            identifier: "date1gen.week.in.quarter",
            /**
             * Display Form Title: Number US (Date1gen)
             * Display Form ID: date1gen.week.in.quarter.number_us
             */ NumberUS: newAttribute("date1gen.week.in.quarter.number_us"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Date1gen)
         * Date Attribute ID: date1gen.euweek
         */ WeekMonSunYear: {
            ref: idRef("date1gen.euweek", "attribute"),
            identifier: "date1gen.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date1gen)
             * Display Form ID: date1gen.euweek.wk_year
             */ WeekNrYear: newAttribute("date1gen.euweek.wk_year"),
            /**
             * Display Form Title: Week Starting (Date1gen)
             * Display Form ID: date1gen.euweek.starting
             */ WeekStarting: newAttribute("date1gen.euweek.starting"),
            /**
             * Display Form Title: From - To (Date1gen)
             * Display Form ID: date1gen.euweek.from_to
             */ FromTo: newAttribute("date1gen.euweek.from_to"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Date1gen)
         * Date Attribute ID: date1gen.euweek.in.year
         */ WeekMonSun: {
            ref: idRef("date1gen.euweek.in.year", "attribute"),
            identifier: "date1gen.euweek.in.year",
            /**
             * Display Form Title: Number EU (Date1gen)
             * Display Form ID: date1gen.euweek.in.year.number_eu
             */ NumberEU: newAttribute("date1gen.euweek.in.year.number_eu"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Date1gen)
         * Date Attribute ID: date1gen.euweek.in.quarter
         */ WeekMonSunOfQtr: {
            ref: idRef("date1gen.euweek.in.quarter", "attribute"),
            identifier: "date1gen.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Date1gen)
             * Display Form ID: date1gen.euweek.in.quarter.number_eu
             */ NumberEU: newAttribute("date1gen.euweek.in.quarter.number_eu"),
        },
        /**
         * Date Attribute: Month (Date1gen)
         * Date Attribute ID: date1gen.month.in.year
         */ Month: {
            ref: idRef("date1gen.month.in.year", "attribute"),
            identifier: "date1gen.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Date1gen)
             * Display Form ID: date1gen.month.in.year.short
             */ Short: newAttribute("date1gen.month.in.year.short"),
            /**
             * Display Form Title: Long (January) (Date1gen)
             * Display Form ID: date1gen.month.in.year.long
             */ Long: newAttribute("date1gen.month.in.year.long"),
            /**
             * Display Form Title: Number (M1) (Date1gen)
             * Display Form ID: date1gen.month.in.year.number
             */ Number: newAttribute("date1gen.month.in.year.number"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Date1gen)
             * Display Form ID: date1gen.month.in.year.m_q
             */ MQ: newAttribute("date1gen.month.in.year.m_q"),
        },
        /**
         * Date Attribute: Month of Quarter (Date1gen)
         * Date Attribute ID: date1gen.month.in.quarter
         */ MonthOfQuarter: {
            ref: idRef("date1gen.month.in.quarter", "attribute"),
            identifier: "date1gen.month.in.quarter",
            /**
             * Display Form Title: Number (Date1gen)
             * Display Form ID: date1gen.month.in.quarter.number
             */ Number: newAttribute("date1gen.month.in.quarter.number"),
        },
        /**
         * Date Attribute: Day of Year (Date1gen)
         * Date Attribute ID: date1gen.day.in.year
         */ DayOfYear: {
            ref: idRef("date1gen.day.in.year", "attribute"),
            identifier: "date1gen.day.in.year",
            /**
             * Display Form Title: default (Date1gen)
             * Display Form ID: date1gen.day.in.year.default
             */ Default: newAttribute("date1gen.day.in.year.default"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Date1gen)
         * Date Attribute ID: date1gen.day.in.week
         */ DayOfWeekSunSat: {
            ref: idRef("date1gen.day.in.week", "attribute"),
            identifier: "date1gen.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Date1gen)
             * Display Form ID: date1gen.day.in.week.short
             */ Short: newAttribute("date1gen.day.in.week.short"),
            /**
             * Display Form Title: Long (Sunday) (Date1gen)
             * Display Form ID: date1gen.day.in.week.long
             */ Long: newAttribute("date1gen.day.in.week.long"),
            /**
             * Display Form Title: Number (1=Sunday) (Date1gen)
             * Display Form ID: date1gen.day.in.week.number
             */ Number: newAttribute("date1gen.day.in.week.number"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Date1gen)
         * Date Attribute ID: date1gen.day.in.euweek
         */ DayOfWeekMonSun: {
            ref: idRef("date1gen.day.in.euweek", "attribute"),
            identifier: "date1gen.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Date1gen)
             * Display Form ID: date1gen.day.in.euweek.short
             */ Short: newAttribute("date1gen.day.in.euweek.short"),
            /**
             * Display Form Title: Long (Monday) (Date1gen)
             * Display Form ID: date1gen.day.in.euweek.long
             */ Long: newAttribute("date1gen.day.in.euweek.long"),
            /**
             * Display Form Title: Number (1=Monday) (Date1gen)
             * Display Form ID: date1gen.day.in.euweek.number
             */ Number: newAttribute("date1gen.day.in.euweek.number"),
        },
        /**
         * Date Attribute: Day of Quarter (Date1gen)
         * Date Attribute ID: date1gen.day.in.quarter
         */ DayOfQuarter: {
            ref: idRef("date1gen.day.in.quarter", "attribute"),
            identifier: "date1gen.day.in.quarter",
            /**
             * Display Form Title: default (Date1gen)
             * Display Form ID: date1gen.day.in.quarter.default
             */ Default: newAttribute("date1gen.day.in.quarter.default"),
        },
        /**
         * Date Attribute: Day of Month (Date1gen)
         * Date Attribute ID: date1gen.day.in.month
         */ DayOfMonth: {
            ref: idRef("date1gen.day.in.month", "attribute"),
            identifier: "date1gen.day.in.month",
            /**
             * Display Form Title: default (Date1gen)
             * Display Form ID: date1gen.day.in.month.default
             */ Default: newAttribute("date1gen.day.in.month.default"),
        },
        /**
         * Date Attribute: Quarter/Year (Date1gen)
         * Date Attribute ID: date1gen.quarter
         */ QuarterYear: {
            ref: idRef("date1gen.quarter", "attribute"),
            identifier: "date1gen.quarter",
            /**
             * Display Form Title: US Short (Date1gen)
             * Display Form ID: date1gen.quarter.short_us
             */ USShort: newAttribute("date1gen.quarter.short_us"),
        },
        /**
         * Date Attribute: Month/Year (Date1gen)
         * Date Attribute ID: date1gen.month
         */ MonthYear: {
            ref: idRef("date1gen.month", "attribute"),
            identifier: "date1gen.month",
            /**
             * Display Form Title: Short (Jan 2010) (Date1gen)
             * Display Form ID: date1gen.month.short
             */ Short: newAttribute("date1gen.month.short"),
            /**
             * Display Form Title: Long (January 2010) (Date1gen)
             * Display Form ID: date1gen.month.long
             */ Long: newAttribute("date1gen.month.long"),
            /**
             * Display Form Title: Number (1/2010) (Date1gen)
             * Display Form ID: date1gen.month.number
             */ Number: newAttribute("date1gen.month.number"),
        },
        /**
         * Date Attribute: Date (Date1gen)
         * Date Attribute ID: date1gen.date
         */ Date: {
            ref: idRef("date1gen.date", "attribute"),
            identifier: "date1gen.date",
            /**
             * Display Form Title: mm/dd/yyyy (Date1gen)
             * Display Form ID: date1gen.date.day.us.mm_dd_yyyy
             */ MmDdYyyy: newAttribute("date1gen.date.day.us.mm_dd_yyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Date1gen)
             * Display Form ID: date1gen.date.day.yyyy_mm_dd
             */ YyyyMmDd: newAttribute("date1gen.date.day.yyyy_mm_dd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Date1gen)
             * Display Form ID: date1gen.date.day.us.m_d_yy
             */ MDYy: newAttribute("date1gen.date.day.us.m_d_yy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Date1gen)
             * Display Form ID: date1gen.date.day.us.long
             */ Long: newAttribute("date1gen.date.day.us.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Date1gen)
             * Display Form ID: date1gen.date.day.uk.dd_mm_yyyy
             */ DdMmYyyy: newAttribute("date1gen.date.day.uk.dd_mm_yyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Date1gen)
             * Display Form ID: date1gen.date.day.eu.dd_mm_yyyy
             */ DdMmYyyy_1: newAttribute("date1gen.date.day.eu.dd_mm_yyyy"),
        },
        /**
         * Date Attribute: US Week Year (Date1gen)
         * Date Attribute ID: date1gen.year.for.week
         */ USWeekYear: {
            ref: idRef("date1gen.year.for.week", "attribute"),
            identifier: "date1gen.year.for.week",
            /**
             * Display Form Title: Week Year (Date1gen)
             * Display Form ID: date1gen.year.for.week.number
             */ WeekYear: newAttribute("date1gen.year.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Year (Date1gen)
         * Date Attribute ID: date1gen.year.for.euweek
         */ EUWeekYear: {
            ref: idRef("date1gen.year.for.euweek", "attribute"),
            identifier: "date1gen.year.for.euweek",
            /**
             * Display Form Title: Week Year (Date1gen)
             * Display Form ID: date1gen.year.for.euweek.number
             */ WeekYear: newAttribute("date1gen.year.for.euweek.number"),
        },
        /**
         * Date Attribute: US Week Quarter (Date1gen)
         * Date Attribute ID: date1gen.quarter.for.week
         */ USWeekQuarter: {
            ref: idRef("date1gen.quarter.for.week", "attribute"),
            identifier: "date1gen.quarter.for.week",
            /**
             * Display Form Title: Week Quarter (Date1gen)
             * Display Form ID: date1gen.quarter.for.week.number
             */ WeekQuarter: newAttribute("date1gen.quarter.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Quarter (Date1gen)
         * Date Attribute ID: date1gen.quarter.for.euweek
         */ EUWeekQuarter: {
            ref: idRef("date1gen.quarter.for.euweek", "attribute"),
            identifier: "date1gen.quarter.for.euweek",
            /**
             * Display Form Title: Week Quarter (Date1gen)
             * Display Form ID: date1gen.quarter.for.euweek.number
             */ WeekQuarter: newAttribute("date1gen.quarter.for.euweek.number"),
        },
    },
    /**
     * Date Data Set Title: Date (Date2gen)
     * Date Data Set ID: date2gen.dataset.dt
     */ Date2gen: {
        ref: idRef("date2gen.dataset.dt", "dataSet"),
        identifier: "date2gen.dataset.dt",
        /**
         * Date Attribute: Year (Date2gen)
         * Date Attribute ID: date2gen.year
         */ Year: {
            ref: idRef("date2gen.year", "attribute"),
            identifier: "date2gen.year",
            /**
             * Display Form Title: Year (Date2gen)
             * Display Form ID: date2gen.year.default
             */ Default: newAttribute("date2gen.year.default"),
        },
        /**
         * Date Attribute: Quarter (Date2gen)
         * Date Attribute ID: date2gen.quarter.in.year
         */ Quarter: {
            ref: idRef("date2gen.quarter.in.year", "attribute"),
            identifier: "date2gen.quarter.in.year",
            /**
             * Display Form Title: default (Date2gen)
             * Display Form ID: date2gen.quarter.in.year.default
             */ Default: newAttribute("date2gen.quarter.in.year.default"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Date2gen)
         * Date Attribute ID: date2gen.week
         */ WeekSunSatYear: {
            ref: idRef("date2gen.week", "attribute"),
            identifier: "date2gen.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date2gen)
             * Display Form ID: date2gen.week.wk_year
             */ WeekNrYear: newAttribute("date2gen.week.wk_year"),
            /**
             * Display Form Title: Week Starting (Date2gen)
             * Display Form ID: date2gen.week.starting
             */ WeekStarting: newAttribute("date2gen.week.starting"),
            /**
             * Display Form Title: From - To (Date2gen)
             * Display Form ID: date2gen.week.from_to
             */ FromTo: newAttribute("date2gen.week.from_to"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Date2gen)
             * Display Form ID: date2gen.week.wk_year_cont
             */ WeekNrYear_1: newAttribute("date2gen.week.wk_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Date2gen)
             * Display Form ID: date2gen.week.wk_qtr_year_cont
             */ WkQtrYear: newAttribute("date2gen.week.wk_qtr_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Date2gen)
             * Display Form ID: date2gen.week.wk_qtr_year
             */ WkQtrYear_1: newAttribute("date2gen.week.wk_qtr_year"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Date2gen)
         * Date Attribute ID: date2gen.week.in.year
         */ WeekSunSat: {
            ref: idRef("date2gen.week.in.year", "attribute"),
            identifier: "date2gen.week.in.year",
            /**
             * Display Form Title: Number US (Date2gen)
             * Display Form ID: date2gen.week.in.year.number_us
             */ NumberUS: newAttribute("date2gen.week.in.year.number_us"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Date2gen)
         * Date Attribute ID: date2gen.week.in.quarter
         */ WeekSunSatOfQtr: {
            ref: idRef("date2gen.week.in.quarter", "attribute"),
            identifier: "date2gen.week.in.quarter",
            /**
             * Display Form Title: Number US (Date2gen)
             * Display Form ID: date2gen.week.in.quarter.number_us
             */ NumberUS: newAttribute("date2gen.week.in.quarter.number_us"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Date2gen)
         * Date Attribute ID: date2gen.euweek
         */ WeekMonSunYear: {
            ref: idRef("date2gen.euweek", "attribute"),
            identifier: "date2gen.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date2gen)
             * Display Form ID: date2gen.euweek.wk_year
             */ WeekNrYear: newAttribute("date2gen.euweek.wk_year"),
            /**
             * Display Form Title: Week Starting (Date2gen)
             * Display Form ID: date2gen.euweek.starting
             */ WeekStarting: newAttribute("date2gen.euweek.starting"),
            /**
             * Display Form Title: From - To (Date2gen)
             * Display Form ID: date2gen.euweek.from_to
             */ FromTo: newAttribute("date2gen.euweek.from_to"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Date2gen)
         * Date Attribute ID: date2gen.euweek.in.year
         */ WeekMonSun: {
            ref: idRef("date2gen.euweek.in.year", "attribute"),
            identifier: "date2gen.euweek.in.year",
            /**
             * Display Form Title: Number EU (Date2gen)
             * Display Form ID: date2gen.euweek.in.year.number_eu
             */ NumberEU: newAttribute("date2gen.euweek.in.year.number_eu"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Date2gen)
         * Date Attribute ID: date2gen.euweek.in.quarter
         */ WeekMonSunOfQtr: {
            ref: idRef("date2gen.euweek.in.quarter", "attribute"),
            identifier: "date2gen.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Date2gen)
             * Display Form ID: date2gen.euweek.in.quarter.number_eu
             */ NumberEU: newAttribute("date2gen.euweek.in.quarter.number_eu"),
        },
        /**
         * Date Attribute: Month (Date2gen)
         * Date Attribute ID: date2gen.month.in.year
         */ Month: {
            ref: idRef("date2gen.month.in.year", "attribute"),
            identifier: "date2gen.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Date2gen)
             * Display Form ID: date2gen.month.in.year.short
             */ Short: newAttribute("date2gen.month.in.year.short"),
            /**
             * Display Form Title: Long (January) (Date2gen)
             * Display Form ID: date2gen.month.in.year.long
             */ Long: newAttribute("date2gen.month.in.year.long"),
            /**
             * Display Form Title: Number (M1) (Date2gen)
             * Display Form ID: date2gen.month.in.year.number
             */ Number: newAttribute("date2gen.month.in.year.number"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Date2gen)
             * Display Form ID: date2gen.month.in.year.m_q
             */ MQ: newAttribute("date2gen.month.in.year.m_q"),
        },
        /**
         * Date Attribute: Month of Quarter (Date2gen)
         * Date Attribute ID: date2gen.month.in.quarter
         */ MonthOfQuarter: {
            ref: idRef("date2gen.month.in.quarter", "attribute"),
            identifier: "date2gen.month.in.quarter",
            /**
             * Display Form Title: Number (Date2gen)
             * Display Form ID: date2gen.month.in.quarter.number
             */ Number: newAttribute("date2gen.month.in.quarter.number"),
        },
        /**
         * Date Attribute: Day of Year (Date2gen)
         * Date Attribute ID: date2gen.day.in.year
         */ DayOfYear: {
            ref: idRef("date2gen.day.in.year", "attribute"),
            identifier: "date2gen.day.in.year",
            /**
             * Display Form Title: default (Date2gen)
             * Display Form ID: date2gen.day.in.year.default
             */ Default: newAttribute("date2gen.day.in.year.default"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Date2gen)
         * Date Attribute ID: date2gen.day.in.week
         */ DayOfWeekSunSat: {
            ref: idRef("date2gen.day.in.week", "attribute"),
            identifier: "date2gen.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Date2gen)
             * Display Form ID: date2gen.day.in.week.short
             */ Short: newAttribute("date2gen.day.in.week.short"),
            /**
             * Display Form Title: Long (Sunday) (Date2gen)
             * Display Form ID: date2gen.day.in.week.long
             */ Long: newAttribute("date2gen.day.in.week.long"),
            /**
             * Display Form Title: Number (1=Sunday) (Date2gen)
             * Display Form ID: date2gen.day.in.week.number
             */ Number: newAttribute("date2gen.day.in.week.number"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Date2gen)
         * Date Attribute ID: date2gen.day.in.euweek
         */ DayOfWeekMonSun: {
            ref: idRef("date2gen.day.in.euweek", "attribute"),
            identifier: "date2gen.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Date2gen)
             * Display Form ID: date2gen.day.in.euweek.short
             */ Short: newAttribute("date2gen.day.in.euweek.short"),
            /**
             * Display Form Title: Long (Monday) (Date2gen)
             * Display Form ID: date2gen.day.in.euweek.long
             */ Long: newAttribute("date2gen.day.in.euweek.long"),
            /**
             * Display Form Title: Number (1=Monday) (Date2gen)
             * Display Form ID: date2gen.day.in.euweek.number
             */ Number: newAttribute("date2gen.day.in.euweek.number"),
        },
        /**
         * Date Attribute: Day of Quarter (Date2gen)
         * Date Attribute ID: date2gen.day.in.quarter
         */ DayOfQuarter: {
            ref: idRef("date2gen.day.in.quarter", "attribute"),
            identifier: "date2gen.day.in.quarter",
            /**
             * Display Form Title: default (Date2gen)
             * Display Form ID: date2gen.day.in.quarter.default
             */ Default: newAttribute("date2gen.day.in.quarter.default"),
        },
        /**
         * Date Attribute: Day of Month (Date2gen)
         * Date Attribute ID: date2gen.day.in.month
         */ DayOfMonth: {
            ref: idRef("date2gen.day.in.month", "attribute"),
            identifier: "date2gen.day.in.month",
            /**
             * Display Form Title: default (Date2gen)
             * Display Form ID: date2gen.day.in.month.default
             */ Default: newAttribute("date2gen.day.in.month.default"),
        },
        /**
         * Date Attribute: Quarter/Year (Date2gen)
         * Date Attribute ID: date2gen.quarter
         */ QuarterYear: {
            ref: idRef("date2gen.quarter", "attribute"),
            identifier: "date2gen.quarter",
            /**
             * Display Form Title: US Short (Date2gen)
             * Display Form ID: date2gen.quarter.short_us
             */ USShort: newAttribute("date2gen.quarter.short_us"),
        },
        /**
         * Date Attribute: Month/Year (Date2gen)
         * Date Attribute ID: date2gen.month
         */ MonthYear: {
            ref: idRef("date2gen.month", "attribute"),
            identifier: "date2gen.month",
            /**
             * Display Form Title: Short (Jan 2010) (Date2gen)
             * Display Form ID: date2gen.month.short
             */ Short: newAttribute("date2gen.month.short"),
            /**
             * Display Form Title: Long (January 2010) (Date2gen)
             * Display Form ID: date2gen.month.long
             */ Long: newAttribute("date2gen.month.long"),
            /**
             * Display Form Title: Number (1/2010) (Date2gen)
             * Display Form ID: date2gen.month.number
             */ Number: newAttribute("date2gen.month.number"),
        },
        /**
         * Date Attribute: Date (Date2gen)
         * Date Attribute ID: date2gen.date
         */ Date: {
            ref: idRef("date2gen.date", "attribute"),
            identifier: "date2gen.date",
            /**
             * Display Form Title: mm/dd/yyyy (Date2gen)
             * Display Form ID: date2gen.date.day.us.mm_dd_yyyy
             */ MmDdYyyy: newAttribute("date2gen.date.day.us.mm_dd_yyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Date2gen)
             * Display Form ID: date2gen.date.day.yyyy_mm_dd
             */ YyyyMmDd: newAttribute("date2gen.date.day.yyyy_mm_dd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Date2gen)
             * Display Form ID: date2gen.date.day.us.m_d_yy
             */ MDYy: newAttribute("date2gen.date.day.us.m_d_yy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Date2gen)
             * Display Form ID: date2gen.date.day.us.long
             */ Long: newAttribute("date2gen.date.day.us.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Date2gen)
             * Display Form ID: date2gen.date.day.uk.dd_mm_yyyy
             */ DdMmYyyy: newAttribute("date2gen.date.day.uk.dd_mm_yyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Date2gen)
             * Display Form ID: date2gen.date.day.eu.dd_mm_yyyy
             */ DdMmYyyy_1: newAttribute("date2gen.date.day.eu.dd_mm_yyyy"),
        },
        /**
         * Date Attribute: US Week Year (Date2gen)
         * Date Attribute ID: date2gen.year.for.week
         */ USWeekYear: {
            ref: idRef("date2gen.year.for.week", "attribute"),
            identifier: "date2gen.year.for.week",
            /**
             * Display Form Title: Week Year (Date2gen)
             * Display Form ID: date2gen.year.for.week.number
             */ WeekYear: newAttribute("date2gen.year.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Year (Date2gen)
         * Date Attribute ID: date2gen.year.for.euweek
         */ EUWeekYear: {
            ref: idRef("date2gen.year.for.euweek", "attribute"),
            identifier: "date2gen.year.for.euweek",
            /**
             * Display Form Title: Week Year (Date2gen)
             * Display Form ID: date2gen.year.for.euweek.number
             */ WeekYear: newAttribute("date2gen.year.for.euweek.number"),
        },
        /**
         * Date Attribute: US Week Quarter (Date2gen)
         * Date Attribute ID: date2gen.quarter.for.week
         */ USWeekQuarter: {
            ref: idRef("date2gen.quarter.for.week", "attribute"),
            identifier: "date2gen.quarter.for.week",
            /**
             * Display Form Title: Week Quarter (Date2gen)
             * Display Form ID: date2gen.quarter.for.week.number
             */ WeekQuarter: newAttribute("date2gen.quarter.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Quarter (Date2gen)
         * Date Attribute ID: date2gen.quarter.for.euweek
         */ EUWeekQuarter: {
            ref: idRef("date2gen.quarter.for.euweek", "attribute"),
            identifier: "date2gen.quarter.for.euweek",
            /**
             * Display Form Title: Week Quarter (Date2gen)
             * Display Form ID: date2gen.quarter.for.euweek.number
             */ WeekQuarter: newAttribute("date2gen.quarter.for.euweek.number"),
        },
    },
    /**
     * Date Data Set Title: Date (Date3gen)
     * Date Data Set ID: date3gen.dataset.dt
     */ Date3gen: {
        ref: idRef("date3gen.dataset.dt", "dataSet"),
        identifier: "date3gen.dataset.dt",
        /**
         * Date Attribute: Year (Date3gen)
         * Date Attribute ID: date3gen.year
         */ Year: {
            ref: idRef("date3gen.year", "attribute"),
            identifier: "date3gen.year",
            /**
             * Display Form Title: Year (Date3gen)
             * Display Form ID: date3gen.year.default
             */ Default: newAttribute("date3gen.year.default"),
        },
        /**
         * Date Attribute: Quarter (Date3gen)
         * Date Attribute ID: date3gen.quarter.in.year
         */ Quarter: {
            ref: idRef("date3gen.quarter.in.year", "attribute"),
            identifier: "date3gen.quarter.in.year",
            /**
             * Display Form Title: default (Date3gen)
             * Display Form ID: date3gen.quarter.in.year.default
             */ Default: newAttribute("date3gen.quarter.in.year.default"),
        },
        /**
         * Date Attribute: Week (Sun-Sat)/Year (Date3gen)
         * Date Attribute ID: date3gen.week
         */ WeekSunSatYear: {
            ref: idRef("date3gen.week", "attribute"),
            identifier: "date3gen.week",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date3gen)
             * Display Form ID: date3gen.week.wk_year
             */ WeekNrYear: newAttribute("date3gen.week.wk_year"),
            /**
             * Display Form Title: Week Starting (Date3gen)
             * Display Form ID: date3gen.week.starting
             */ WeekStarting: newAttribute("date3gen.week.starting"),
            /**
             * Display Form Title: From - To (Date3gen)
             * Display Form ID: date3gen.week.from_to
             */ FromTo: newAttribute("date3gen.week.from_to"),
            /**
             * Display Form Title: Week #/Year (Cont.) (Date3gen)
             * Display Form ID: date3gen.week.wk_year_cont
             */ WeekNrYear_1: newAttribute("date3gen.week.wk_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Cont.) (Date3gen)
             * Display Form ID: date3gen.week.wk_qtr_year_cont
             */ WkQtrYear: newAttribute("date3gen.week.wk_qtr_year_cont"),
            /**
             * Display Form Title: Wk/Qtr/Year (Date3gen)
             * Display Form ID: date3gen.week.wk_qtr_year
             */ WkQtrYear_1: newAttribute("date3gen.week.wk_qtr_year"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) (Date3gen)
         * Date Attribute ID: date3gen.week.in.year
         */ WeekSunSat: {
            ref: idRef("date3gen.week.in.year", "attribute"),
            identifier: "date3gen.week.in.year",
            /**
             * Display Form Title: Number US (Date3gen)
             * Display Form ID: date3gen.week.in.year.number_us
             */ NumberUS: newAttribute("date3gen.week.in.year.number_us"),
        },
        /**
         * Date Attribute: Week (Sun-Sat) of Qtr (Date3gen)
         * Date Attribute ID: date3gen.week.in.quarter
         */ WeekSunSatOfQtr: {
            ref: idRef("date3gen.week.in.quarter", "attribute"),
            identifier: "date3gen.week.in.quarter",
            /**
             * Display Form Title: Number US (Date3gen)
             * Display Form ID: date3gen.week.in.quarter.number_us
             */ NumberUS: newAttribute("date3gen.week.in.quarter.number_us"),
        },
        /**
         * Date Attribute: Week (Mon-Sun)/Year (Date3gen)
         * Date Attribute ID: date3gen.euweek
         */ WeekMonSunYear: {
            ref: idRef("date3gen.euweek", "attribute"),
            identifier: "date3gen.euweek",
            /**
             * Display Form Title: Week #/Year (W1/2010) (Date3gen)
             * Display Form ID: date3gen.euweek.wk_year
             */ WeekNrYear: newAttribute("date3gen.euweek.wk_year"),
            /**
             * Display Form Title: Week Starting (Date3gen)
             * Display Form ID: date3gen.euweek.starting
             */ WeekStarting: newAttribute("date3gen.euweek.starting"),
            /**
             * Display Form Title: From - To (Date3gen)
             * Display Form ID: date3gen.euweek.from_to
             */ FromTo: newAttribute("date3gen.euweek.from_to"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) (Date3gen)
         * Date Attribute ID: date3gen.euweek.in.year
         */ WeekMonSun: {
            ref: idRef("date3gen.euweek.in.year", "attribute"),
            identifier: "date3gen.euweek.in.year",
            /**
             * Display Form Title: Number EU (Date3gen)
             * Display Form ID: date3gen.euweek.in.year.number_eu
             */ NumberEU: newAttribute("date3gen.euweek.in.year.number_eu"),
        },
        /**
         * Date Attribute: Week (Mon-Sun) of Qtr (Date3gen)
         * Date Attribute ID: date3gen.euweek.in.quarter
         */ WeekMonSunOfQtr: {
            ref: idRef("date3gen.euweek.in.quarter", "attribute"),
            identifier: "date3gen.euweek.in.quarter",
            /**
             * Display Form Title: Number EU (Date3gen)
             * Display Form ID: date3gen.euweek.in.quarter.number_eu
             */ NumberEU: newAttribute("date3gen.euweek.in.quarter.number_eu"),
        },
        /**
         * Date Attribute: Month (Date3gen)
         * Date Attribute ID: date3gen.month.in.year
         */ Month: {
            ref: idRef("date3gen.month.in.year", "attribute"),
            identifier: "date3gen.month.in.year",
            /**
             * Display Form Title: Short (Jan) (Date3gen)
             * Display Form ID: date3gen.month.in.year.short
             */ Short: newAttribute("date3gen.month.in.year.short"),
            /**
             * Display Form Title: Long (January) (Date3gen)
             * Display Form ID: date3gen.month.in.year.long
             */ Long: newAttribute("date3gen.month.in.year.long"),
            /**
             * Display Form Title: Number (M1) (Date3gen)
             * Display Form ID: date3gen.month.in.year.number
             */ Number: newAttribute("date3gen.month.in.year.number"),
            /**
             * Display Form Title: M/Q (M1/Q1) (Date3gen)
             * Display Form ID: date3gen.month.in.year.m_q
             */ MQ: newAttribute("date3gen.month.in.year.m_q"),
        },
        /**
         * Date Attribute: Month of Quarter (Date3gen)
         * Date Attribute ID: date3gen.month.in.quarter
         */ MonthOfQuarter: {
            ref: idRef("date3gen.month.in.quarter", "attribute"),
            identifier: "date3gen.month.in.quarter",
            /**
             * Display Form Title: Number (Date3gen)
             * Display Form ID: date3gen.month.in.quarter.number
             */ Number: newAttribute("date3gen.month.in.quarter.number"),
        },
        /**
         * Date Attribute: Day of Year (Date3gen)
         * Date Attribute ID: date3gen.day.in.year
         */ DayOfYear: {
            ref: idRef("date3gen.day.in.year", "attribute"),
            identifier: "date3gen.day.in.year",
            /**
             * Display Form Title: default (Date3gen)
             * Display Form ID: date3gen.day.in.year.default
             */ Default: newAttribute("date3gen.day.in.year.default"),
        },
        /**
         * Date Attribute: Day of Week (Sun-Sat) (Date3gen)
         * Date Attribute ID: date3gen.day.in.week
         */ DayOfWeekSunSat: {
            ref: idRef("date3gen.day.in.week", "attribute"),
            identifier: "date3gen.day.in.week",
            /**
             * Display Form Title: Short (Sun) (Date3gen)
             * Display Form ID: date3gen.day.in.week.short
             */ Short: newAttribute("date3gen.day.in.week.short"),
            /**
             * Display Form Title: Long (Sunday) (Date3gen)
             * Display Form ID: date3gen.day.in.week.long
             */ Long: newAttribute("date3gen.day.in.week.long"),
            /**
             * Display Form Title: Number (1=Sunday) (Date3gen)
             * Display Form ID: date3gen.day.in.week.number
             */ Number: newAttribute("date3gen.day.in.week.number"),
        },
        /**
         * Date Attribute: Day of Week (Mon-Sun) (Date3gen)
         * Date Attribute ID: date3gen.day.in.euweek
         */ DayOfWeekMonSun: {
            ref: idRef("date3gen.day.in.euweek", "attribute"),
            identifier: "date3gen.day.in.euweek",
            /**
             * Display Form Title: Short (Mon) (Date3gen)
             * Display Form ID: date3gen.day.in.euweek.short
             */ Short: newAttribute("date3gen.day.in.euweek.short"),
            /**
             * Display Form Title: Long (Monday) (Date3gen)
             * Display Form ID: date3gen.day.in.euweek.long
             */ Long: newAttribute("date3gen.day.in.euweek.long"),
            /**
             * Display Form Title: Number (1=Monday) (Date3gen)
             * Display Form ID: date3gen.day.in.euweek.number
             */ Number: newAttribute("date3gen.day.in.euweek.number"),
        },
        /**
         * Date Attribute: Day of Quarter (Date3gen)
         * Date Attribute ID: date3gen.day.in.quarter
         */ DayOfQuarter: {
            ref: idRef("date3gen.day.in.quarter", "attribute"),
            identifier: "date3gen.day.in.quarter",
            /**
             * Display Form Title: default (Date3gen)
             * Display Form ID: date3gen.day.in.quarter.default
             */ Default: newAttribute("date3gen.day.in.quarter.default"),
        },
        /**
         * Date Attribute: Day of Month (Date3gen)
         * Date Attribute ID: date3gen.day.in.month
         */ DayOfMonth: {
            ref: idRef("date3gen.day.in.month", "attribute"),
            identifier: "date3gen.day.in.month",
            /**
             * Display Form Title: default (Date3gen)
             * Display Form ID: date3gen.day.in.month.default
             */ Default: newAttribute("date3gen.day.in.month.default"),
        },
        /**
         * Date Attribute: Quarter/Year (Date3gen)
         * Date Attribute ID: date3gen.quarter
         */ QuarterYear: {
            ref: idRef("date3gen.quarter", "attribute"),
            identifier: "date3gen.quarter",
            /**
             * Display Form Title: US Short (Date3gen)
             * Display Form ID: date3gen.quarter.short_us
             */ USShort: newAttribute("date3gen.quarter.short_us"),
        },
        /**
         * Date Attribute: Month/Year (Date3gen)
         * Date Attribute ID: date3gen.month
         */ MonthYear: {
            ref: idRef("date3gen.month", "attribute"),
            identifier: "date3gen.month",
            /**
             * Display Form Title: Short (Jan 2010) (Date3gen)
             * Display Form ID: date3gen.month.short
             */ Short: newAttribute("date3gen.month.short"),
            /**
             * Display Form Title: Long (January 2010) (Date3gen)
             * Display Form ID: date3gen.month.long
             */ Long: newAttribute("date3gen.month.long"),
            /**
             * Display Form Title: Number (1/2010) (Date3gen)
             * Display Form ID: date3gen.month.number
             */ Number: newAttribute("date3gen.month.number"),
        },
        /**
         * Date Attribute: Date (Date3gen)
         * Date Attribute ID: date3gen.date
         */ Date: {
            ref: idRef("date3gen.date", "attribute"),
            identifier: "date3gen.date",
            /**
             * Display Form Title: mm/dd/yyyy (Date3gen)
             * Display Form ID: date3gen.date.day.us.mm_dd_yyyy
             */ MmDdYyyy: newAttribute("date3gen.date.day.us.mm_dd_yyyy"),
            /**
             * Display Form Title: yyyy-mm-dd (Date3gen)
             * Display Form ID: date3gen.date.day.yyyy_mm_dd
             */ YyyyMmDd: newAttribute("date3gen.date.day.yyyy_mm_dd"),
            /**
             * Display Form Title: m/d/yy (no leading zeroes) (Date3gen)
             * Display Form ID: date3gen.date.day.us.m_d_yy
             */ MDYy: newAttribute("date3gen.date.day.us.m_d_yy"),
            /**
             * Display Form Title: Long (Mon, Jan 1, 2010) (Date3gen)
             * Display Form ID: date3gen.date.day.us.long
             */ Long: newAttribute("date3gen.date.day.us.long"),
            /**
             * Display Form Title: dd/mm/yyyy (Date3gen)
             * Display Form ID: date3gen.date.day.uk.dd_mm_yyyy
             */ DdMmYyyy: newAttribute("date3gen.date.day.uk.dd_mm_yyyy"),
            /**
             * Display Form Title: dd-mm-yyyy (Date3gen)
             * Display Form ID: date3gen.date.day.eu.dd_mm_yyyy
             */ DdMmYyyy_1: newAttribute("date3gen.date.day.eu.dd_mm_yyyy"),
        },
        /**
         * Date Attribute: US Week Year (Date3gen)
         * Date Attribute ID: date3gen.year.for.week
         */ USWeekYear: {
            ref: idRef("date3gen.year.for.week", "attribute"),
            identifier: "date3gen.year.for.week",
            /**
             * Display Form Title: Week Year (Date3gen)
             * Display Form ID: date3gen.year.for.week.number
             */ WeekYear: newAttribute("date3gen.year.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Year (Date3gen)
         * Date Attribute ID: date3gen.year.for.euweek
         */ EUWeekYear: {
            ref: idRef("date3gen.year.for.euweek", "attribute"),
            identifier: "date3gen.year.for.euweek",
            /**
             * Display Form Title: Week Year (Date3gen)
             * Display Form ID: date3gen.year.for.euweek.number
             */ WeekYear: newAttribute("date3gen.year.for.euweek.number"),
        },
        /**
         * Date Attribute: US Week Quarter (Date3gen)
         * Date Attribute ID: date3gen.quarter.for.week
         */ USWeekQuarter: {
            ref: idRef("date3gen.quarter.for.week", "attribute"),
            identifier: "date3gen.quarter.for.week",
            /**
             * Display Form Title: Week Quarter (Date3gen)
             * Display Form ID: date3gen.quarter.for.week.number
             */ WeekQuarter: newAttribute("date3gen.quarter.for.week.number"),
        },
        /**
         * Date Attribute: EU Week Quarter (Date3gen)
         * Date Attribute ID: date3gen.quarter.for.euweek
         */ EUWeekQuarter: {
            ref: idRef("date3gen.quarter.for.euweek", "attribute"),
            identifier: "date3gen.quarter.for.euweek",
            /**
             * Display Form Title: Week Quarter (Date3gen)
             * Display Form ID: date3gen.quarter.for.euweek.number
             */ WeekQuarter: newAttribute("date3gen.quarter.for.euweek.number"),
        },
    },
};
export const Insights = {
    /**
     * Insight Title: Avg Entree %
     * Insight ID: abHVSjwFgk4i
     */
    AvgEntreePercent: "abHVSjwFgk4i",
    /**
     * Insight Title: Total Sales by City
     * Insight ID: acPWDTL2bJeX
     */ TotalSalesByCity: "acPWDTL2bJeX",
    /**
     * Insight Title: Total Sales by Location Last Quarter
     * Insight ID: abmeiDsUhTNW
     */ TotalSalesByLocationLastQuarter: "abmeiDsUhTNW",
    /**
     * Insight Title: Total Sales by Week
     * Insight ID: aeSCEMsTfoj8
     */ TotalSalesByWeek: "aeSCEMsTfoj8",
    /**
     * Insight Title: $ Check Value by Trx
     * Insight ID: aa7N3HExdhKw
     */ $CheckValueByTrx: "aa7N3HExdhKw",
    /**
     * Insight Title: $ Total Sales by Location
     * Insight ID: aaBN5UG3dXu4
     */ $TotalSalesByLocation: "aaBN5UG3dXu4",
    /**
     * Insight Title: Sales over Time
     * Insight ID: acFJltTsifSQ
     */ SalesOverTime: "acFJltTsifSQ",
    /**
     * Insight Title: Costs over Time
     * Insight ID: abHJmzD1fZrW
     */ CostsOverTime: "abHJmzD1fZrW",
    /**
     * Insight Title: Labor Costs vs Scheduled Costs
     * Insight ID: abhJpedgcfU2
     */ LaborCostsVsScheduledCosts: "abhJpedgcfU2",
    /**
     * Insight Title: Gross profit % (date filters)
     * Insight ID: acOfuc2QiDZK
     */ GrossProfitPercentDateFilters: "acOfuc2QiDZK",
    /**
     * Insight Title: Table report Labor Costs Vs Scheduled Costs
     * Insight ID: aatFRvXBdilm
     */ TableReportLaborCostsVsScheduledCosts: "aatFRvXBdilm",
    /**
     * Insight Title: Franchise Fees
     * Insight ID: aahnVeLugyFj
     */ FranchiseFees: "aahnVeLugyFj",
    /**
     * Insight Title: Jak se ukladaj totaly?
     * Insight ID: aag18QiFahiP
     */ JakSeUkladajTotaly: "aag18QiFahiP",
    /**
     * Insight Title: doc_bb
     * Insight ID: aandGpipapsE
     */ DocBb: "aandGpipapsE",
    /**
     * Insight Title: Owned by city
     * Insight ID: aabnb2Kae09O
     */ OwnedByCity: "aabnb2Kae09O",
    /**
     * Insight Title: location filter
     * Insight ID: aacoryj5fJDB
     */ LocationFilter: "aacoryj5fJDB",
    /**
     * Insight Title: pivot table test
     * Insight ID: aae1lFs8hjW8
     */ PivotTableTest: "aae1lFs8hjW8",
    /**
     * Insight Title: pivot test 2
     * Insight ID: aacFP4anfb59
     */ PivotTest2: "aacFP4anfb59",
    /**
     * Insight Title: bar chart test
     * Insight ID: aacLScsebpR2
     */ BarChartTest: "aacLScsebpR2",
    /**
     * Insight Title: pivot table test 3
     * Insight ID: aadfnfPBbOPT
     */ PivotTableTest3: "aadfnfPBbOPT",
    /**
     * Insight Title: Ondruv big pivot
     * Insight ID: aappR4vfcFbc
     */ OndruvBigPivot: "aappR4vfcFbc",
    /**
     * Insight Title: Gross Profit Date filter
     * Insight ID: aabH7H5KeQmC
     */ GrossProfitDateFilter: "aabH7H5KeQmC",
    /**
     * Insight Title: pivot saved sort test
     * Insight ID: aabKUfWbgIEF
     */ PivotSavedSortTest: "aabKUfWbgIEF",
    /**
     * Insight Title: test pivot table
     * Insight ID: aafSxnYyiFfJ
     */ TestPivotTable: "aafSxnYyiFfJ",
    /**
     * Insight Title: pivot_lho
     * Insight ID: aabkQXHpayg5
     */ PivotLho: "aabkQXHpayg5",
    /**
     * Insight Title: dual axes bar
     * Insight ID: aaelg6f2eVQw
     */ DualAxesBar: "aaelg6f2eVQw",
    /**
     * Insight Title: test pivot table 2
     * Insight ID: aabtW12gev8y
     */ TestPivotTable2: "aabtW12gev8y",
    /**
     * Insight Title: pivot 2
     * Insight ID: aac7e1q3dmP0
     */ Pivot2: "aac7e1q3dmP0",
    /**
     * Insight Title: test 2
     * Insight ID: aac249qvixcU
     */ Test2: "aac249qvixcU",
    /**
     * Insight Title: drill test
     * Insight ID: aafkGVOGeVqI
     */ DrillTest: "aafkGVOGeVqI",
    /**
     * Insight Title: Dual axes test
     * Insight ID: aaePJArweqWe
     */ DualAxesTest: "aaePJArweqWe",
    /**
     * Insight Title: DHO_test
     * Insight ID: aaxhtKfGfkEF
     */ DHOTest: "aaxhtKfGfkEF",
    /**
     * Insight Title: DHO_test2
     * Insight ID: aabiyT4CehGr
     */ DHOTest2: "aabiyT4CehGr",
    /**
     * Insight Title: small
     * Insight ID: aanzUEMWbq6z
     */ Small: "aanzUEMWbq6z",
    /**
     * Insight Title: more
     * Insight ID: aacAuwnXespp
     */ More: "aacAuwnXespp",
    /**
     * Insight Title: DHO_test3
     * Insight ID: aacWKocqgmEQ
     */ DHOTest3: "aacWKocqgmEQ",
    /**
     * Insight Title: one row
     * Insight ID: aacXsNbVguPs
     */ OneRow: "aacXsNbVguPs",
    /**
     * Insight Title: PivotTable sort over col attr TEST
     * Insight ID: aaoX68WrbizG
     */ PivotTableSortOverColAttrTEST: "aaoX68WrbizG",
    /**
     * Insight Title: PivotTable TEST delete
     * Insight ID: aak2sQdegGaU
     */ PivotTableTESTDelete: "aak2sQdegGaU",
    /**
     * Insight Title: DHO_test4
     * Insight ID: aah24doLdkfQ
     */ DHOTest4: "aah24doLdkfQ",
    /**
     * Insight Title: DHO_test6
     * Insight ID: aab9BbnTeARE
     */ DHOTest6: "aab9BbnTeARE",
    /**
     * Insight Title: DHO_test7
     * Insight ID: aab9CyaOeudX
     */ DHOTest7: "aab9CyaOeudX",
    /**
     * Insight Title: DHO_test10
     * Insight ID: aaeCF1BQggYI
     */ DHOTest10: "aaeCF1BQggYI",
    /**
     * Insight Title: PivotTable rollup TEST
     * Insight ID: aahCVIXgcxDB
     */ PivotTableRollupTEST: "aahCVIXgcxDB",
    /**
     * Insight Title: DHO_RAIL-1285
     * Insight ID: aafM5QCbgVtb
     */ DHORAIL1285: "aafM5QCbgVtb",
    /**
     * Insight Title: EmptyTable
     * Insight ID: aabZT8uRflyw
     */ EmptyTable: "aabZT8uRflyw",
    /**
     * Insight Title: EmptyBarChart
     * Insight ID: aabZUbXsfroQ
     */ EmptyBarChart: "aabZUbXsfroQ",
    /**
     * Insight Title: Total Rollup check
     * Insight ID: aamgg7RnfKl4
     */ TotalRollupCheck: "aamgg7RnfKl4",
    /**
     * Insight Title: verify-1275
     * Insight ID: aadl8yxHdO4m
     */ Verify1275: "aadl8yxHdO4m",
    /**
     * Insight Title: hurtak - 1327
     * Insight ID: aabki5dXh9wQ
     */ Hurtak1327: "aabki5dXh9wQ",
    /**
     * Insight Title: xxx
     * Insight ID: aadA4E0gatW2
     */ Xxx: "aadA4E0gatW2",
    /**
     * Insight Title: Pivot Demo
     * Insight ID: aanRWCnEbsqd
     */ PivotDemo: "aanRWCnEbsqd",
    /**
     * Insight Title: Barchart
     * Insight ID: aacFqqnPbD5h
     */ Barchart: "aacFqqnPbD5h",
    /**
     * Insight Title: Employes vs Employes year ago
     * Insight ID: aabQVJmMb9Yi
     */ EmployesVsEmployesYearAgo: "aabQVJmMb9Yi",
    /**
     * Insight Title: hurtak - 1120
     * Insight ID: aabW0DCNgVFQ
     */ Hurtak1120: "aabW0DCNgVFQ",
    /**
     * Insight Title: hurtak - 1120
     * Insight ID: aabW0PfagVK5
     */ Hurtak1120_1: "aabW0PfagVK5",
    /**
     * Insight Title: ee
     * Insight ID: aabCZfnYgO02
     */ Ee: "aabCZfnYgO02",
    /**
     * Insight Title: Stackmeasures on column
     * Insight ID: aabRzJElgDjA
     */ StackmeasuresOnColumn: "aabRzJElgDjA",
    /**
     * Insight Title: StackMeasuresTo100% on Column
     * Insight ID: aauRyHnxgwKb
     */ StackMeasuresTo100PercentOnColumn: "aauRyHnxgwKb",
    /**
     * Insight Title: Column has 2 VB
     * Insight ID: aabRz113hYOH
     */ ColumnHas2VB: "aabRz113hYOH",
    /**
     * Insight Title: Bar has 2 VB and 1 SB
     * Insight ID: aakRBvKIgQAh
     */ BarHas2VBAnd1SB: "aakRBvKIgQAh",
    /**
     * Insight Title: Bar has 2 VB, 2MS
     * Insight ID: aadRCrQ3g0HQ
     */ BarHas2VB2MS: "aadRCrQ3g0HQ",
    /**
     * Insight Title: Stackmeasures on Bar
     * Insight ID: aakRCmnYg0tU
     */ StackmeasuresOnBar: "aakRCmnYg0tU",
    /**
     * Insight Title: Stackmeasure100% on Bar
     * Insight ID: aawRBnssdOCk
     */ Stackmeasure100PercentOnBar: "aawRBnssdOCk",
    /**
     * Insight Title: Area has 2 MS, noStacking
     * Insight ID: aaeRC5Kcg5eg
     */ AreaHas2MSNoStacking: "aaeRC5Kcg5eg",
    /**
     * Insight Title: Area has 2 VB
     * Insight ID: aapRB2W4ijXX
     */ AreaHas2VB: "aapRB2W4ijXX",
    /**
     * Insight Title: StackArea
     * Insight ID: aamRC9VzdXKn
     */ StackArea: "aamRC9VzdXKn",
    /**
     * Insight Title: StackArea-100%
     * Insight ID: aaHRCrQ3g0HQ
     */ StackArea100Percent: "aaHRCrQ3g0HQ",
    /**
     * Insight Title: StackBy-Area-100%
     * Insight ID: aahRD7q1ecpi
     */ StackByArea100Percent: "aahRD7q1ecpi",
    /**
     * Insight Title: StackBy_Area_
     * Insight ID: aahREz1Ahh56
     */ StackByArea: "aahREz1Ahh56",
    /**
     * Insight Title: StackColumn-StackBy100%
     * Insight ID: aabREJCshjmK
     */ StackColumnStackBy100Percent: "aabREJCshjmK",
    /**
     * Insight Title: Pivot Table
     * Insight ID: aagR3Mr6dARb
     */ PivotTable: "aagR3Mr6dARb",
    /**
     * Insight Title: Table 2
     * Insight ID: aaeR3HWzhC5S
     */ Table2: "aaeR3HWzhC5S",
    /**
     * Insight Title: Table 3
     * Insight ID: aacR3H35dFJZ
     */ Table3: "aacR3H35dFJZ",
    /**
     * Insight Title: treemap
     * Insight ID: aabcygjgaYuI
     */ Treemap: "aabcygjgaYuI",
    /**
     * Insight Title: Test Treemap has some measures
     * Insight ID: aabcL9UvcUlP
     */ TestTreemapHasSomeMeasures: "aabcL9UvcUlP",
    /**
     * Insight Title: heatmap 01
     * Insight ID: aaggG8eSdgS7
     */ Heatmap01: "aaggG8eSdgS7",
    /**
     * Insight Title: heatmap 2
     * Insight ID: aabgIoJjfE0L
     */ Heatmap2: "aabgIoJjfE0L",
    /**
     * Insight Title: Barrchart
     * Insight ID: aadgK1NsfYwT
     */ Barrchart: "aadgK1NsfYwT",
    /**
     * Insight Title: Donut
     * Insight ID: aabgLUFweqaa
     */ Donut: "aabgLUFweqaa",
    /**
     * Insight Title: Pie chart
     * Insight ID: aachKY94eoiK
     */ PieChart: "aachKY94eoiK",
    /**
     * Insight Title: test
     * Insight ID: aacffWMQd7S8
     */ Test: "aacffWMQd7S8",
    /**
     * Insight Title: int3
     * Insight ID: aabxvGlidLDH
     */ Int3: "aabxvGlidLDH",
    /**
     * Insight Title: piechart
     * Insight ID: aabYWQdPax5c
     */ Piechart: "aabYWQdPax5c",
    /**
     * Insight Title: barchart
     * Insight ID: aabYYxRYd6BF
     */ Barchart_1: "aabYYxRYd6BF",
    /**
     * Insight Title: Pivot table sizing
     * Insight ID: aaWcMSFtbf6B
     */ PivotTableSizing: "aaWcMSFtbf6B",
    /**
     * Insight Title: Column
     * Insight ID: aaldg1IDfawr
     */ Column: "aaldg1IDfawr",
    /**
     * Insight Title: Test_Donut_Chart
     * Insight ID: aahd7Tu3fExL
     */ TestDonutChart: "aahd7Tu3fExL",
    /**
     * Insight Title: Revenue Sale in Feb
     * Insight ID: aabf8I3se3vM
     */ RevenueSaleInFeb: "aabf8I3se3vM",
    /**
     * Insight Title: My Report
     * Insight ID: aahkt8nShPBP
     */ MyReport: "aahkt8nShPBP",
    /**
     * Insight Title: Mai's
     * Insight ID: aahkCHn5dEgV
     */ MaiS_1: "aahkCHn5dEgV",
    /**
     * Insight Title: Grouped pivot table
     * Insight ID: aagkFhnDdZ9k
     */ GroupedPivotTable: "aagkFhnDdZ9k",
    /**
     * Insight Title: Mai's 2
     * Insight ID: aaqqylQchDe2
     */ MaiS2: "aaqqylQchDe2",
    /**
     * Insight Title: Mai's 3
     * Insight ID: aacz7Sg1dmqZ
     */ MaiS3: "aacz7Sg1dmqZ",
    /**
     * Insight Title: mai test
     * Insight ID: aadS594kgKs1
     */ MaiTest: "aadS594kgKs1",
    /**
     * Insight Title: CSV_Exmaple
     * Insight ID: aacXKoMJcI8S
     */ CSVExmaple: "aacXKoMJcI8S",
    /**
     * Insight Title: Ex_GeoPushpin
     * Insight ID: aavZfO52a7Ji
     */ ExGeoPushpin: "aavZfO52a7Ji",
    /**
     * Insight Title: qa
     * Insight ID: aakOFWuUa7wC
     */ Qa: "aakOFWuUa7wC",
    /**
     * Insight Title: myGeoChart
     * Insight ID: aatP1PE5efHI
     */ MyGeoChart: "aatP1PE5efHI",
    /**
     * Insight Title: Mai1
     * Insight ID: aabyQiwtiuaZ
     */ Mai1: "aabyQiwtiuaZ",
    /**
     * Insight Title: MVF
     * Insight ID: aadR5mz2aFiR
     */ MVF: "aadR5mz2aFiR",
    /**
     * Insight Title: a
     * Insight ID: aao2qMQUclqc
     */ A: "aao2qMQUclqc",
    /**
     * Insight Title: InsightApplyMVF
     * Insight ID: aav8EFtxefQv
     */ InsightApplyMVF: "aav8EFtxefQv",
    /**
     * Insight Title: Column Chart
     * Insight ID: aahvVUA0f7oA
     */ ColumnChart: "aahvVUA0f7oA",
    /**
     * Insight Title: TU's
     * Insight ID: abqBQ1quee5H
     */ TUS: "abqBQ1quee5H",
    /**
     * Insight Title: Week filter
     * Insight ID: aapuBQX8dGHW
     */ WeekFilter: "aapuBQX8dGHW",
    /**
     * Insight Title: WF
     * Insight ID: aaJvADo1hs7v
     */ WF: "aaJvADo1hs7v",
    /**
     * Insight Title: aqws
     * Insight ID: aanVORnAdwhI
     */ Aqws: "aanVORnAdwhI",
    /**
     * Insight Title: abc
     * Insight ID: aaeVS7DYce7d
     */ Abc: "aaeVS7DYce7d",
    /**
     * Insight Title: cc
     * Insight ID: aaeVS0XWbUeh
     */ Cc: "aaeVS0XWbUeh",
    /**
     * Insight Title: aadd
     * Insight ID: aakVTb1ncflp
     */ Aadd: "aakVTb1ncflp",
    /**
     * Insight Title: sd-942
     * Insight ID: aaIVIV0rg1Io
     */ Sd942: "aaIVIV0rg1Io",
    /**
     * Insight Title: VisualizationBarByUri
     * Insight ID: aabESA6qfobY
     */ VisualizationBarByUri: "aabESA6qfobY",
    /**
     * Insight Title: VisualizationAreaByUri
     * Insight ID: aabETaqQdz6J
     */ VisualizationAreaByUri: "aabETaqQdz6J",
    /**
     * Insight Title: VisualizationLineByUri
     * Insight ID: aaeERg1qcRuX
     */ VisualizationLineByUri: "aaeERg1qcRuX",
    /**
     * Insight Title: VisualizationHeadlineByUri
     * Insight ID: aamERm18cRvs
     */ VisualizationHeadlineByUri: "aamERm18cRvs",
    /**
     * Insight Title: VisualizationScatterByUri
     * Insight ID: aadETzcxdMG4
     */ VisualizationScatterByUri: "aadETzcxdMG4",
    /**
     * Insight Title: VisualizationBubbleByUri
     * Insight ID: aaiETx3DdLW9
     */ VisualizationBubbleByUri: "aaiETx3DdLW9",
    /**
     * Insight Title: VisualizationPieByUri
     * Insight ID: aapESfYdfbT3
     */ VisualizationPieByUri: "aapESfYdfbT3",
    /**
     * Insight Title: VisualizationDonutByUri
     * Insight ID: aamESCiPfn8R
     */ VisualizationDonutByUri: "aamESCiPfn8R",
    /**
     * Insight Title: TEST
     * Insight ID: aaqdUYbbgint
     */ TEST: "aaqdUYbbgint",
    /**
     * Insight Title: 0
     * Insight ID: aahpQ4FnbcDy
     */ _0: "aahpQ4FnbcDy",
    /**
     * Insight Title: thg
     * Insight ID: aahwKw6VaiIS
     */ Thg: "aahwKw6VaiIS",
    /**
     * Insight Title: geo chart applies custom format
     * Insight ID: aafTO9xXefti
     */ GeoChartAppliesCustomFormat: "aafTO9xXefti",
    /**
     * Insight Title: areachart
     * Insight ID: aasZKdyAbPdK
     */ Areachart: "aasZKdyAbPdK",
    /**
     * Insight Title: tableThg
     * Insight ID: aajZLB2YexVZ
     */ TableThg: "aajZLB2YexVZ",
    /**
     * Insight Title: Table Thuong
     * Insight ID: aajbCsICfb2A
     */ TableThuong: "aajbCsICfb2A",
    /**
     * Insight Title: Table Thuong Fact %
     * Insight ID: aaibBVQXeTKG
     */ TableThuongFactPercent: "aaibBVQXeTKG",
    /**
     * Insight Title: Table Thuong Attribute %
     * Insight ID: aakbBUvOcJyc
     */ TableThuongAttributePercent: "aakbBUvOcJyc",
    /**
     * Insight Title: Table Thuong Simple %
     * Insight ID: aanbBVQUcSra
     */ TableThuongSimplePercent: "aanbBVQUcSra",
    /**
     * Insight Title: Table Thuong Full AM measure
     * Insight ID: aacbEeExdxr1
     */ TableThuongFullAMMeasure: "aacbEeExdxr1",
    /**
     * Insight Title: Column Thuong
     * Insight ID: aapbBQ10e3ke
     */ ColumnThuong: "aapbBQ10e3ke",
    /**
     * Insight Title: Bar Thuong
     * Insight ID: aaebEeqafQuX
     */ BarThuong: "aaebEeqafQuX",
    /**
     * Insight Title: Line Thuong
     * Insight ID: aabbEvGddxF9
     */ LineThuong: "aabbEvGddxF9",
    /**
     * Insight Title: Erea Thuong
     * Insight ID: aacbEekAfMPH
     */ EreaThuong: "aacbEekAfMPH",
    /**
     * Insight Title: Combo Thuong
     * Insight ID: aaubA2Z2cupv
     */ ComboThuong: "aaubA2Z2cupv",
    /**
     * Insight Title: Headline Thuong
     * Insight ID: aalbEiktfQGb
     */ HeadlineThuong: "aalbEiktfQGb",
    /**
     * Insight Title: Scatter Thuong
     * Insight ID: aaDbByw0eTXd
     */ ScatterThuong: "aaDbByw0eTXd",
    /**
     * Insight Title: Bubble Thuong
     * Insight ID: aaIbBVQUcSra
     */ BubbleThuong: "aaIbBVQUcSra",
    /**
     * Insight Title: Pie Thuong
     * Insight ID: aakbEeExdxr1
     */ PieThuong: "aakbEeExdxr1",
    /**
     * Insight Title: Donut Thuong
     * Insight ID: aaxbCM9kfoxo
     */ DonutThuong: "aaxbCM9kfoxo",
    /**
     * Insight Title: Treemap Thuong
     * Insight ID: aabbFv6Uf85O
     */ TreemapThuong: "aabbFv6Uf85O",
    /**
     * Insight Title: Heatmap Thuong
     * Insight ID: aanbDpUUc4nX
     */ HeatmapThuong: "aanbDpUUc4nX",
    /**
     * Insight Title: Bullet Thuong
     * Insight ID: aaSbBVQUcSra
     */ BulletThuong: "aaSbBVQUcSra",
    /**
     * Insight Title: abc
     * Insight ID: aadb2gKGioFY
     */ Abc_1: "aadb2gKGioFY",
    /**
     * Insight Title: de
     * Insight ID: aaMyVx1ffHup
     */ De: "aaMyVx1ffHup",
    /**
     * Insight Title: An.tableOnlyMeasures
     * Insight ID: aap6YizJhq8H
     */ AnTableOnlyMeasures: "aap6YizJhq8H",
    /**
     * Insight Title: An.tableOnlyRowsColumns
     * Insight ID: aaE6RgejdgBx
     */ AnTableOnlyRowsColumns: "aaE6RgejdgBx",
    /**
     * Insight Title: An.tableFull
     * Insight ID: aar6YizJhq8H
     */ AnTableFull: "aar6YizJhq8H",
    /**
     * Insight Title: An.tableOnlyMeasuresRows
     * Insight ID: aan6ZibUf6My
     */ AnTableOnlyMeasuresRows: "aan6ZibUf6My",
    /**
     * Insight Title: An.tableOnlyColumnsRows
     * Insight ID: aap6ZibUf6My
     */ AnTableOnlyColumnsRows: "aap6ZibUf6My",
    /**
     * Insight Title: An.tableTotalSub
     * Insight ID: aac65kY9hDs5
     */ AnTableTotalSub: "aac65kY9hDs5",
    /**
     * Insight Title: AD Formatting
     * Insight ID: aaR6YRbkhVye
     */ ADFormatting: "aaR6YRbkhVye",
    /**
     * Insight Title: Mai's
     * Insight ID: aab7y8XMcTlB
     */ MaiS_2: "aab7y8XMcTlB",
    /**
     * Insight Title: An.tableOnlyMeasuresRows
     * Insight ID: aas7KIHAfteD
     */ AnTableOnlyMeasuresRows_1: "aas7KIHAfteD",
    /**
     * Insight Title: An.tableOnlyMeasuresColumns
     * Insight ID: aaC7DtQrdN4T
     */ AnTableOnlyMeasuresColumns: "aaC7DtQrdN4T",
    /**
     * Insight Title: thg1
     * Insight ID: aabcwTXLhre3
     */ Thg1: "aabcwTXLhre3",
    /**
     * Insight Title: thg2
     * Insight ID: aawcRgn5bbqJ
     */ Thg2: "aawcRgn5bbqJ",
    /**
     * Insight Title: manual, only measures
     * Insight ID: aabdQQ6wbX9o
     */ ManualOnlyMeasures: "aabdQQ6wbX9o",
    /**
     * Insight Title: manual, measures & row
     * Insight ID: aafdSxPJcIQS
     */ ManualMeasuresAndRow: "aafdSxPJcIQS",
    /**
     * Insight Title: small table with total
     * Insight ID: adsjru7zaZD9
     */ SmallTableWithTotal: "adsjru7zaZD9",
    /**
     * Insight Title: manual, m, a, m, m, a
     * Insight ID: aadpeAJPca4e
     */ ManualMAMMA: "aadpeAJPca4e",
    /**
     * Insight Title: Headline
     * Insight ID: aabuhWlgfWCz
     */ Headline: "aabuhWlgfWCz",
    /**
     * Insight Title: PivotTable
     * Insight ID: aaguhzJufAlM
     */ PivotTable_1: "aaguhzJufAlM",
    /**
     * Insight Title: manual, all columns
     * Insight ID: aahum7wlg9ee
     */ ManualAllColumns: "aahum7wlg9ee",
    /**
     * Insight Title: manual, A, M, M
     * Insight ID: aafupCvuhYM3
     */ ManualAMM: "aafupCvuhYM3",
    /**
     * Insight Title: thgthg
     * Insight ID: aaPvJWCEgE3T
     */ Thgthg: "aaPvJWCEgE3T",
    /**
     * Insight Title: hihi
     * Insight ID: aacLWkk5hnuY
     */ Hihi: "aacLWkk5hnuY",
    /**
     * Insight Title: hehe
     * Insight ID: aajMSqdchW9T
     */ Hehe: "aajMSqdchW9T",
    /**
     * Insight Title: hehethg
     * Insight ID: aarMR2avhMlc
     */ Hehethg: "aarMR2avhMlc",
    /**
     * Insight Title: :D
     * Insight ID: aakMY0FUbfSq
     */ D: "aakMY0FUbfSq",
    /**
     * Insight Title: manual, all ctrl
     * Insight ID: aa4MVZJyar1j
     */ ManualAllCtrl: "aa4MVZJyar1j",
    /**
     * Insight Title: non manual resize
     * Insight ID: aawNm55phIfN
     */ NonManualResize: "aawNm55phIfN",
    /**
     * Insight Title: non manual resize
     * Insight ID: aa3Nsp8AaZeV
     */ NonManualResize_1: "aa3Nsp8AaZeV",
    /**
     * Insight Title: save
     * Insight ID: aacNzH4BexXF
     */ Save: "aacNzH4BexXF",
    /**
     * Insight Title: hưhie
     * Insight ID: aa6NtBAicVf8
     */ HHie: "aa6NtBAicVf8",
    /**
     * Insight Title: ềkjdfnjkndfkj ndfkgjn njdkfg nkjfn kdfngjknjkng kjfdngkjeri nfjkgnjkdfngkjndkfngkdnfkgdjkfgnkfdngnfdg
     * Insight ID: aajSMeuAdg5l
     */ KjdfnjkndfkjNdfkgjnNjdkfgNkjfnKdfngjknjkngKjfdngkjeriNfjkgnjkdfngkjndkfngkdnfkgdjkfgnkfdngnfdg:
        "aajSMeuAdg5l",
    /**
     * Insight Title: &^%$^&%^&^%$^&%$^&^%$#^$E% trndbch òdijgdngg the island is warn for year don't leave the window open my telephone is out of order I am teblery hunggry I dont like it at all I think so
     * Insight ID: aauSNoyReHL8
     */ AndPercent$AndPercentAndPercent$AndPercent$AndPercent$Nr$EPercentTrndbchDijgdnggTheIslandIsWarnForYearDonTLeaveTheWindowOpenMyTelephoneIsOutOfOrderIAmTebleryHunggryIDontLikeItAtAllIThinkSo:
        "aauSNoyReHL8",
    /**
     * Insight Title: save
     * Insight ID: aahTmeLzevIo
     */ Save_1: "aahTmeLzevIo",
    /**
     * Insight Title: :n
     * Insight ID: aaeY0wKZd9MC
     */ N: "aaeY0wKZd9MC",
    /**
     * Insight Title: thuong hee
     * Insight ID: aaH99BpLc3Df
     */ ThuongHee: "aaH99BpLc3Df",
    /**
     * Insight Title: thuong 3245678543 #$%^&%&^%$%thuong 3245678543 #$%^&%&^%$%thuong 3245678543 #$%^&%&^%$%thuong 3245678543 #$%^&%&^%$%thuong 3245678543 #$%^&%&^%$%thuong 3245678543 #$%^&%&^%$%thuong 3245678543 #$%^&%&^%$%thuong 3245678543 #$%^&%&^%$%thuong 3245678543 #$%^&
     * Insight ID: aaR97hYFibYN
     */ Thuong3245678543Nr$PercentAndPercentAndPercent$Percentthuong3245678543Nr$PercentAndPercentAndPercent$Percentthuong3245678543Nr$PercentAndPercentAndPercent$Percentthuong3245678543Nr$PercentAndPercentAndPercent$Percentthuong3245678543Nr$PercentAndPercentAndPercent$Percentthuong3245678543Nr$PercentAndPercentAndPercent$Percentthuong3245678543Nr$PercentAndPercentAndPercent$Percentthuong3245678543Nr$PercentAndPercentAndPercent$Percentthuong3245678543Nr$PercentAnd:
        "aaR97hYFibYN",
    /**
     * Insight Title: thuong @#%#^^&*%$%@#$!@##$^%*&^( thuong @#%#^^&*%$%@#$!@##$^%*&^( thuong @#%#^^&*%$%@#$!@##$^%*&^( thuong @#%#^^&*%$%@#$!@##$^%*&^( thuong @#%#^^&*%$%@#$!@##$^%*&^( thuong @#%#^^&*%$%@#$!@##$^%*&^( thuong @#%#^^&*%$%@#$!@##$^%*&^( thuong @#%#^^&*%$%@#$!@#
     * Insight ID: aaG993qPbU0t
     */ ThuongNrPercentNrAndPercent$PercentNr$NrNr$PercentAndThuongNrPercentNrAndPercent$PercentNr$NrNr$PercentAndThuongNrPercentNrAndPercent$PercentNr$NrNr$PercentAndThuongNrPercentNrAndPercent$PercentNr$NrNr$PercentAndThuongNrPercentNrAndPercent$PercentNr$NrNr$PercentAndThuongNrPercentNrAndPercent$PercentNr$NrNr$PercentAndThuongNrPercentNrAndPercent$PercentNr$NrNr$PercentAndThuongNrPercentNrAndPercent$PercentNr$Nr:
        "aaG993qPbU0t",
    /**
     * Insight Title: cc
     * Insight ID: aafCxjLWdtnt
     */ Cc_1: "aafCxjLWdtnt",
    /**
     * Insight Title: hihi
     * Insight ID: aaGcDaEndnmU
     */ Hihi_1: "aaGcDaEndnmU",
    /**
     * Insight Title: geo, full
     * Insight ID: aavnjFmecWVC
     */ GeoFull: "aavnjFmecWVC",
    /**
     * Insight Title: testaádasd
     * Insight ID: aaKnYFTRe1YW
     */ TestaDasd: "aaKnYFTRe1YW",
    /**
     * Insight Title: Hí Thuong
     * Insight ID: aaDtiE0IeaJb
     */ HThuong: "aaDtiE0IeaJb",
    /**
     * Insight Title: check export
     * Insight ID: aacBkwGRfjp3
     */ CheckExport: "aacBkwGRfjp3",
    /**
     * Insight Title: ee
     * Insight ID: aaimYavrdf26
     */ Ee_1: "aaimYavrdf26",
    /**
     * Insight Title: table
     * Insight ID: aafiHlAUa1Qo
     */ Table: "aafiHlAUa1Qo",
    /**
     * Insight Title: xirr
     * Insight ID: aawsGk2fh2Yz
     */ Xirr: "aawsGk2fh2Yz",
    /**
     * Insight Title: test
     * Insight ID: aaCs2YsCcvIM
     */ Test_1: "aaCs2YsCcvIM",
    /**
     * Insight Title: tablecheckresize
     * Insight ID: aadJjCWDbX5P
     */ Tablecheckresize: "aadJjCWDbX5P",
    /**
     * Insight Title: manual
     * Insight ID: aaSKk5VkhrPt
     */ Manual: "aaSKk5VkhrPt",
    /**
     * Insight Title: Barchart
     * Insight ID: aaKaMZUJeyGo
     */ Barchart_2: "aaKaMZUJeyGo",
    /**
     * Insight Title: LineChart
     * Insight ID: aaAaDFt4c1yC
     */ LineChart: "aaAaDFt4c1yC",
    /**
     * Insight Title: StackAreaChart
     * Insight ID: acCaGDIrc1iU
     */ StackAreaChart: "acCaGDIrc1iU",
    /**
     * Insight Title: Headline
     * Insight ID: aaiaOcMqbyMj
     */ Headline_1: "aaiaOcMqbyMj",
    /**
     * Insight Title: ScatterPlot
     * Insight ID: ab4aHg6lej5e
     */ ScatterPlot: "ab4aHg6lej5e",
    /**
     * Insight Title: BubbleChart
     * Insight ID: abNaJG2Aed2M
     */ BubbleChart: "abNaJG2Aed2M",
    /**
     * Insight Title: BulletChart
     * Insight ID: aatkydZzat7h
     */ BulletChart: "aatkydZzat7h",
    /**
     * Insight Title: PieChart
     * Insight ID: aaraOcrmdjZd
     */ PieChart_1: "aaraOcrmdjZd",
    /**
     * Insight Title: DonutChart
     * Insight ID: absaJEALgcdO
     */ DonutChart: "absaJEALgcdO",
    /**
     * Insight Title: TreeMap
     * Insight ID: aajaObFleXdD
     */ TreeMap: "aajaObFleXdD",
    /**
     * Insight Title: HeatMap
     * Insight ID: abkaJfMYiiCU
     */ HeatMap: "abkaJfMYiiCU",
    /**
     * Insight Title: ComboChart
     * Insight ID: aaTJJW6adsaj
     */ ComboChart: "aaTJJW6adsaj",
    /**
     * Insight Title: GeoPushpinChart
     * Insight ID: acebcI3fhaRI
     */ GeoPushpinChart: "acebcI3fhaRI",
    /**
     * Insight Title: thgchecl
     * Insight ID: aacWitvhhhbA
     */ Thgchecl: "aacWitvhhhbA",
    /**
     * Insight Title: table22
     * Insight ID: aacWEjy5bAfI
     */ Table22: "aacWEjy5bAfI",
    /**
     * Insight Title: column22
     * Insight ID: aabWHr0db6BW
     */ Column22: "aabWHr0db6BW",
    /**
     * Insight Title: bar22
     * Insight ID: aajWEPpciaYL
     */ Bar22: "aajWEPpciaYL",
    /**
     * Insight Title: area22
     * Insight ID: aabWHEjlaUhp
     */ Area22: "aabWHEjlaUhp",
    /**
     * Insight Title: combo22
     * Insight ID: aacWHLONhUBf
     */ Combo22: "aacWHLONhUBf",
    /**
     * Insight Title: test BB-2441
     * Insight ID: aab0OMuobE0p
     */ TestBB2441: "aab0OMuobE0p",
    /**
     * Insight Title: TEST
     * Insight ID: aag1ZZW3hhms
     */ TEST_1: "aag1ZZW3hhms",
    /**
     * Insight Title: thuongthuong
     * Insight ID: aal2CqC3eKcb
     */ Thuongthuong: "aal2CqC3eKcb",
    /**
     * Insight Title: Mai's GEo
     * Insight ID: aap7IDFJeNIf
     */ MaiSGEo: "aap7IDFJeNIf",
    /**
     * Insight Title: Bar chart
     * Insight ID: aah7M3yhhKFj
     */ BarChart: "aah7M3yhhKFj",
    /**
     * Insight Title: lalala
     * Insight ID: aat7Nf6uibo1
     */ Lalala: "aat7Nf6uibo1",
    /**
     * Insight Title: Attribute just text
     * Insight ID: aau7MYQghsec
     */ AttributeJustText: "aau7MYQghsec",
    /**
     * Insight Title: manythg
     * Insight ID: aac8iBZhgMnY
     */ Manythg: "aac8iBZhgMnY",
    /**
     * Insight Title: Headline
     * Insight ID: aak8Mv7QcNbs
     */ Headline_2: "aak8Mv7QcNbs",
    /**
     * Insight Title: y
     * Insight ID: aadk556leemG
     */ Y: "aadk556leemG",
    /**
     * Insight Title: Column
     * Insight ID: aaooIKGxamKl
     */ Column_1: "aaooIKGxamKl",
    /**
     * Insight Title: sdk 8 Column
     * Insight ID: aaco8TXYiuCm
     */ Sdk8Column: "aaco8TXYiuCm",
    /**
     * Insight Title: Headline with pOP
     * Insight ID: aasppLfkdIIH
     */ HeadlineWithPOP: "aasppLfkdIIH",
    /**
     * Insight Title: XIRR
     * Insight ID: aabpQJZDgeL4
     */ XIRR: "aabpQJZDgeL4",
    /**
     * Insight Title: Mai's Geo 2 measure
     * Insight ID: aacqdOcabqKL
     */ MaiSGeo2Measure: "aacqdOcabqKL",
    /**
     * Insight Title: Pivot table GEO
     * Insight ID: aakqhsaphHHO
     */ PivotTableGEO: "aakqhsaphHHO",
    /**
     * Insight Title: SDK7 Geo - Update 8
     * Insight ID: aaxqd1wdbCZi
     */ SDK7GeoUpdate8: "aaxqd1wdbCZi",
    /**
     * Insight Title: headlineWvariable
     * Insight ID: aagqqRDreyr7
     */ HeadlineWvariable: "aagqqRDreyr7",
    /**
     * Insight Title: 7.Show in %
     * Insight ID: aabqspULbvcG
     */ _7ShowInPercent: "aabqspULbvcG",
    /**
     * Insight Title: 8. Pivot1
     * Insight ID: aakt9d0UbNMo
     */ _8Pivot1: "aakt9d0UbNMo",
    /**
     * Insight Title: 8. Pivot wFilter
     * Insight ID: aacuglvTcX3t
     */ _8PivotWFilter: "aacuglvTcX3t",
    /**
     * Insight Title: 8. XIRR
     * Insight ID: aafuqm13c2Zj
     */ _8XIRR: "aafuqm13c2Zj",
    /**
     * Insight Title: only measure
     * Insight ID: aapvyl8RdVQS
     */ OnlyMeasure: "aapvyl8RdVQS",
    /**
     * Insight Title: Attribute on Column
     * Insight ID: aanvNKpzb0Cb
     */ AttributeOnColumn: "aanvNKpzb0Cb",
    /**
     * Insight Title: AD Prevent
     * Insight ID: aajGF94pbOLg
     */ ADPrevent: "aajGF94pbOLg",
    /**
     * Insight Title: Rail-2569
     * Insight ID: aarGOJS8aSdY
     */ Rail2569: "aarGOJS8aSdY",
    /**
     * Insight Title: TOO MANY DATA POINTS TO DISPLAY
     * Insight ID: aamGWdafepXI
     */ TOOMANYDATAPOINTSTODISPLAY: "aamGWdafepXI",
    /**
     * Insight Title: NO DATA FOR YOUR FILTER SELECTION
     * Insight ID: aaoGWRwIep2j
     */ NODATAFORYOURFILTERSELECTION: "aaoGWRwIep2j",
    /**
     * Insight Title: SORRY, WE CAN'T DISPLAY THIS INSIGHT
     * Insight ID: aaBG7oEmc7Iw
     */ SORRYWECANTDISPLAYTHISINSIGHT: "aaBG7oEmc7Iw",
    /**
     * Insight Title: geo
     * Insight ID: aabHBM3lft5l
     */ Geo: "aabHBM3lft5l",
    /**
     * Insight Title: headline 2
     * Insight ID: aad4Kl7Fd70c
     */ Headline2: "aad4Kl7Fd70c",
    /**
     * Insight Title: sdk8-antity-try-do-it
     * Insight ID: aavasz12hkkE
     */ Sdk8AntityTryDoIt: "aavasz12hkkE",
    /**
     * Insight Title: test geo
     * Insight ID: aabmv8OXikq8
     */ TestGeo: "aabmv8OXikq8",
    /**
     * Insight Title: VLK Geo
     * Insight ID: aab1ykELfwcT
     */ VLKGeo: "aab1ykELfwcT",
    /**
     * Insight Title: test Xirr
     * Insight ID: aaRnsDiLhbH3
     */ TestXirr: "aaRnsDiLhbH3",
    /**
     * Insight Title: pivotTable
     * Insight ID: aajFoLeMbdjD
     */ PivotTable_2: "aajFoLeMbdjD",
    /**
     * Insight Title: ádádas
     * Insight ID: aaBKCqTWepp6
     */ DDas: "aaBKCqTWepp6",
    /**
     * Insight Title: pivot
     * Insight ID: aavL5kxMd2c6
     */ Pivot: "aavL5kxMd2c6",
    /**
     * Insight Title: Pivote
     * Insight ID: aafMaPlBhkPJ
     */ Pivote: "aafMaPlBhkPJ",
    /**
     * Insight Title: GEO 2121212
     * Insight ID: aad3gFJ0e8Gr
     */ GEO2121212: "aad3gFJ0e8Gr",
    /**
     * Insight Title: SDk8 Pivot 1
     * Insight ID: aaR3m7V1ixbx
     */ SDk8Pivot1: "aaR3m7V1ixbx",
    /**
     * Insight Title: XIRR
     * Insight ID: aah3CwlocN4L
     */ XIRR_1: "aah3CwlocN4L",
    /**
     * Insight Title: ha hớ
     * Insight ID: aad9OCnug5zS
     */ HaH: "aad9OCnug5zS",
    /**
     * Insight Title: geo, no segment
     * Insight ID: aackskNVgS9e
     */ GeoNoSegment: "aackskNVgS9e",
    /**
     * Insight Title: geo, full
     * Insight ID: aafktY4BhfhG
     */ GeoFull_1: "aafktY4BhfhG",
    /**
     * Insight Title: geo, no size
     * Insight ID: aabkuQgaamrg
     */ GeoNoSize: "aabkuQgaamrg",
    /**
     * Insight Title: geo, no color
     * Insight ID: aajksMzHhgtY
     */ GeoNoColor: "aajksMzHhgtY",
    /**
     * Insight Title: geo, location, segment
     * Insight ID: aackuKIwhAhI
     */ GeoLocationSegment: "aackuKIwhAhI",
    /**
     * Insight Title: geo, location
     * Insight ID: aahkr9xMgTba
     */ GeoLocation: "aahkr9xMgTba",
    /**
     * Insight Title: table
     * Insight ID: aaektuuWhjgG
     */ Table_1: "aaektuuWhjgG",
    /**
     * Insight Title: headline
     * Insight ID: aackG1qoePdi
     */ Headline_3: "aackG1qoePdi",
    /**
     * Insight Title: scatter plot
     * Insight ID: aadkTHbLhXd1
     */ ScatterPlot_1: "aadkTHbLhXd1",
    /**
     * Insight Title: table 1
     * Insight ID: aaeq3oyChl84
     */ Table1: "aaeq3oyChl84",
    /**
     * Insight Title: table 2
     * Insight ID: aakq1Pq1aE0Z
     */ Table2_1: "aakq1Pq1aE0Z",
    /**
     * Insight Title: column 1
     * Insight ID: aadrcOGbcVQG
     */ Column1: "aadrcOGbcVQG",
    /**
     * Insight Title: Only SoThuTu
     * Insight ID: aalDJaCfaiNW
     */ OnlySoThuTu: "aalDJaCfaiNW",
    /**
     * Insight Title: Sanluong + Name,SoThuTu
     * Insight ID: aaeDMNlXaztA
     */ SanluongNameSoThuTu: "aaeDMNlXaztA",
    /**
     * Insight Title: PVT KD8
     * Insight ID: aacUiXydgPQA
     */ PVTKD8: "aacUiXydgPQA",
    /**
     * Insight Title: ColumnChart KD8
     * Insight ID: aaMUnhCIeRC6
     */ ColumnChartKD8: "aaMUnhCIeRC6",
    /**
     * Insight Title: Linechart KD8
     * Insight ID: aaQUnhCIeRC6
     */ LinechartKD8: "aaQUnhCIeRC6",
    /**
     * Insight Title: Combo chart KD8
     * Insight ID: aaHUnjk7h5UE
     */ ComboChartKD8: "aaHUnjk7h5UE",
    /**
     * Insight Title: AreaChart KD8
     * Insight ID: aaIUnjk7h5UE
     */ AreaChartKD8: "aaIUnjk7h5UE",
    /**
     * Insight Title: Barchart KD8
     * Insight ID: aaeUo4kXbo6M
     */ BarchartKD8: "aaeUo4kXbo6M",
    /**
     * Insight Title: name
     * Insight ID: aaAZE3pKdq5X
     */ Name: "aaAZE3pKdq5X",
    /**
     * Insight Title: table
     * Insight ID: aar47FqsfOpV
     */ Table_2: "aar47FqsfOpV",
    /**
     * Insight Title: PV 1 metric
     * Insight ID: aacmZPgggU29
     */ PV1Metric: "aacmZPgggU29",
    /**
     * Insight Title: PV 2 metrics
     * Insight ID: aabm0iLFdPZw
     */ PV2Metrics: "aabm0iLFdPZw",
    /**
     * Insight Title: PV 2 metrics + 1 row
     * Insight ID: aacmZIktgWiE
     */ PV2Metrics1Row: "aacmZIktgWiE",
    /**
     * Insight Title: PV 2 metrics + Total
     * Insight ID: aaqnc5JddbQE
     */ PV2MetricsTotal: "aaqnc5JddbQE",
    /**
     * Insight Title: PV 2 metric + 2 att on row
     * Insight ID: aahniRmGe5YR
     */ PV2Metric2AttOnRow: "aahniRmGe5YR",
    /**
     * Insight Title: PV 2metrics + 1 row + 1 column
     * Insight ID: aainslaDit28
     */ PV2metrics1Row1Column: "aainslaDit28",
    /**
     * Insight Title: Geo + Attribute filter
     * Insight ID: aaenDwT6d9hr
     */ GeoAttributeFilter: "aaenDwT6d9hr",
    /**
     * Insight Title: Bubble
     * Insight ID: aagnDEL0fxgr
     */ Bubble: "aagnDEL0fxgr",
    /**
     * Insight Title: GEo
     * Insight ID: aaAnBazqd9zc
     */ GEo: "aaAnBazqd9zc",
    /**
     * Insight Title: No metric
     * Insight ID: aaxrxjTlb7rZ
     */ NoMetric: "aaxrxjTlb7rZ",
    /**
     * Insight Title: 0922 XIRR
     * Insight ID: aadrBeDqir89
     */ _0922XIRR: "aadrBeDqir89",
    /**
     * Insight Title: 0922 XIRR 2
     * Insight ID: aazrxjTlb7rZ
     */ _0922XIRR2: "aazrxjTlb7rZ",
    /**
     * Insight Title: Show in %
     * Insight ID: aahrK3zlhL7o
     */ ShowInPercent: "aahrK3zlhL7o",
    /**
     * Insight Title: GEO - color
     * Insight ID: aabrQ2gwa51E
     */ GEOColor: "aabrQ2gwa51E",
    /**
     * Insight Title: Only metric
     * Insight ID: aaXrVQiAfyvH
     */ OnlyMetric: "aaXrVQiAfyvH",
    /**
     * Insight Title: % + CA
     * Insight ID: aahr1Dk5gljp
     */ PercentCA: "aahr1Dk5gljp",
    /**
     * Insight Title: Donut
     * Insight ID: aadr4oq4hrBN
     */ Donut_1: "aadr4oq4hrBN",
    /**
     * Insight Title: 1111
     * Insight ID: aaLs48Fkbqz7
     */ _1111: "aaLs48Fkbqz7",
    /**
     * Insight Title: Column oly metric
     * Insight ID: aabw9aAFaBa0
     */ ColumnOlyMetric: "aabw9aAFaBa0",
    /**
     * Insight Title: Column multiple metrics
     * Insight ID: aacw9cIPauoD
     */ ColumnMultipleMetrics: "aacw9cIPauoD",
    /**
     * Insight Title: Column + 1 ViewBy
     * Insight ID: aabw9Zd0bpO5
     */ Column1ViewBy: "aabw9Zd0bpO5",
    /**
     * Insight Title: Column 2 viewBY
     * Insight ID: aacw9mN5a5WR
     */ Column2ViewBY: "aacw9mN5a5WR",
    /**
     * Insight Title: Column + stackby
     * Insight ID: aacw9Zd0bpO5
     */ ColumnStackby: "aacw9Zd0bpO5",
    /**
     * Insight Title: ColumnPoP+ stackby % wDateF
     * Insight ID: aacw93OWaqmi
     */ ColumnPoPStackbyPercentWDateF: "aacw93OWaqmi",
    /**
     * Insight Title: Column + 2ViewBy+StackbyAttr
     * Insight ID: aacxaZAMbJLr
     */ Column2ViewByStackbyAttr: "aacxaZAMbJLr",
    /**
     * Insight Title: GEo0923
     * Insight ID: aanxHqfXaFz6
     */ GEo0923: "aanxHqfXaFz6",
    /**
     * Insight Title: Non-production
     * Insight ID: aabDkoIkbJti
     */ NonProduction: "aabDkoIkbJti",
    /**
     * Insight Title: line, hide data point
     * Insight ID: aaj1Cok7eUYq
     */ LineHideDataPoint: "aaj1Cok7eUYq",
    /**
     * Insight Title: area, hide data point
     * Insight ID: aag1CyxIeYiJ
     */ AreaHideDataPoint: "aag1CyxIeYiJ",
    /**
     * Insight Title: combo, hide data point
     * Insight ID: aab1FAW2fIzd
     */ ComboHideDataPoint: "aab1FAW2fIzd",
    /**
     * Insight Title: Ranking Filter
     * Insight ID: aab6TuYMdI4P
     */ RankingFilter: "aab6TuYMdI4P",
    /**
     * Insight Title: RF
     * Insight ID: aaoimEELcipR
     */ RF: "aaoimEELcipR",
    /**
     * Insight Title: color, measure value
     * Insight ID: aabjFqDbgeMd
     */ ColorMeasureValue: "aabjFqDbgeMd",
    /**
     * Insight Title: color, attribute elements
     * Insight ID: aacjHi1FgAgg
     */ ColorAttributeElements: "aacjHi1FgAgg",
    /**
     * Insight Title: color, attribute elements
     * Insight ID: aacjHVALcpbJ
     */ ColorAttributeElements_1: "aacjHVALcpbJ",
    /**
     * Insight Title: tree, color
     * Insight ID: aafjG5EXghuv
     */ TreeColor: "aafjG5EXghuv",
    /**
     * Insight Title: heat, color
     * Insight ID: aacjIr03gSZ6
     */ HeatColor: "aacjIr03gSZ6",
    /**
     * Insight Title: bb, color
     * Insight ID: aabjI6GQg4s0
     */ BbColor: "aabjI6GQg4s0",
    /**
     * Insight Title: RF2
     * Insight ID: aaljJyIycBCN
     */ RF2: "aaljJyIycBCN",
    /**
     * Insight Title: geo, color measure
     * Insight ID: aafjP1yZgzjf
     */ GeoColorMeasure: "aafjP1yZgzjf",
    /**
     * Insight Title: geo, color attribute element
     * Insight ID: aahjPGwQaYg2
     */ GeoColorAttributeElement: "aahjPGwQaYg2",
    /**
     * Insight Title: aaa
     * Insight ID: aaiovzjciCdr
     */ Aaa: "aaiovzjciCdr",
    /**
     * Insight Title: Telemetry
     * Insight ID: aaxoLbO3gMij
     */ Telemetry: "aaxoLbO3gMij",
    /**
     * Insight Title: table no drill
     * Insight ID: aadpvVicblE8
     */ TableNoDrill: "aadpvVicblE8",
    /**
     * Insight Title: column no drill
     * Insight ID: aacpv1gSbwTI
     */ ColumnNoDrill: "aacpv1gSbwTI",
    /**
     * Insight Title: 498 -table
     * Insight ID: aasLEAtNdrRh
     */ _498Table: "aasLEAtNdrRh",
    /**
     * Insight Title: 498 -column
     * Insight ID: aapLEV1VdrH7
     */ _498Column: "aapLEV1VdrH7",
    /**
     * Insight Title: 498 - Barchart
     * Insight ID: aaeLJ3Ghh3kv
     */ _498Barchart: "aaeLJ3Ghh3kv",
    /**
     * Insight Title: 498 - Line chart
     * Insight ID: aadLM5tsho1F
     */ _498LineChart: "aadLM5tsho1F",
    /**
     * Insight Title: 498-Area
     * Insight ID: aadLRVhJgWBh
     */ _498Area: "aadLRVhJgWBh",
    /**
     * Insight Title: 498- Combo chart
     * Insight ID: aarLR8jMdARr
     */ _498ComboChart: "aarLR8jMdARr",
    /**
     * Insight Title: 498 -headline
     * Insight ID: aakLUL1DeK7m
     */ _498Headline: "aakLUL1DeK7m",
    /**
     * Insight Title: 498- scatterPlot
     * Insight ID: aabLWraWfqfQ
     */ _498ScatterPlot: "aabLWraWfqfQ",
    /**
     * Insight Title: 498 - bubble chart
     * Insight ID: aabLWvFWfn28
     */ _498BubbleChart: "aabLWvFWfn28",
    /**
     * Insight Title: 498 -pie chart
     * Insight ID: aaiLWqqZaiPY
     */ _498PieChart: "aaiLWqqZaiPY",
    /**
     * Insight Title: 498 -tree map
     * Insight ID: aajLWqqZaiPY
     */ _498TreeMap: "aajLWqqZaiPY",
    /**
     * Insight Title: 498 -heatmap
     * Insight ID: aaHLUJbmh5XW
     */ _498Heatmap: "aaHLUJbmh5XW",
    /**
     * Insight Title: 498- bullet chart
     * Insight ID: aaILUJbmh5XW
     */ _498BulletChart: "aaILUJbmh5XW",
    /**
     * Insight Title: 498 - geo chart
     * Insight ID: aadLWF3Gfqxc
     */ _498GeoChart: "aadLWF3Gfqxc",
    /**
     * Insight Title: combo as area
     * Insight ID: aacW7YJcclsf
     */ ComboAsArea: "aacW7YJcclsf",
    /**
     * Insight Title: Only Namene
     * Insight ID: aa0kSChefCeq
     */ OnlyNamene: "aa0kSChefCeq",
    /**
     * Insight Title: test long element
     * Insight ID: aafq26PKheCb
     */ TestLongElement: "aafq26PKheCb",
    /**
     * Insight Title: test
     * Insight ID: aauDsGcTeV6c
     */ Test_2: "aauDsGcTeV6c",
    /**
     * Insight Title: save as PT Component
     * Insight ID: aajEcT22fSkf
     */ SaveAsPTComponent: "aajEcT22fSkf",
    /**
     * Insight Title: Trang-insight
     * Insight ID: aaj5XneSfEs6
     */ TrangInsight: "aaj5XneSfEs6",
    /**
     * Insight Title: table
     * Insight ID: aafcVwpBa81c
     */ Table_3: "aafcVwpBa81c",
    /**
     * Insight Title: column
     * Insight ID: aabcV7dHaYp0
     */ Column_2: "aabcV7dHaYp0",
    /**
     * Insight Title: bar
     * Insight ID: aaccVUFPhSjy
     */ Bar: "aaccVUFPhSjy",
    /**
     * Insight Title: Line
     * Insight ID: aaccV65XbrH0
     */ Line: "aaccV65XbrH0",
    /**
     * Insight Title: stacked
     * Insight ID: aaucSbw2igN3
     */ Stacked: "aaucSbw2igN3",
    /**
     * Insight Title: combo
     * Insight ID: aabcWDR6bBay
     */ Combo: "aabcWDR6bBay",
    /**
     * Insight Title: pie
     * Insight ID: aabcWGLubyXD
     */ Pie: "aabcWGLubyXD",
    /**
     * Insight Title: 0101010
     * Insight ID: aawokSmSb64N
     */ _0101010: "aawokSmSb64N",
    /**
     * Insight Title: Rezing
     * Insight ID: aaeFotP1fR98
     */ Rezing: "aaeFotP1fR98",
    /**
     * Insight Title: 3334
     * Insight ID: aabFCIeyavnx
     */ _3334: "aabFCIeyavnx",
    /**
     * Insight Title: thuong ok
     * Insight ID: aafFRg4NbpwN
     */ ThuongOk: "aafFRg4NbpwN",
    /**
     * Insight Title: thuong ok 1
     * Insight ID: aaiGe9qNhHWk
     */ ThuongOk1: "aaiGe9qNhHWk",
    /**
     * Insight Title: thuong ok1
     * Insight ID: aagKCMODfyf6
     */ ThuongOk1_1: "aagKCMODfyf6",
    /**
     * Insight Title: sadsadsadd
     * Insight ID: aaeKDCWGetEG
     */ Sadsadsadd: "aaeKDCWGetEG",
    /**
     * Insight Title: lalalala
     * Insight ID: aabL0lTIdUU4
     */ Lalalala: "aabL0lTIdUU4",
    /**
     * Insight Title: Test export
     * Insight ID: aab3g8ikbHqM
     */ TestExport: "aab3g8ikbHqM",
    /**
     * Insight Title: rtrew
     * Insight ID: aac5cVUZfqLp
     */ Rtrew: "aac5cVUZfqLp",
    /**
     * Insight Title: One-4695
     * Insight ID: aacnc8ZGgxDl
     */ One4695: "aacnc8ZGgxDl",
    /**
     * Insight Title: new insight
     * Insight ID: aafXzj46gjvN
     */ NewInsight: "aafXzj46gjvN",
    /**
     * Insight Title: rtgdf
     * Insight ID: aao85GBIhVn0
     */ Rtgdf: "aao85GBIhVn0",
    /**
     * Insight Title: columnsize
     * Insight ID: aabkQ5JLg9Mz
     */ Columnsize: "aabkQ5JLg9Mz",
    /**
     * Insight Title: new
     * Insight ID: aacItoFScngy
     */ New: "aacItoFScngy",
    /**
     * Insight Title: 1
     * Insight ID: aacIShk0bFQT
     */ _1: "aacIShk0bFQT",
    /**
     * Insight Title: TLU-2841
     * Insight ID: aacJQIOWb3l1
     */ TLU2841: "aacJQIOWb3l1",
    /**
     * Insight Title: s
     * Insight ID: aanT1uCGhNJu
     */ S: "aanT1uCGhNJu",
    /**
     * Insight Title: hdhd
     * Insight ID: aafVrROgaZCA
     */ Hdhd: "aafVrROgaZCA",
    /**
     * Insight Title: nềh
     * Insight ID: aac0TXidgn2w
     */ NH: "aac0TXidgn2w",
    /**
     * Insight Title: DashTLU
     * Insight ID: aadiI8VNiDzb
     */ DashTLU: "aadiI8VNiDzb",
    /**
     * Insight Title: TLU-2609
     * Insight ID: aaesSVJOeWJx
     */ TLU2609: "aaesSVJOeWJx",
    /**
     * Insight Title: TLU-2
     * Insight ID: aabs2Ub3fkVE
     */ TLU2: "aabs2Ub3fkVE",
    /**
     * Insight Title: dzxfsdfsdf
     * Insight ID: aaeyAQ6WdJKE
     */ Dzxfsdfsdf: "aaeyAQ6WdJKE",
    /**
     * Insight Title: rfdg
     * Insight ID: aadEl7GEgaMx
     */ Rfdg: "aadEl7GEgaMx",
    /**
     * Insight Title: sfdsds
     * Insight ID: aajEIQ6whXEq
     */ Sfdsds: "aajEIQ6whXEq",
    /**
     * Insight Title: dfdsfsdf
     * Insight ID: aafFjAxyaZXx
     */ Dfdsfsdf: "aafFjAxyaZXx",
    /**
     * Insight Title: dsdfsdf
     * Insight ID: aabFT04SfbGY
     */ Dsdfsdf: "aabFT04SfbGY",
    /**
     * Insight Title: Headline
     * Insight ID: aaeFVwQcf1L3
     */ Headline_4: "aaeFVwQcf1L3",
    /**
     * Insight Title: thuong cute
     * Insight ID: aabFXGWZgQxF
     */ ThuongCute: "aabFXGWZgQxF",
    /**
     * Insight Title: TLU-KpiA
     * Insight ID: aabdGDSDbkIF
     */ TLUKpiA: "aabdGDSDbkIF",
    /**
     * Insight Title: XIRR
     * Insight ID: aamrJjv0iCxp
     */ XIRR_2: "aamrJjv0iCxp",
    /**
     * Insight Title: XIRR 2
     * Insight ID: aajrK8cfafuf
     */ XIRR2: "aajrK8cfafuf",
    /**
     * Insight Title: dates, multi dimension
     * Insight ID: aac7KwNabBqL
     */ DatesMultiDimension: "aac7KwNabBqL",
    /**
     * Insight Title: Huyen check
     * Insight ID: aak7LSLRdox3
     */ HuyenCheck: "aak7LSLRdox3",
    /**
     * Insight Title: Hyuen check heatmap
     * Insight ID: aag7MXcxdHLI
     */ HyuenCheckHeatmap: "aag7MXcxdHLI",
    /**
     * Insight Title: fgh
     * Insight ID: aajSCgocgsVg
     */ Fgh: "aajSCgocgsVg",
    /**
     * Insight Title: No scroll
     * Insight ID: aabkLmEldpa9
     */ NoScroll: "aabkLmEldpa9",
    /**
     * Insight Title: Has scroll
     * Insight ID: aaikKt23fdR0
     */ HasScroll: "aaikKt23fdR0",
    /**
     * Insight Title: hehe
     * Insight ID: aabrtGq8fROV
     */ Hehe_1: "aabrtGq8fROV",
    /**
     * Insight Title: 111
     * Insight ID: aacGMpFZfBtJ
     */ _111: "aacGMpFZfBtJ",
    /**
     * Insight Title: 2 Date 0223
     * Insight ID: aaiZang6h2cW
     */ _2Date0223: "aaiZang6h2cW",
    /**
     * Insight Title: 2Date 0223.2
     * Insight ID: aabZdvKRaFeE
     */ _2Date02232: "aabZdvKRaFeE",
    /**
     * Insight Title: 2date 4
     * Insight ID: aadZeOxFa8sm
     */ _2date4: "aadZeOxFa8sm",
    /**
     * Insight Title: 1111
     * Insight ID: aajZeOxFa8sm
     */ _1111_1: "aajZeOxFa8sm",
    /**
     * Insight Title: 111111
     * Insight ID: aasZijpwepjE
     */ _111111: "aasZijpwepjE",
    /**
     * Insight Title: test leaving AD OL
     * Insight ID: aatZiN5levcs
     */ TestLeavingADOL: "aatZiN5levcs",
    /**
     * Insight Title: test leave AD Ol
     * Insight ID: aasZjKgFeOX6
     */ TestLeaveADOl: "aasZjKgFeOX6",
    /**
     * Insight Title: 111
     * Insight ID: aadZnS69f5F7
     */ _111_1: "aadZnS69f5F7",
    /**
     * Insight Title: 0224
     * Insight ID: aab30Dgef9xs
     */ _0224: "aab30Dgef9xs",
    /**
     * Insight Title: 111121
     * Insight ID: aab31eqIgTLp
     */ _111121: "aab31eqIgTLp",
    /**
     * Insight Title: Copy of 111121
     * Insight ID: aal32obNeiHn
     */ CopyOf111121: "aal32obNeiHn",
    /**
     * Insight Title: drill down
     * Insight ID: aad5FEk2ghMR
     */ DrillDown: "aad5FEk2ghMR",
    /**
     * Insight Title: TLU-datetime
     * Insight ID: aachvGH2fScf
     */ TLUDatetime: "aachvGH2fScf",
    /**
     * Insight Title: check pivot QA 12672
     * Insight ID: aabDcMJAd8zz
     */ CheckPivotQA12672: "aabDcMJAd8zz",
    /**
     * Insight Title: DHO small sum
     * Insight ID: aabF3yWjeKpd
     */ DHOSmallSum: "aabF3yWjeKpd",
    /**
     * Insight Title: headline 1
     * Insight ID: aabpAa3AeMWw
     */ Headline1: "aabpAa3AeMWw",
    /**
     * Insight Title: geo with austra
     * Insight ID: aabDDPObdyD7
     */ GeoWithAustra: "aabDDPObdyD7",
    /**
     * Insight Title: geo with austra 2
     * Insight ID: aadHEh1nfmHO
     */ GeoWithAustra2: "aadHEh1nfmHO",
    /**
     * Insight Title: geo
     * Insight ID: aaia1qNJa3HG
     */ Geo_1: "aaia1qNJa3HG",
    /**
     * Insight Title: XIRR
     * Insight ID: aadm2adrgpUc
     */ XIRR_3: "aadm2adrgpUc",
    /**
     * Insight Title: Theme: BarChart
     * Insight ID: aafojj3Ghzc2
     */ ThemeBarChart: "aafojj3Ghzc2",
    /**
     * Insight Title: Theme: Line chart
     * Insight ID: aactcSuwgbKt
     */ ThemeLineChart: "aactcSuwgbKt",
    /**
     * Insight Title: Theme: Stacked area chart
     * Insight ID: aagtcvobf5v5
     */ ThemeStackedAreaChart: "aagtcvobf5v5",
    /**
     * Insight Title: Theme: combo chart
     * Insight ID: aaytaNVQfEz3
     */ ThemeComboChart: "aaytaNVQfEz3",
    /**
     * Insight Title: Theme: Scatter plot
     * Insight ID: aajta5iDfs5R
     */ ThemeScatterPlot: "aajta5iDfs5R",
    /**
     * Insight Title: Theme: Bubble
     * Insight ID: aahtcaWraRfq
     */ ThemeBubble: "aahtcaWraRfq",
    /**
     * Insight Title: Theme: pie
     * Insight ID: aagtbFCjaGNx
     */ ThemePie: "aagtbFCjaGNx",
    /**
     * Insight Title: Theme: Donut
     * Insight ID: aaetcSuwgbKt
     */ ThemeDonut: "aaetcSuwgbKt",
    /**
     * Insight Title: Theme: treemap
     * Insight ID: aahtcBWWaZwL
     */ ThemeTreemap: "aahtcBWWaZwL",
    /**
     * Insight Title: Theme: Heatmap
     * Insight ID: aagtcBZVf6l4
     */ ThemeHeatmap: "aagtcBZVf6l4",
    /**
     * Insight Title: Theme: bullet
     * Insight ID: aaitbFCjaGNx
     */ ThemeBullet: "aaitbFCjaGNx",
    /**
     * Insight Title: Theme: Geo chart full option
     * Insight ID: aaitcvobf5v5
     */ ThemeGeoChartFullOption: "aaitcvobf5v5",
    /**
     * Insight Title: Theme: XIRR
     * Insight ID: aamtcaWraRfq
     */ ThemeXIRR: "aamtcaWraRfq",
    /**
     * Insight Title: Theme: Headline
     * Insight ID: aagtcSuwgbKt
     */ ThemeHeadline: "aagtcSuwgbKt",
    /**
     * Insight Title: Theme: ColumnChart
     * Insight ID: aagtcVbMa1KO
     */ ThemeColumnChart: "aagtcVbMa1KO",
    /**
     * Insight Title: Theme: Pivot Table
     * Insight ID: aajtbFCjaGNx
     */ ThemePivotTable: "aajtbFCjaGNx",
    /**
     * Insight Title: ABC
     * Insight ID: aabeoBPmbUy6
     */ ABC: "aabeoBPmbUy6",
    /**
     * Insight Title: PP Insight
     * Insight ID: aaifcBcIarIx
     */ PPInsight: "aaifcBcIarIx",
    /**
     * Insight Title: aaa
     * Insight ID: aanvbUeAhmLp
     */ Aaa_1: "aanvbUeAhmLp",
    /**
     * Insight Title: Theme: Geo, only Location
     * Insight ID: aanHm0yJhqgD
     */ ThemeGeoOnlyLocation: "aanHm0yJhqgD",
    /**
     * Insight Title: Theme: Geo, location + segment
     * Insight ID: aaoHpnYmh1o0
     */ ThemeGeoLocationSegment: "aaoHpnYmh1o0",
    /**
     * Insight Title: Theme: Geo, location + size
     * Insight ID: aadHrcLedO8L
     */ ThemeGeoLocationSize: "aadHrcLedO8L",
    /**
     * Insight Title: Theme: Geo, Location + color
     * Insight ID: aakHaNDyd04J
     */ ThemeGeoLocationColor: "aakHaNDyd04J",
    /**
     * Insight Title: Theme: Geo, Location + size + color
     * Insight ID: aaoHm0yJhqgD
     */ ThemeGeoLocationSizeColor: "aaoHm0yJhqgD",
    /**
     * Insight Title: Theme: Geo, Location + size + segment
     * Insight ID: aajHmJUVasd5
     */ ThemeGeoLocationSizeSegment: "aajHmJUVasd5",
    /**
     * Insight Title: Theme: Geo, Location + color + segment
     * Insight ID: aafHqyGJdPhR
     */ ThemeGeoLocationColorSegment: "aafHqyGJdPhR",
    /**
     * Insight Title: Theme: derived measure
     * Insight ID: aahHp9nEdbYN
     */ ThemeDerivedMeasure: "aahHp9nEdbYN",
    /**
     * Insight Title: Theme: bullet
     * Insight ID: aaCHsRQqem7C
     */ ThemeBullet_1: "aaCHsRQqem7C",
    /**
     * Insight Title: OK
     * Insight ID: aagw12SUamVn
     */ OK: "aagw12SUamVn",
    /**
     * Insight Title: PL
     * Insight ID: aafw2W8FbfMN
     */ PL: "aafw2W8FbfMN",
    /**
     * Insight Title: No metric
     * Insight ID: aacPXpL1eXcE
     */ NoMetric_1: "aacPXpL1eXcE",
    /**
     * Insight Title: dayofweek
     * Insight ID: aadQqngPgMLU
     */ Dayofweek: "aadQqngPgMLU",
    /**
     * Insight Title: dayofmonth
     * Insight ID: aajQqiyxgt3T
     */ Dayofmonth: "aajQqiyxgt3T",
    /**
     * Insight Title: dayofquarter
     * Insight ID: aagQsgVxfbIU
     */ Dayofquarter: "aagQsgVxfbIU",
    /**
     * Insight Title: dayofyear
     * Insight ID: aadQv4y0ik6M
     */ Dayofyear: "aadQv4y0ik6M",
    /**
     * Insight Title: weekofquater
     * Insight ID: aaeQv4y0ik6M
     */ Weekofquater: "aaeQv4y0ik6M",
    /**
     * Insight Title: weekofyear
     * Insight ID: aadQwvnniyid
     */ Weekofyear: "aadQwvnniyid",
    /**
     * Insight Title: monthofquater
     * Insight ID: aacQxn7ShBYP
     */ Monthofquater: "aacQxn7ShBYP",
    /**
     * Insight Title: monthofyear
     * Insight ID: aagQuqpyhOnA
     */ Monthofyear: "aagQuqpyhOnA",
    /**
     * Insight Title: quaterofyear
     * Insight ID: aafQv0Y4isDp
     */ Quaterofyear: "aafQv0Y4isDp",
    /**
     * Insight Title: dayofweek2
     * Insight ID: aasQoRCcgCkT
     */ Dayofweek2: "aasQoRCcgCkT",
    /**
     * Insight Title: dayofmonth2
     * Insight ID: aabQxTb5ihS4
     */ Dayofmonth2: "aabQxTb5ihS4",
    /**
     * Insight Title: dayofquater2
     * Insight ID: aauQoRCcgCkT
     */ Dayofquater2: "aauQoRCcgCkT",
    /**
     * Insight Title: dayofyear2
     * Insight ID: aabQx1XfihGr
     */ Dayofyear2: "aabQx1XfihGr",
    /**
     * Insight Title: Save as new
     * Insight ID: aab0rQawfIaD
     */ SaveAsNew: "aab0rQawfIaD",
    /**
     * Insight Title: create new
     * Insight ID: aal0rjPBfvJs
     */ CreateNew: "aal0rjPBfvJs",
    /**
     * Insight Title: abcd
     * Insight ID: aab0vxM8dpes
     */ Abcd: "aab0vxM8dpes",
    /**
     * Insight Title: Loading Pivot
     * Insight ID: aaE1rYyBdInH
     */ LoadingPivot: "aaE1rYyBdInH",
    /**
     * Insight Title: save insight
     * Insight ID: aac11hjxej9E
     */ SaveInsight: "aac11hjxej9E",
    /**
     * Insight Title: save as newww
     * Insight ID: aav11g8pekax
     */ SaveAsNewww: "aav11g8pekax",
    /**
     * Insight Title: My test localId
     * Insight ID: aaj1492marSL
     */ MyTestLocalId: "aaj1492marSL",
    /**
     * Insight Title: Bullet
     * Insight ID: aab67I1LfoGF
     */ Bullet: "aab67I1LfoGF",
    /**
     * Insight Title: OL
     * Insight ID: aab7uqd3fsH7
     */ OL: "aab7uqd3fsH7",
    /**
     * Insight Title: New Bullet Chart
     * Insight ID: aaf7GKlPfmeW
     */ NewBulletChart: "aaf7GKlPfmeW",
    /**
     * Insight Title: New Dual
     * Insight ID: aaeAIxQkaJuh
     */ NewDual: "aaeAIxQkaJuh",
    /**
     * Insight Title: rail-3302
     * Insight ID: aarAKiFwdJJD
     */ Rail3302: "aarAKiFwdJJD",
    /**
     * Insight Title: Auto resizing
     * Insight ID: aabGOq8pdRpe
     */ AutoResizing: "aabGOq8pdRpe",
    /**
     * Insight Title: Bar Chart2
     * Insight ID: aazeNDIVcrbp
     */ BarChart2: "aazeNDIVcrbp",
    /**
     * Insight Title: Column
     * Insight ID: aaognUdKhoqG
     */ Column_3: "aaognUdKhoqG",
    /**
     * Insight Title: Heatmap
     * Insight ID: aablHFymeNak
     */ Heatmap: "aablHFymeNak",
    /**
     * Insight Title: No Legend
     * Insight ID: aaclZWjMaV2U
     */ NoLegend: "aaclZWjMaV2U",
    /**
     * Insight Title: bar chart
     * Insight ID: aadrPJiEfu1O
     */ BarChart_1: "aadrPJiEfu1O",
    /**
     * Insight Title: Treee
     * Insight ID: aairQs4DffQF
     */ Treee: "aairQs4DffQF",
    /**
     * Insight Title: TESTTT
     * Insight ID: aamxmrqKgPBi
     */ TESTTT: "aamxmrqKgPBi",
    /**
     * Insight Title: GEO - No size
     * Insight ID: aafxFZQddf2o
     */ GEONoSize: "aafxFZQddf2o",
    /**
     * Insight Title: Geo - Viewport -Afri
     * Insight ID: aabxJccKeg8Y
     */ GeoViewportAfri: "aabxJccKeg8Y",
    /**
     * Insight Title: geo, no color + no segment
     * Insight ID: aabxSON0eKaz
     */ GeoNoColorNoSegment: "aabxSON0eKaz",
    /**
     * Insight Title: Copy of Geo + Attribute filter
     * Insight ID: aahxZH2LcQXZ
     */ CopyOfGeoAttributeFilter: "aahxZH2LcQXZ",
    /**
     * Insight Title: Geo -  segment - no size
     * Insight ID: aanxZH2LcQXZ
     */ GeoSegmentNoSize: "aanxZH2LcQXZ",
    /**
     * Insight Title: geo, no color, legend right
     * Insight ID: aabx54PeedQB
     */ GeoNoColorLegendRight: "aabx54PeedQB",
    /**
     * Insight Title: geo, size legend
     * Insight ID: aadOBR1ThPoA
     */ GeoSizeLegend: "aadOBR1ThPoA",
    /**
     * Insight Title: geo, color legend
     * Insight ID: aabOCVIJirh6
     */ GeoColorLegend: "aabOCVIJirh6",
    /**
     * Insight Title: geo, attribute legend
     * Insight ID: aakOB2TvhTVs
     */ GeoAttributeLegend: "aakOB2TvhTVs",
    /**
     * Insight Title: geo, attribute & size legend
     * Insight ID: aalOB2TvhTVs
     */ GeoAttributeAndSizeLegend: "aalOB2TvhTVs",
    /**
     * Insight Title: geo, color & size legend
     * Insight ID: aabODkioclK3
     */ GeoColorAndSizeLegend: "aabODkioclK3",
    /**
     * Insight Title: geo, attribute legend 2
     * Insight ID: aadODwFLcM28
     */ GeoAttributeLegend2: "aadODwFLcM28",
    /**
     * Insight Title: geo, attribute & size legend 2
     * Insight ID: aahODwOocJOW
     */ GeoAttributeAndSizeLegend2: "aahODwOocJOW",
    /**
     * Insight Title: geo, no legend
     * Insight ID: aabOE2mbem9v
     */ GeoNoLegend: "aabOE2mbem9v",
    /**
     * Insight Title: heat
     * Insight ID: aabOMtPVdpFo
     */ Heat: "aabOMtPVdpFo",
    /**
     * Insight Title: abc
     * Insight ID: aanP8HOUhD6g
     */ Abc_2: "aanP8HOUhD6g",
    /**
     * Insight Title: Copy of headline 1
     * Insight ID: aakVfpgzfrB2
     */ CopyOfHeadline1: "aakVfpgzfrB2",
    /**
     * Insight Title: ok
     * Insight ID: aahVfFTOb00d
     */ Ok: "aahVfFTOb00d",
    /**
     * Insight Title: Copy of Bullet
     * Insight ID: aafVuHIDbxA3
     */ CopyOfBullet: "aafVuHIDbxA3",
    /**
     * Insight Title: long metric name
     * Insight ID: aaebQz9YcOi6
     */ LongMetricName: "aaebQz9YcOi6",
    /**
     * Insight Title: nghiiiiitest
     * Insight ID: aabcAxAQfxMg
     */ Nghiiiiitest: "aabcAxAQfxMg",
    /**
     * Insight Title: table thg
     * Insight ID: aadyzXPke3bn
     */ TableThg_1: "aadyzXPke3bn",
    /**
     * Insight Title: Copy of geo, attribute legend 2
     * Insight ID: aakiZWqog4T6
     */ CopyOfGeoAttributeLegend2: "aakiZWqog4T6",
    /**
     * Insight Title: _Mai_Geo
     * Insight ID: aaqkeBdnb12H
     */ MaiGeo: "aaqkeBdnb12H",
    /**
     * Insight Title: Table
     * Insight ID: aagkPCtKh7TG
     */ Table_4: "aagkPCtKh7TG",
    /**
     * Insight Title: 1 table
     * Insight ID: aaoohje0ipyh
     */ _1Table: "aaoohje0ipyh",
    /**
     * Insight Title: Parent filter test
     * Insight ID: aaeOjLQogKCR
     */ ParentFilterTest: "aaeOjLQogKCR",
    /**
     * Insight Title: sdfd
     * Insight ID: aafEqdcRhsx6
     */ Sdfd: "aafEqdcRhsx6",
    /**
     * Insight Title: save
     * Insight ID: aazJDV1EhB77
     */ Save_2: "aazJDV1EhB77",
    /**
     * Insight Title: test combo RAIL-2392
     * Insight ID: aacMnQWwbDAl
     */ TestComboRAIL2392: "aacMnQWwbDAl",
    /**
     * Insight Title: 123
     * Insight ID: aavQ4gafayr5
     */ _123: "aavQ4gafayr5",
    /**
     * Insight Title: test insight
     * Insight ID: aad1u8tPSc7f
     */ TestInsight: "aad1u8tPSc7f",
    /**
     * Insight Title: local data filter
     * Insight ID: aab8I9nkRSAc
     */ LocalDataFilter: "aab8I9nkRSAc",
    /**
     * Insight Title: xirr
     * Insight ID: aaf9FKIdbTax
     */ Xirr_1: "aaf9FKIdbTax",
    /**
     * Insight Title: xirr year
     * Insight ID: aad9FKLHfBcf
     */ XirrYear: "aad9FKLHfBcf",
    /**
     * Insight Title: 123
     * Insight ID: aaH9HwoOb9on
     */ _123_1: "aaH9HwoOb9on",
    /**
     * Insight Title: test live example
     * Insight ID: aabaBSjLuUAI
     */ TestLiveExample: "aabaBSjLuUAI",
    /**
     * Insight Title: pl
     * Insight ID: aaeqnnEjJamC
     */ Pl: "aaeqnnEjJamC",
    /**
     * Insight Title: Table has measure rows and columns
     * Insight ID: aacv3mGaiduz
     */ TableHasMeasureRowsAndColumns: "aacv3mGaiduz",
    /**
     * Insight Title: table with empty value
     * Insight ID: aad1r3qI02et
     */ TableWithEmptyValue: "aad1r3qI02et",
    /**
     * Insight Title: 123
     * Insight ID: aahmZyMQSBYi
     */ _123_2: "aahmZyMQSBYi",
    /**
     * Insight Title: Exp1
     * Insight ID: aah1dRPhg9YV
     */ Exp1: "aah1dRPhg9YV",
    /**
     * Insight Title: Exp2
     * Insight ID: aas1auZ15QtS
     */ Exp2: "aas1auZ15QtS",
    /**
     * Insight Title: Exp3
     * Insight ID: aaj1bWLC5Qe9
     */ Exp3: "aaj1bWLC5Qe9",
    /**
     * Insight Title: explore
     * Insight ID: aae5L6XHb9s8
     */ Explore: "aae5L6XHb9s8",
    /**
     * Insight Title: non-pro 2
     * Insight ID: aab1KwbEhbbh
     */ NonPro2: "aab1KwbEhbbh",
    /**
     * Insight Title: 1 not applied, 1 can
     * Insight ID: aab1K8tza1Ad
     */ _1NotApplied1Can: "aab1K8tza1Ad",
    /**
     * Insight Title: h2 with pp
     * Insight ID: aakdpPi4e5B1
     */ H2WithPp: "aakdpPi4e5B1",
    /**
     * Insight Title: config, hide point & gridline
     * Insight ID: aabdsbLJxm4I
     */ ConfigHidePointAndGridline: "aabdsbLJxm4I",
    /**
     * Insight Title: config, percent, hide grid-legend-x-axis, change color
     * Insight ID: aafdrQQQxkWv
     */ ConfigPercentHideGridLegendXAxisChangeColor: "aafdrQQQxkWv",
    /**
     * Insight Title: config, hide x name&data labels, change legend position
     * Insight ID: aaidvnbrxSb6
     */ ConfigHideXNameAndDataLabelsChangeLegendPosition: "aaidvnbrxSb6",
    /**
     * Insight Title: config, color, hide x-y, show data labels
     * Insight ID: aahdwt9PavVa
     */ ConfigColorHideXYShowDataLabels: "aahdwt9PavVa",
    /**
     * Insight Title: config, scale x-y, show data labels
     * Insight ID: aakdLq2rI0CL
     */ ConfigScaleXYShowDataLabels: "aakdLq2rI0CL",
    /**
     * Insight Title: pie, negative
     * Insight ID: aafdNmycJzNB
     */ PieNegative: "aafdNmycJzNB",
    /**
     * Insight Title: no value
     * Insight ID: aahdNUzfh75Q
     */ NoValue: "aahdNUzfh75Q",
    /**
     * Insight Title: change display form
     * Insight ID: aajdYLaVLvHi
     */ ChangeDisplayForm: "aajdYLaVLvHi",
    /**
     * Insight Title: save as
     * Insight ID: aak4AU6gwbL2
     */ SaveAs: "aak4AU6gwbL2",
    /**
     * Insight Title: check drill down
     * Insight ID: aac7JjoAgVE9
     */ CheckDrillDown: "aac7JjoAgVE9",
    /**
     * Insight Title: test
     * Insight ID: aaCXKax2HIfL
     */ Test_3: "aaCXKax2HIfL",
    /**
     * Insight Title: error
     * Insight ID: aab6Ih9MpOHE
     */ Error: "aab6Ih9MpOHE",
    /**
     * Insight Title: sdss
     * Insight ID: aahcrVeWwwwR
     */ Sdss: "aahcrVeWwwwR",
    /**
     * Insight Title: Headline
     * Insight ID: aamvIDb10cRg
     */ Headline_5: "aamvIDb10cRg",
    /**
     * Insight Title: headline 2
     * Insight ID: aawvIondkHFv
     */ Headline2_1: "aawvIondkHFv",
    /**
     * Insight Title: headline
     * Insight ID: aal3pDJA56AU
     */ Headline_6: "aal3pDJA56AU",
    /**
     * Insight Title: 1
     * Insight ID: aadaHkT5KyBW
     */ _1_1: "aadaHkT5KyBW",
    /**
     * Insight Title: test
     * Insight ID: aakEanD7yVJh
     */ Test_4: "aakEanD7yVJh",
    /**
     * Insight Title: Nodata
     * Insight ID: aaiELWIm4uku
     */ Nodata: "aaiELWIm4uku",
};
export const Dashboards = {
    /**
     * Dashboard Title: KPIs
     * Dashboard ID: afMA17GSbk31
     */
    KPIs: "afMA17GSbk31",
    /**
     * Dashboard Title: Store management KPIs
     * Dashboard ID: abBJlnxrfEWH
     */ StoreManagementKPIs: "abBJlnxrfEWH",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aahlrtUEgKkq
     */ Untitled: "aahlrtUEgKkq",
    /**
     * Dashboard Title: Empty test
     * Dashboard ID: aagZTqwrcFsv
     */ EmptyTest: "aagZTqwrcFsv",
    /**
     * Dashboard Title: TRE
     * Dashboard ID: aabtibRbc8Cs
     */ TRE: "aabtibRbc8Cs",
    /**
     * Dashboard Title: OME
     * Dashboard ID: aacQVJmMb9Yi
     */ OME: "aacQVJmMb9Yi",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aadwfWlTbqyL
     */ Untitled_1: "aadwfWlTbqyL",
    /**
     * Dashboard Title: RAIL-1368
     * Dashboard ID: aaeZSF45gxht
     */ RAIL1368: "aaeZSF45gxht",
    /**
     * Dashboard Title: 191 blank space
     * Dashboard ID: aaix2brZhCFC
     */ _191BlankSpace: "aaix2brZhCFC",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aabx7lWTawi6
     */ Untitled_2: "aabx7lWTawi6",
    /**
     * Dashboard Title: testtest
     * Dashboard ID: aabYZ2CPaVAw
     */ Testtest: "aabYZ2CPaVAw",
    /**
     * Dashboard Title: Test Donut Chart KPIs
     * Dashboard ID: aaMdVPQwb2ig
     */ TestDonutChartKPIs: "aaMdVPQwb2ig",
    /**
     * Dashboard Title: Revenue sales in Feb
     * Dashboard ID: aaofLBl1fa6F
     */ RevenueSalesInFeb: "aaofLBl1fa6F",
    /**
     * Dashboard Title: Pivot Table
     * Dashboard ID: abjuhmGeeQTi
     */ PivotTable_3: "abjuhmGeeQTi",
    /**
     * Dashboard Title: 0306 Mai's
     * Dashboard ID: aauz14agaPwo
     */ _0306MaiS: "aauz14agaPwo",
    /**
     * Dashboard Title: hihi
     * Dashboard ID: aaZhUWZefOmQ
     */ Hihi_2: "aaZhUWZefOmQ",
    /**
     * Dashboard Title: KDthg
     * Dashboard ID: aahngO8lgHDP
     */ KDthg: "aahngO8lgHDP",
    /**
     * Dashboard Title: MVFs
     * Dashboard ID: aawRTxDohSFN
     */ MVFs: "aawRTxDohSFN",
    /**
     * Dashboard Title: An.manualResizeColumns
     * Dashboard ID: aag7DEnTbzo5
     */ AnManualResizeColumns: "aag7DEnTbzo5",
    /**
     * Dashboard Title: AD formatting
     * Dashboard ID: ac375tdwd3Mw
     */ ADFormatting_1: "ac375tdwd3Mw",
    /**
     * Dashboard Title: _0.An.resizeColumnTarget
     * Dashboard ID: aah79MrdaHOh
     */ _0AnResizeColumnTarget: "aah79MrdaHOh",
    /**
     * Dashboard Title: manual
     * Dashboard ID: aahulnligCkf
     */ Manual_1: "aahulnligCkf",
    /**
     * Dashboard Title: lalaa
     * Dashboard ID: aadNDAr3f2Fg
     */ Lalaa: "aadNDAr3f2Fg",
    /**
     * Dashboard Title: hihi
     * Dashboard ID: aalRSnk9fWBW
     */ Hihi_3: "aalRSnk9fWBW",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aacR2Z8OhMJM
     */ Untitled_3: "aacR2Z8OhMJM",
    /**
     * Dashboard Title: He came to see me I'll be with you in a second Excuteme Who are you I must visit my friend in a hospital You must study hard I have an apointment with him axist My father die of
     * Dashboard ID: aadSVNO3a2tw
     */ HeCameToSeeMeILlBeWithYouInASecondExcutemeWhoAreYouIMustVisitMyFriendInAHospitalYouMustStudyHardIHaveAnApointmentWithHimAxistMyFatherDieOf:
        "aadSVNO3a2tw",
    /**
     * Dashboard Title: Table Thuong
     * Dashboard ID: aat4jtaddIEs
     */ TableThuong_1: "aat4jtaddIEs",
    /**
     * Dashboard Title: thg111
     * Dashboard ID: aag8XCqMc3v5
     */ Thg111: "aag8XCqMc3v5",
    /**
     * Dashboard Title: wmnf ewnfn dsfjknjkdf nkjdnvjknsdkjfnk kdnf kndfnfdgfdkjn kdjfn kdfn dnfkndfkdfgfg
     * Dashboard ID: aap9XYrEgGct
     */ WmnfEwnfnDsfjknjkdfNkjdnvjknsdkjfnkKdnfKndfnfdgfdkjnKdjfnKdfnDnfkndfkdfgfg: "aap9XYrEgGct",
    /**
     * Dashboard Title: thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong 1
     * Dashboard ID: aau99BpLc3Df
     */ ThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuong1:
        "aau99BpLc3Df",
    /**
     * Dashboard Title: thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong #$^%&*&$%#$%$Ơ":?:ƯƠ":L?"^&%&%^*^&*
     * Dashboard ID: aaz99zGuc2KL
     */ ThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongNr$PercentAndAnd$PercentNr$Percent$LAndPercentAndPercentAnd:
        "aaz99zGuc2KL",
    /**
     * Dashboard Title: l dsm
     * Dashboard ID: aaQ95jvOigsS
     */ LDsm: "aaQ95jvOigsS",
    /**
     * Dashboard Title: thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong thuong  !@#$%^&*%$#Ơ":?>
     * Dashboard ID: aahag0xHf4KJ
     */ ThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongThuongNr$PercentAndPercent$Nr:
        "aahag0xHf4KJ",
    /**
     * Dashboard Title: check1
     * Dashboard ID: aadBkwGRfjp3
     */ Check1: "aadBkwGRfjp3",
    /**
     * Dashboard Title: test geo
     * Dashboard ID: aakmVuFHbDdD
     */ TestGeo_1: "aakmVuFHbDdD",
    /**
     * Dashboard Title: xirr
     * Dashboard ID: aadsJhXHd2ku
     */ Xirr_2: "aadsJhXHd2ku",
    /**
     * Dashboard Title: geo layout-do not update
     * Dashboard ID: aacQVpGchtzb
     */ GeoLayoutDoNotUpdate: "aacQVpGchtzb",
    /**
     * Dashboard Title: 2556
     * Dashboard ID: aanVsgrLg0I8
     */ _2556: "aanVsgrLg0I8",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aalWEjy5bAfI
     */ Untitled_4: "aalWEjy5bAfI",
    /**
     * Dashboard Title: geo
     * Dashboard ID: aaq2nkkZboEx
     */ Geo_2: "aaq2nkkZboEx",
    /**
     * Dashboard Title: Mai's 0807
     * Dashboard ID: aas7Ng51icmp
     */ MaiS0807: "aas7Ng51icmp",
    /**
     * Dashboard Title: KD - SDK7
     * Dashboard ID: aagoAcyldjaJ
     */ KDSDK7: "aagoAcyldjaJ",
    /**
     * Dashboard Title: XIRR
     * Dashboard ID: aabp8fclichb
     */ XIRR_4: "aabp8fclichb",
    /**
     * Dashboard Title: 7.stg3
     * Dashboard ID: aabulYjqesxp
     */ _7Stg3: "aabulYjqesxp",
    /**
     * Dashboard Title: _Test_Plugin
     * Dashboard ID: aatulDJVbBis
     */ TestPlugin: "aatulDJVbBis",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aaIapWzHgs8L
     */ Untitled_5: "aaIapWzHgs8L",
    /**
     * Dashboard Title: particial dependent
     * Dashboard ID: aacPeSzrihPu
     */ ParticialDependent: "aacPeSzrihPu",
    /**
     * Dashboard Title: Copy of 7. Mai's 0811
     * Dashboard ID: aacnirGFcsBp
     */ CopyOf7MaiS0811: "aacnirGFcsBp",
    /**
     * Dashboard Title: Copy of Copy of Copy of 7. Mai's 0811
     * Dashboard ID: aalnkYBPcU6x
     */ CopyOfCopyOfCopyOf7MaiS0811: "aalnkYBPcU6x",
    /**
     * Dashboard Title: Copy of 2556
     * Dashboard ID: aaknkVqyijcY
     */ CopyOf2556: "aaknkVqyijcY",
    /**
     * Dashboard Title: Copy of Copy of 7. Mai's 0811
     * Dashboard ID: aadnrIjxgZbK
     */ CopyOfCopyOf7MaiS0811: "aadnrIjxgZbK",
    /**
     * Dashboard Title: Copy of AD formatting abc
     * Dashboard ID: aacnrVv3gGP5
     */ CopyOfADFormattingAbc: "aacnrVv3gGP5",
    /**
     * Dashboard Title: test XIRR nè
     * Dashboard ID: aaqnsDFfcORw
     */ TestXIRRN: "aaqnsDFfcORw",
    /**
     * Dashboard Title: VLK
     * Dashboard ID: accuLrqcajRI
     */ VLK: "accuLrqcajRI",
    /**
     * Dashboard Title: ets
     * Dashboard ID: aae9PgBMg5Sx
     */ Ets: "aae9PgBMg5Sx",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aadjyagcgaIE
     */ Untitled_6: "aadjyagcgaIE",
    /**
     * Dashboard Title: drill down - geo
     * Dashboard ID: aackvESGamKc
     */ DrillDownGeo: "aackvESGamKc",
    /**
     * Dashboard Title: drill down table
     * Dashboard ID: aasqZWpagtFF
     */ DrillDownTable: "aasqZWpagtFF",
    /**
     * Dashboard Title: _DP: MUFs
     * Dashboard ID: aaeDR3knilL3
     */ DPMUFs: "aaeDR3knilL3",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aaoIIZdfgaME
     */ Untitled_7: "aaoIIZdfgaME",
    /**
     * Dashboard Title: Check KD8 -Thao
     * Dashboard ID: aaiUfyfXa09B
     */ CheckKD8Thao: "aaiUfyfXa09B",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aaecF0rhb7vk
     */ Untitled_8: "aaecF0rhb7vk",
    /**
     * Dashboard Title: Source Dashboard
     * Dashboard ID: aacinNcmgdeE
     */ SourceDashboard: "aacinNcmgdeE",
    /**
     * Dashboard Title: 0921 Mai's PV + XIRR
     * Dashboard ID: aalndPnVej6z
     */ _0921MaiSPVXIRR: "aalndPnVej6z",
    /**
     * Dashboard Title: Copy of 0921 Mai's
     * Dashboard ID: aadnwxBihwvb
     */ CopyOf0921MaiS: "aadnwxBihwvb",
    /**
     * Dashboard Title: 0921 GEO Mai's
     * Dashboard ID: aagnDx3Bd9AU
     */ _0921GEOMaiS: "aagnDx3Bd9AU",
    /**
     * Dashboard Title: Copy of 0921 Mai's PV + XIRR
     * Dashboard ID: aamrPibwavgj
     */ CopyOf0921MaiSPVXIRR: "aamrPibwavgj",
    /**
     * Dashboard Title: 0923 Mai's Columns
     * Dashboard ID: aacxe0wHcqML
     */ _0923MaiSColumns: "aacxe0wHcqML",
    /**
     * Dashboard Title: Copy of 0921 GEO Mai's
     * Dashboard ID: aaFxyPwVdk1y
     */ CopyOf0921GEOMaiS: "aaFxyPwVdk1y",
    /**
     * Dashboard Title: Copy of 0921 GEO Mai's
     * Dashboard ID: aaqxBlvadwKY
     */ CopyOf0921GEOMaiS_1: "aaqxBlvadwKY",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aakDe5R6ckhU
     */ Untitled_9: "aakDe5R6ckhU",
    /**
     * Dashboard Title: Mai's Non-Production
     * Dashboard ID: aadDktdmfHwg
     */ MaiSNonProduction: "aadDktdmfHwg",
    /**
     * Dashboard Title: hiden data points
     * Dashboard ID: aar167tSdKYL
     */ HidenDataPoints: "aar167tSdKYL",
    /**
     * Dashboard Title: color palette
     * Dashboard ID: aabjJyIycBCN
     */ ColorPalette: "aabjJyIycBCN",
    /**
     * Dashboard Title: check RF AD
     * Dashboard ID: aacjNE1MahA7
     */ CheckRFAD: "aacjNE1MahA7",
    /**
     * Dashboard Title: Copy of color palette
     * Dashboard ID: aapoYGwVeEiO
     */ CopyOfColorPalette: "aapoYGwVeEiO",
    /**
     * Dashboard Title: testqqq
     * Dashboard ID: aadGRFxtbHMR
     */ Testqqq: "aadGRFxtbHMR",
    /**
     * Dashboard Title: Test resize visualization
     * Dashboard ID: aaxLDzm2dgb6
     */ TestResizeVisualization: "aaxLDzm2dgb6",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aabItqC9dQ1Z
     */ Untitled_10: "aabItqC9dQ1Z",
    /**
     * Dashboard Title: Trang-DB
     * Dashboard ID: aaG5YaKtfPze
     */ TrangDB: "aaG5YaKtfPze",
    /**
     * Dashboard Title: kaka-lala
     * Dashboard ID: aaIEidArgZOj
     */ KakaLala: "aaIEidArgZOj",
    /**
     * Dashboard Title: Thuong ok
     * Dashboard ID: aabFRLfAheGK
     */ ThuongOk_1: "aabFRLfAheGK",
    /**
     * Dashboard Title: thuong ok 1
     * Dashboard ID: aauGeNPqePTZ
     */ ThuongOk1_2: "aauGeNPqePTZ",
    /**
     * Dashboard Title: thuong cute phomai ko que
     * Dashboard ID: aagLpcaXhxJ4
     */ ThuongCutePhomaiKoQue: "aagLpcaXhxJ4",
    /**
     * Dashboard Title: DASH PB
     * Dashboard ID: aak3gqb5gHp8
     */ DASHPB: "aak3gqb5gHp8",
    /**
     * Dashboard Title: embedded dashboard
     * Dashboard ID: aaLfbUM6cLpV
     */ EmbeddedDashboard: "aaLfbUM6cLpV",
    /**
     * Dashboard Title: TLU-DB-regression
     * Dashboard ID: aadlZS8YaIHq
     */ TLUDBRegression: "aadlZS8YaIHq",
    /**
     * Dashboard Title: check KPI
     * Dashboard ID: aacDLlqLa6Q7
     */ CheckKPI: "aacDLlqLa6Q7",
    /**
     * Dashboard Title: Copy of embedded dashboard
     * Dashboard ID: aacI08qagngb
     */ CopyOfEmbeddedDashboard: "aacI08qagngb",
    /**
     * Dashboard Title: create new insight
     * Dashboard ID: aal0UzlPf5Z5
     */ CreateNewInsight: "aal0UzlPf5Z5",
    /**
     * Dashboard Title: gaga
     * Dashboard ID: aakiyJqucteU
     */ Gaga: "aakiyJqucteU",
    /**
     * Dashboard Title: Kpi compo
     * Dashboard ID: aadnGlYfa6Vc
     */ KpiCompo: "aadnGlYfa6Vc",
    /**
     * Dashboard Title: TLU-handle insight
     * Dashboard ID: aaesT5VXg0cD
     */ TLUHandleInsight: "aaesT5VXg0cD",
    /**
     * Dashboard Title: empty dashboard
     * Dashboard ID: aadujoBQfL9W
     */ EmptyDashboard: "aadujoBQfL9W",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aabEGIkreF5m
     */ Untitled_11: "aabEGIkreF5m",
    /**
     * Dashboard Title: gà
     * Dashboard ID: aanEWlLRfgO4
     */ G: "aanEWlLRfgO4",
    /**
     * Dashboard Title: Check headline embedded
     * Dashboard ID: aacFWNEjgoxv
     */ CheckHeadlineEmbedded: "aacFWNEjgoxv",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aadF8l1EhXUY
     */ Untitled_12: "aadF8l1EhXUY",
    /**
     * Dashboard Title: hehe
     * Dashboard ID: aab2T6QKeLEx
     */ Hehe_2: "aab2T6QKeLEx",
    /**
     * Dashboard Title: kaka
     * Dashboard ID: aah2TyL2ew3w
     */ Kaka: "aah2TyL2ew3w",
    /**
     * Dashboard Title: wqa
     * Dashboard ID: aab2Z9XRgSYx
     */ Wqa: "aab2Z9XRgSYx",
    /**
     * Dashboard Title: TLU-Ka
     * Dashboard ID: aabdJujJapR0
     */ TLUKa: "aabdJujJapR0",
    /**
     * Dashboard Title: KPI Thg
     * Dashboard ID: aaqez1kHhu19
     */ KPIThg: "aaqez1kHhu19",
    /**
     * Dashboard Title: Copy of gà
     * Dashboard ID: aatGSiW2dYn9
     */ CopyOfG: "aatGSiW2dYn9",
    /**
     * Dashboard Title: example RAIL-2875
     * Dashboard ID: aaemBs1LgRIQ
     */ ExampleRAIL2875: "aaemBs1LgRIQ",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aagrKWjgaBP7
     */ Untitled_13: "aagrKWjgaBP7",
    /**
     * Dashboard Title: TLU-schedule-6-1-21
     * Dashboard ID: aabsObraajhM
     */ TLUSchedule6121: "aabsObraajhM",
    /**
     * Dashboard Title: DHO-RAIL-2885
     * Dashboard ID: aadFcXCKfHgr
     */ DHORAIL2885: "aadFcXCKfHgr",
    /**
     * Dashboard Title: Huyennnnnn
     * Dashboard ID: aak7MXcxdHLI
     */ Huyennnnnn: "aak7MXcxdHLI",
    /**
     * Dashboard Title: extended date is off
     * Dashboard ID: aaGG1kFJhgGY
     */ ExtendedDateIsOff: "aaGG1kFJhgGY",
    /**
     * Dashboard Title: check scroll
     * Dashboard ID: aadkMmSHf6g5
     */ CheckScroll: "aadkMmSHf6g5",
    /**
     * Dashboard Title: change time
     * Dashboard ID: aabqrbfFbFpY
     */ ChangeTime: "aabqrbfFbFpY",
    /**
     * Dashboard Title: DHO-RAIL-crash
     * Dashboard ID: aahz0OladE5o
     */ DHORAILCrash: "aahz0OladE5o",
    /**
     * Dashboard Title: Copy of example RAIL-2875
     * Dashboard ID: aaxRrE0EedOd
     */ CopyOfExampleRAIL2875: "aaxRrE0EedOd",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aadUcxOYgVp1
     */ Untitled_14: "aadUcxOYgVp1",
    /**
     * Dashboard Title: FET-601
     * Dashboard ID: aa1YY8zmcn3L
     */ FET601: "aa1YY8zmcn3L",
    /**
     * Dashboard Title: FET 601 0223
     * Dashboard ID: aagZq1JoaVB8
     */ FET6010223: "aagZq1JoaVB8",
    /**
     * Dashboard Title: FET-605 _MKpis
     * Dashboard ID: aaBZzygWbDmv
     */ FET605MKpis: "aaBZzygWbDmv",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aawZE28tdQd8
     */ Untitled_15: "aawZE28tdQd8",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aad30Dgef9xs
     */ Untitled_16: "aad30Dgef9xs",
    /**
     * Dashboard Title: 0224
     * Dashboard ID: aak3XM6IgaUU
     */ _0224_1: "aak3XM6IgaUU",
    /**
     * Dashboard Title: Check Drill down target
     * Dashboard ID: aak5F1qPg5ro
     */ CheckDrillDownTarget: "aak5F1qPg5ro",
    /**
     * Dashboard Title: TLU
     * Dashboard ID: aabhwUrqaKSJ
     */ TLU: "aabhwUrqaKSJ",
    /**
     * Dashboard Title: Simpler example RAIL-2875
     * Dashboard ID: aamEsiYNeVfj
     */ SimplerExampleRAIL2875: "aamEsiYNeVfj",
    /**
     * Dashboard Title: Even simpler example RAIL-2875
     * Dashboard ID: aacFryAXhlmJ
     */ EvenSimplerExampleRAIL2875: "aacFryAXhlmJ",
    /**
     * Dashboard Title: geo-height
     * Dashboard ID: aaeoIZKHdZ5O
     */ GeoHeight: "aaeoIZKHdZ5O",
    /**
     * Dashboard Title: geo layout copy
     * Dashboard ID: aamfrm1Mgup4
     */ GeoLayoutCopy: "aamfrm1Mgup4",
    /**
     * Dashboard Title: geo layout-set height
     * Dashboard ID: aabw0k7mektd
     */ GeoLayoutSetHeight: "aabw0k7mektd",
    /**
     * Dashboard Title: geo with map config
     * Dashboard ID: aahDC3YGdEnr
     */ GeoWithMapConfig: "aahDC3YGdEnr",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aabDIwAVfeR6
     */ Untitled_17: "aabDIwAVfeR6",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aaiDGwcYdNkn
     */ Untitled_18: "aaiDGwcYdNkn",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aama19nxgH2j
     */ Untitled_19: "aama19nxgH2j",
    /**
     * Dashboard Title: _Theme M2: XIRR
     * Dashboard ID: aadm2c0ygtSN
     */ ThemeM2XIRR: "aadm2c0ygtSN",
    /**
     * Dashboard Title: _Dashboard View
     * Dashboard ID: aaSn7njxfipF
     */ DashboardView: "aaSn7njxfipF",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aacBDdVge4Cu
     */ Untitled_20: "aacBDdVge4Cu",
    /**
     * Dashboard Title: _Theme: Geo chart
     * Dashboard ID: aasHpnYmh1o0
     */ ThemeGeoChart: "aasHpnYmh1o0",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aabMvYZOefav
     */ Untitled_21: "aabMvYZOefav",
    /**
     * Dashboard Title: layout, height, headline
     * Dashboard ID: aacaOeJkfEws
     */ LayoutHeightHeadline: "aacaOeJkfEws",
    /**
     * Dashboard Title: _0921 Mai's PV + XIRR
     * Dashboard ID: aaYw0XavgrxE
     */ _0921MaiSPVXIRR_1: "aaYw0XavgrxE",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aaixjdbRgF9y
     */ Untitled_22: "aaixjdbRgF9y",
    /**
     * Dashboard Title: No measure
     * Dashboard ID: aaDzdXAgeYjr
     */ NoMeasure: "aaDzdXAgeYjr",
    /**
     * Dashboard Title: _M_JS error
     * Dashboard ID: aafP8SK0d0C2
     */ MJSError: "aafP8SK0d0C2",
    /**
     * Dashboard Title: Slice by generic date
     * Dashboard ID: aauUouvMavFL
     */ SliceByGenericDate: "aauUouvMavFL",
    /**
     * Dashboard Title: Copy of Store management KPIs
     * Dashboard ID: aaIWSDAMbApv
     */ CopyOfStoreManagementKPIs: "aaIWSDAMbApv",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aaiBkf42cClY
     */ Untitled_23: "aaiBkf42cClY",
    /**
     * Dashboard Title: 000000000. AAA pbr
     * Dashboard ID: aadTOaUGcA0M
     */ _000000000AAAPbr: "aadTOaUGcA0M",
    /**
     * Dashboard Title: _Mai_0510
     * Dashboard ID: aaf95C19f3Dt
     */ Mai0510: "aaf95C19f3Dt",
    /**
     * Dashboard Title: _Mai_0511
     * Dashboard ID: aanen5zoiD92
     */ Mai0511: "aanen5zoiD92",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aahlDO4rdyed
     */ Untitled_24: "aahlDO4rdyed",
    /**
     * Dashboard Title: 0511
     * Dashboard ID: aahrQk7Lff1b
     */ _0511: "aahrQk7Lff1b",
    /**
     * Dashboard Title: _Mai0514 : Geo chart
     * Dashboard ID: aaqxp5LNaLvg
     */ Mai0514GeoChart: "aaqxp5LNaLvg",
    /**
     * Dashboard Title: geo legend check
     * Dashboard ID: aaMODyuycKo2
     */ GeoLegendCheck: "aaMODyuycKo2",
    /**
     * Dashboard Title: testtt
     * Dashboard ID: aad6z69He440
     */ Testtt: "aad6z69He440",
    /**
     * Dashboard Title: one-5014
     * Dashboard ID: aakbOzuVeo0U
     */ One5014: "aakbOzuVeo0U",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aadcACC1ayWj
     */ Untitled_25: "aadcACC1ayWj",
    /**
     * Dashboard Title: table thg
     * Dashboard ID: aabyAmBeduJL
     */ TableThg_2: "aabyAmBeduJL",
    /**
     * Dashboard Title: Check parent filter SDK
     * Dashboard ID: aabOMrwSdpCg
     */ CheckParentFilterSDK: "aabOMrwSdpCg",
    /**
     * Dashboard Title: _myd: check attribute filter SDK
     * Dashboard ID: aacLCFK1cyP7
     */ MydCheckAttributeFilterSDK: "aacLCFK1cyP7",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aafRXMdcbcnZ
     */ Untitled_26: "aafRXMdcbcnZ",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aabSayQzhPg3
     */ Untitled_27: "aabSayQzhPg3",
    /**
     * Dashboard Title: pie
     * Dashboard ID: aa71tp1JRTXk
     */ Pie_1: "aa71tp1JRTXk",
    /**
     * Dashboard Title: XiRR
     * Dashboard ID: aae9GsxwfTmp
     */ XiRR: "aae9GsxwfTmp",
    /**
     * Dashboard Title: drill from attributes
     * Dashboard ID: aaeI27ABAcut
     */ DrillFromAttributes: "aaeI27ABAcut",
    /**
     * Dashboard Title: delete
     * Dashboard ID: aagPk9XreUHX
     */ Delete: "aagPk9XreUHX",
    /**
     * Dashboard Title: drill from measure-do not update
     * Dashboard ID: aat5febgigGF
     */ DrillFromMeasureDoNotUpdate: "aat5febgigGF",
    /**
     * Dashboard Title: invalid drillable items
     * Dashboard ID: aaesPLhHWOP3
     */ InvalidDrillableItems: "aaesPLhHWOP3",
    /**
     * Dashboard Title: check eventing
     * Dashboard ID: aah1GTeJ5uSu
     */ CheckEventing: "aah1GTeJ5uSu",
    /**
     * Dashboard Title: nháp
     * Dashboard ID: aaD8lTzLlsqG
     */ NhP: "aaD8lTzLlsqG",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aaemZ3uheNwL
     */ Untitled_28: "aaemZ3uheNwL",
    /**
     * Dashboard Title: test
     * Dashboard ID: aabQrGxShrNG
     */ Test_5: "aabQrGxShrNG",
    /**
     * Dashboard Title: hf
     * Dashboard ID: aac5Mn8FiRfQ
     */ Hf: "aac5Mn8FiRfQ",
    /**
     * Dashboard Title: tnt-157-case 1
     * Dashboard ID: aac1MFMZcQ4Y
     */ Tnt157Case1: "aac1MFMZcQ4Y",
    /**
     * Dashboard Title: pdf, many objects 1
     * Dashboard ID: aaedgtt9ayfN
     */ PdfManyObjects1: "aaedgtt9ayfN",
    /**
     * Dashboard Title: pdf, many objects 2, locked dashboard
     * Dashboard ID: aafdVyfRK1EL
     */ PdfManyObjects2LockedDashboard: "aafdVyfRK1EL",
    /**
     * Dashboard Title: pdf, dependent filter, select other display form, date dashboard level
     * Dashboard ID: aajdZTEzeMAh
     */ PdfDependentFilterSelectOtherDisplayFormDateDashboardLevel: "aajdZTEzeMAh",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aaerW7LWixIp
     */ Untitled_29: "aaerW7LWixIp",
    /**
     * Dashboard Title: RAIL-3769
     * Dashboard ID: aab7KcwChoC7
     */ RAIL3769: "aab7KcwChoC7",
    /**
     * Dashboard Title: RAIL-3769 DHO-copy
     * Dashboard ID: aampkL1NZXHA
     */ RAIL3769DHOCopy: "aampkL1NZXHA",
    /**
     * Dashboard Title: Copy of AD formatting
     * Dashboard ID: aadI7fQvlFdy
     */ CopyOfADFormatting: "aadI7fQvlFdy",
    /**
     * Dashboard Title: djhfj jsdgfj hsjdfd
     * Dashboard ID: aah6AE80ownU
     */ DjhfjJsdgfjHsjdfd: "aah6AE80ownU",
    /**
     * Dashboard Title: dsfsdsdf
     * Dashboard ID: aah6DZR6paPU
     */ Dsfsdsdf: "aah6DZR6paPU",
    /**
     * Dashboard Title: Copy of Copy of AD formatting abc hagsbdhs
     * Dashboard ID: aag6ECrspeKL
     */ CopyOfCopyOfADFormattingAbcHagsbdhs: "aag6ECrspeKL",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aau3oLl65ZlI
     */ Untitled_30: "aau3oLl65ZlI",
    /**
     * Dashboard Title: Copy of Copy of AD formatting abc dashboard plugin
     * Dashboard ID: aai3YFFcb5DO
     */ CopyOfCopyOfADFormattingAbcDashboardPlugin: "aai3YFFcb5DO",
    /**
     * Dashboard Title: Copy of Copy of AD formatting 456
     * Dashboard ID: aaf4WDTQmk4N
     */ CopyOfCopyOfADFormatting456: "aaf4WDTQmk4N",
    /**
     * Dashboard Title: Copy of Copy of AD formatting abc avc
     * Dashboard ID: aad41iUPFESZ
     */ CopyOfCopyOfADFormattingAbcAvc: "aad41iUPFESZ",
    /**
     * Dashboard Title: Copy of Copy of AD formatting 65
     * Dashboard ID: aataBk0EJihh
     */ CopyOfCopyOfADFormatting65: "aataBk0EJihh",
    /**
     * Dashboard Title: Copy of Copy of AD formatting
     * Dashboard ID: aacaDNxRJtBn
     */ CopyOfCopyOfADFormatting: "aacaDNxRJtBn",
    /**
     * Dashboard Title: Copy of Copy of Copy of AD formatting
     * Dashboard ID: aadaDZB2JR9m
     */ CopyOfCopyOfCopyOfADFormatting: "aadaDZB2JR9m",
    /**
     * Dashboard Title: Copy of Copy of Copy of Copy of AD formatting
     * Dashboard ID: aabaJEiyKWu3
     */ CopyOfCopyOfCopyOfCopyOfADFormatting: "aabaJEiyKWu3",
    /**
     * Dashboard Title: Copy of Copy of Copy of Copy of Copy of AD formatting
     * Dashboard ID: aacl5wrKMzBT
     */ CopyOfCopyOfCopyOfCopyOfCopyOfADFormatting: "aacl5wrKMzBT",
    /**
     * Dashboard Title: Copy of Copy of Copy of Copy of Copy of AD formatting
     * Dashboard ID: aael4jFXMCYa
     */ CopyOfCopyOfCopyOfCopyOfCopyOfADFormatting_1: "aael4jFXMCYa",
    /**
     * Dashboard Title: Copy of Copy of AD formatting
     * Dashboard ID: aaslWrJhLiox
     */ CopyOfCopyOfADFormatting_1: "aaslWrJhLiox",
    /**
     * Dashboard Title: Copy of Copy of AD formatting
     * Dashboard ID: aaemeS3zOtEQ
     */ CopyOfCopyOfADFormatting_2: "aaemeS3zOtEQ",
    /**
     * Dashboard Title: Copy of Copy of AD formatting
     * Dashboard ID: aaimeWs4OtOZ
     */ CopyOfCopyOfADFormatting_3: "aaimeWs4OtOZ",
    /**
     * Dashboard Title: Copy of _0
     * Dashboard ID: aaemytdKvdmz
     */ CopyOf0: "aaemytdKvdmz",
    /**
     * Dashboard Title: Copy of Copy of Copy of AD formatting
     * Dashboard ID: aacDU14wv1Wo
     */ CopyOfCopyOfCopyOfADFormatting_1: "aacDU14wv1Wo",
    /**
     * Dashboard Title: Copy of Copy of Copy of AD formatting
     * Dashboard ID: aaADYgo1wCNL
     */ CopyOfCopyOfCopyOfADFormatting_2: "aaADYgo1wCNL",
    /**
     * Dashboard Title: Copy of Copy of Copy of Copy of AD formatting
     * Dashboard ID: aaDDZkJ8wC3K
     */ CopyOfCopyOfCopyOfCopyOfADFormatting_1: "aaDDZkJ8wC3K",
    /**
     * Dashboard Title: Copy of Copy of Copy of Copy of Copy of AD formatting
     * Dashboard ID: aaeD7FWzyrfV
     */ CopyOfCopyOfCopyOfCopyOfCopyOfADFormatting_2: "aaeD7FWzyrfV",
    /**
     * Dashboard Title: test_tlu
     * Dashboard ID: aahD9LS5yRDb
     */ TestTlu: "aahD9LS5yRDb",
    /**
     * Dashboard Title: plugin 2
     * Dashboard ID: aagEvTmx1of7
     */ Plugin2: "aagEvTmx1of7",
    /**
     * Dashboard Title: Copy of plugin 2
     * Dashboard ID: aadEAEHI2fU1
     */ CopyOfPlugin2: "aadEAEHI2fU1",
    /**
     * Dashboard Title: Copy of plugin 2
     * Dashboard ID: aazJdxRTjMeC
     */ CopyOfPlugin2_1: "aazJdxRTjMeC",
    /**
     * Dashboard Title: Copy of Copy of plugin 2
     * Dashboard ID: aaiJqAHClXpc
     */ CopyOfCopyOfPlugin2: "aaiJqAHClXpc",
    /**
     * Dashboard Title: Copy of Copy of Copy of plugin 2
     * Dashboard ID: aabJGFzdxzoq
     */ CopyOfCopyOfCopyOfPlugin2: "aabJGFzdxzoq",
    /**
     * Dashboard Title: Copy of Copy of plugin 2
     * Dashboard ID: aalPqdpWrlzI
     */ CopyOfCopyOfPlugin2_1: "aalPqdpWrlzI",
    /**
     * Dashboard Title: Copy of Copy of plugin 2
     * Dashboard ID: aahQaOfUIq40
     */ CopyOfCopyOfPlugin2_2: "aahQaOfUIq40",
    /**
     * Dashboard Title: Copy of Copy of plugin 2
     * Dashboard ID: aacQe6kfI7i4
     */ CopyOfCopyOfPlugin2_3: "aacQe6kfI7i4",
    /**
     * Dashboard Title: Copy of Copy of plugin 2
     * Dashboard ID: aawQbWmjz4U6
     */ CopyOfCopyOfPlugin2_4: "aawQbWmjz4U6",
    /**
     * Dashboard Title: Copy of Copy of Copy of plugin 2
     * Dashboard ID: aauQg5a0AVY0
     */ CopyOfCopyOfCopyOfPlugin2_1: "aauQg5a0AVY0",
    /**
     * Dashboard Title: Copy of Pivot Table
     * Dashboard ID: aagWd1mWOiAA
     */ CopyOfPivotTable: "aagWd1mWOiAA",
    /**
     * Dashboard Title: dashboard plugin v8.7
     * Dashboard ID: aabu5iZeqh1l
     */ DashboardPluginV87: "aabu5iZeqh1l",
    /**
     * Dashboard Title: dashboard plugin v8.8
     * Dashboard ID: aagvcchrrHPH
     */ DashboardPluginV88: "aagvcchrrHPH",
    /**
     * Dashboard Title: Copy of _0. Mai's 0811
     * Dashboard ID: aaeE1OdAdo22
     */ CopyOf0MaiS0811: "aaeE1OdAdo22",
    /**
     * Dashboard Title: Untitled
     * Dashboard ID: aadGtmxpXBJJ
     */ Untitled_31: "aadGtmxpXBJJ",
    /**
     * Dashboard Title: Copy of _Test_Plugin
     * Dashboard ID: aac3EvRCa75w
     */ CopyOfTestPlugin: "aac3EvRCa75w",
    /**
     * Dashboard Title: Copy of _Test_Plugin
     * Dashboard ID: aad3GDHGbozS
     */ CopyOfTestPlugin_1: "aad3GDHGbozS",
};
