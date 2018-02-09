<template>
    <div id="databaseHomeLists">
        <el-table @cell-click="cellClickDetail" :data="tableListsData" border style="width: 100%">
            <el-table-column prop="date" label="Name" className="column1" width="430"
                             :resizable="false"></el-table-column>
            <el-table-column prop="name" label="Implementation date" width="160" :resizable="false"></el-table-column>
            <el-table-column prop="address" label="Status" width="140" :resizable="false"></el-table-column>
            <el-table-column label="Details" :resizable="false">
                <template slot-scope="scope">
                    <el-button round size="mini" type="success"
                               @click.stop="enterDetail(scope.$index, scope.row.id)">Enter
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="pager" :page-size="10" align="center"
                       @current-change="dbFavouriteJumpPages" :total="favouriteTotalPages">
        </el-pagination>
    </div>
</template>
<script>
    export default {
        name: 'databaseHomeLists',
        data() {
            return {
                favouriteTotalPages: 1000,
                tableListsData: [
                    {
                        date: 'China November 2017 Non-Compliant Imported Food Data..',
                        name: '2018-3-1',
                        address: 'To be enforced',
                        id: 1
                    }, {
                        date: 'China November 2017 Non-Compliant Imported Food Data..',
                        name: '2018-3-1',
                        address: 'To be enforced',
                        id: 2
                    }, {
                        date: 'China November 2017 Non-Compliant Imported Food Data..',
                        name: '2018-3-1',
                        address: 'To be enforced',
                        id: 3
                    }, {
                        date: 'China November 2017 Non-Compliant Imported Food Data..',
                        name: '2018-3-1',
                        address: 'To be enforced'
                    }, {
                        date: 'China November 2017 Non-Compliant Imported Food Data..',
                        name: '2018-3-1',
                        address: 'To be enforced'
                    }, {
                        date: 'China November 2017 Non-Compliant Imported Food Data..',
                        name: '2018-3-1',
                        address: 'To be enforced'
                    }, {
                        date: 'China November 2017 Non-Compliant Imported Food Data..',
                        name: '2018-3-1',
                        address: 'To be enforced'
                    }, {
                        date: 'China November 2017 Non-Compliant Imported Food Data..',
                        name: '2018-3-1',
                        address: 'To be enforced'
                    }, {
                        date: 'China November 2017 Non-Compliant Imported Food Data..',
                        name: '2018-3-1',
                        address: 'To be enforced'
                    }, {
                        date: 'China November 2017 Non-Compliant Imported Food Data..',
                        name: '2018-3-1',
                        address: 'To be enforced'
                    }, {
                        date: 'China November 2017 Non-Compliant Imported Food Data..',
                        name: '2018-3-1',
                        address: 'To be enforced'
                    }, {
                        date: 'China November 2017 Non-Compliant Imported Food Data..',
                        name: '2018-3-1',
                        address: 'To be enforced'
                    }, {
                        date: 'China November 2017 Non-Compliant Imported Food Data..',
                        name: '2018-3-1',
                        address: 'To be enforced'
                    }, {
                        date: 'China November 2017 Non-Compliant Imported Food Data..',
                        name: '2018-3-1',
                        address: 'To be enforced'
                    }, {
                        date: 'China November 2017 Non-Compliant Imported Food Data..',
                        name: '2018-3-1',
                        address: 'To be enforced'
                    }, {
                        date: 'China November 2017 Non-Compliant Imported Food Data..',
                        name: '2018-3-1',
                        address: 'To be enforced'
                    }, {
                        date: 'China November 2017 Non-Compliant Imported Food Data..',
                        name: '2018-3-1',
                        address: 'To be enforced'
                    }, {
                        date: 'China November 2017 Non-Compliant Imported Food Data..',
                        name: '2018-3-1',
                        address: 'To be enforced'
                    }, {
                        date: 'China November 2017 Non-Compliant Imported Food Data..',
                        name: '2018-3-1',
                        address: 'To be enforced'
                    }],
            }
        },
        methods: {
            cellClickDetail(row, column, cell, event) {
                if (column.className === 'column1') {
                    this.$router.push({path: '/databaseDetail?#id=' + row.id});
                    console.log(row.id)
                }
            },
            dbFavouriteJumpPages(pageNum) {
                console.log(pageNum)
            },
            enterDetail(index, id) {
                this.$router.push({path: '/databaseDetail?#id=' + id});
                console.log(id);
            },
        }
    }
</script>
<style lang="scss">
    #databaseHomeLists {
        $borderColor: #c5a835;
        $textColor: #5a5050;
        .el-table {
            font-size: 13px;
            .column1 {
                color: #5959b9;
                cursor: pointer;
                &:hover {
                    text-decoration: underline;
                }
            }
            .el-button {
                padding: 3px 10px;
            }

            tr:hover > td {
                background-color: white;
            }
            border-color: $borderColor;
            &::before {
                background-color: $borderColor;
            }
            &::after {
                background-color: $borderColor;
            }
            th {
                background-color: #f0e4d6;
                text-align: center;
                border-right: none;
                border-color: $borderColor;
                padding: 5px 0;
                color: $textColor !important;
            }
            td {
                text-align: center;
                border-right: none;
                border-color: $borderColor;
                padding: 5px 0;
            }
        }
        .el-pagination {
            margin: 30px auto;
            .el-pager {
                li {
                    margin: 0 5px;
                    background-color: #efe0c5;
                    color: #606266;
                    min-width: 30px;
                    border-radius: 2px;
                }
                .active {
                    background-color: #e8cd9b;
                    color: #846a39;
                    border: 1px solid #d6b679;
                }
            }
        }
    }
</style>


