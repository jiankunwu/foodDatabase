<template>
    <div id="databaseFavourite">
        <h1>Favourite Lists</h1>
        <el-table @cell-click="favouriteDetail" :data="tableFavouriteData" border style="width: 100%"
                  empty-text="Nothing">
            <el-table-column :resizable="false" prop="date" label="Name" className="column1"
                             width="430"></el-table-column>
            <el-table-column :resizable="false" width="170" label="Update Notification">
                <template slot-scope="updateScope">
                    <el-switch @change="updateControl($event,updateScope.row.id)" v-model="updateScope.row.switchValue"
                               active-color="#13ce66" inactive-color="#ff4949"></el-switch>
                </template>
            </el-table-column>
            <el-table-column :resizable="false" prop="name" label="Update Info" width="160"></el-table-column>
            <el-table-column :resizable="false" label="Delete" className="abFavouriteDelete">
                <template slot-scope="deleteScope">
                    <el-button class="el-icon-close" type="text" @click="deleteRowId(deleteScope.row.id)"></el-button>
                    <el-dialog top="25vh" title="TIPS" :visible.sync="deleteDialog" width="30%">
                        <span>Will give up the collection, will it continue?</span>
                        <span slot="footer" class="dialog-footer">
                            <el-button style="padding: 7px 13px" type="info" plain
                                       @click="deleteDialog = false">Cancel</el-button>
                            <el-button style="padding: 7px 13px" type="success" @click="deleteRow">Confirm</el-button>
                        </span>
                    </el-dialog>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="pager" :page-size="10" align="center"
                       @current-change="dbJumpPages" :total="totalPages">
        </el-pagination>
    </div>
</template>
<script>
    export default {
        name: 'databaseFavourite',
        data() {
            return {
                totalPages: 1000,
                deleteDialog: false,
                dbDeleteRowId: -1,
                tableFavouriteData: [
                    {
                        date: '1China November 2017 Non-Compliant Imported Food Data..',
                        name: '2018-3-1',
                        address: 'To be enforced',
                        id: 1,
                        switchValue: true
                    }, {
                        date: '2China November 2017 Non-Compliant Imported Food Data..',
                        name: '2018-3-1',
                        address: 'To be enforced',
                        id: 2,
                        switchValue: false
                    }, {
                        date: '3China November 2017 Non-Compliant Imported Food Data..',
                        name: '2018-3-1',
                        address: 'To be enforced',
                        id: 3,
                        switchValue: true
                    }, {
                        date: '4China November 2017 Non-Compliant Imported Food Data..',
                        name: '2018-3-1',
                        address: 'To be enforced',
                        id: 4,
                        switchValue: false
                    }, {
                        date: '5China November 2017 Non-Compliant Imported Food Data..',
                        name: '2018-3-1',
                        address: 'To be enforced',
                        id: 5,
                        switchValue: true
                    }
                ],
            }
        },
        methods: {
            favouriteDetail(row, column, cell, event) {
                if (column.className === 'column1') {
                    this.$router.push({path: '/databaseDetail?#id=' + row.id});
                    console.log(row.id)
                }
            },
            updateControl(status, id) {
                console.log(status, id)
            },
            deleteRowId(id) {
                this.dbDeleteRowId = id;
                this.deleteDialog = true;
            },
            deleteRow() {
                let newTableFavouriteData = [];
                for (let i = 0; i < this.tableFavouriteData.length; i++) {
                    if (this.tableFavouriteData[i].id !== this.dbDeleteRowId) {
                        newTableFavouriteData.push(this.tableFavouriteData[i])
                    }
                }
                this.tableFavouriteData = newTableFavouriteData;
                this.deleteDialog = false
            },
            dbJumpPages(pageNum) {
                console.log(pageNum)
            },
        }
    }
</script>
<style lang="scss">
    #databaseFavourite {
        $borderColor: #c5a835;
        $textColor: #5a5050;
        h1 {
            color: $textColor;
            border-bottom: 2px solid $borderColor;
            margin: 0 0 25px 0;
            box-sizing: border-box;
            padding: 0 0 10px 0;
        }
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
        .abFavouriteDelete {
            .el-icon-close {
                font-size: 17px;
                font-weight: 600;
                color: #605b6b;
                cursor: pointer;
                &:hover {
                    color: #f00e45;
                }
            }
            .el-dialog {
                text-align: left;
                border-radius: 10px;
                box-shadow: 0 0 5px #757070;
                .el-dialog__title {
                    font-weight: 600;
                }
                .el-dialog__body {
                    font-size: 17px;
                    padding: 13px 20px;
                }
            }
        }
        .el-pagination {
            margin: 30px auto;
        }
    }
</style>


