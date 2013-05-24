/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 
(function() {
    window.WallTime || (window.WallTime = {});
    window.WallTime.data = {
        rules: {"Greece":[{"name":"Greece","_from":"1932","_to":"only","type":"-","in":"Jul","on":"7","at":"0:00","_save":"1:00","letter":"S"},{"name":"Greece","_from":"1932","_to":"only","type":"-","in":"Sep","on":"1","at":"0:00","_save":"0","letter":"-"},{"name":"Greece","_from":"1941","_to":"only","type":"-","in":"Apr","on":"7","at":"0:00","_save":"1:00","letter":"S"},{"name":"Greece","_from":"1942","_to":"only","type":"-","in":"Nov","on":"2","at":"3:00","_save":"0","letter":"-"},{"name":"Greece","_from":"1943","_to":"only","type":"-","in":"Mar","on":"30","at":"0:00","_save":"1:00","letter":"S"},{"name":"Greece","_from":"1943","_to":"only","type":"-","in":"Oct","on":"4","at":"0:00","_save":"0","letter":"-"},{"name":"Greece","_from":"1952","_to":"only","type":"-","in":"Jul","on":"1","at":"0:00","_save":"1:00","letter":"S"},{"name":"Greece","_from":"1952","_to":"only","type":"-","in":"Nov","on":"2","at":"0:00","_save":"0","letter":"-"},{"name":"Greece","_from":"1975","_to":"only","type":"-","in":"Apr","on":"12","at":"0:00s","_save":"1:00","letter":"S"},{"name":"Greece","_from":"1975","_to":"only","type":"-","in":"Nov","on":"26","at":"0:00s","_save":"0","letter":"-"},{"name":"Greece","_from":"1976","_to":"only","type":"-","in":"Apr","on":"11","at":"2:00s","_save":"1:00","letter":"S"},{"name":"Greece","_from":"1976","_to":"only","type":"-","in":"Oct","on":"10","at":"2:00s","_save":"0","letter":"-"},{"name":"Greece","_from":"1977","_to":"1978","type":"-","in":"Apr","on":"Sun>=1","at":"2:00s","_save":"1:00","letter":"S"},{"name":"Greece","_from":"1977","_to":"only","type":"-","in":"Sep","on":"26","at":"2:00s","_save":"0","letter":"-"},{"name":"Greece","_from":"1978","_to":"only","type":"-","in":"Sep","on":"24","at":"4:00","_save":"0","letter":"-"},{"name":"Greece","_from":"1979","_to":"only","type":"-","in":"Apr","on":"1","at":"9:00","_save":"1:00","letter":"S"},{"name":"Greece","_from":"1979","_to":"only","type":"-","in":"Sep","on":"29","at":"2:00","_save":"0","letter":"-"},{"name":"Greece","_from":"1980","_to":"only","type":"-","in":"Apr","on":"1","at":"0:00","_save":"1:00","letter":"S"},{"name":"Greece","_from":"1980","_to":"only","type":"-","in":"Sep","on":"28","at":"0:00","_save":"0","letter":"-"}],"EU":[{"name":"EU","_from":"1977","_to":"1980","type":"-","in":"Apr","on":"Sun>=1","at":"1:00u","_save":"1:00","letter":"S"},{"name":"EU","_from":"1977","_to":"only","type":"-","in":"Sep","on":"lastSun","at":"1:00u","_save":"0","letter":"-"},{"name":"EU","_from":"1978","_to":"only","type":"-","in":"Oct","on":"1","at":"1:00u","_save":"0","letter":"-"},{"name":"EU","_from":"1979","_to":"1995","type":"-","in":"Sep","on":"lastSun","at":"1:00u","_save":"0","letter":"-"},{"name":"EU","_from":"1981","_to":"max","type":"-","in":"Mar","on":"lastSun","at":"1:00u","_save":"1:00","letter":"S"},{"name":"EU","_from":"1996","_to":"max","type":"-","in":"Oct","on":"lastSun","at":"1:00u","_save":"0","letter":"-"}]},
        zones: {"Europe/Athens":[{"name":"Europe/Athens","_offset":"1:34:52","_rule":"-","format":"LMT","_until":"1895 Sep 14"},{"name":"Europe/Athens","_offset":"1:34:52","_rule":"-","format":"AMT","_until":"1916 Jul 28 0:01"},{"name":"Europe/Athens","_offset":"2:00","_rule":"Greece","format":"EE%sT","_until":"1941 Apr 30"},{"name":"Europe/Athens","_offset":"1:00","_rule":"Greece","format":"CE%sT","_until":"1944 Apr 4"},{"name":"Europe/Athens","_offset":"2:00","_rule":"Greece","format":"EE%sT","_until":"1981"},{"name":"Europe/Athens","_offset":"2:00","_rule":"EU","format":"EE%sT","_until":""}]}
    };
    window.WallTime.autoinit = true;
}).call(this);