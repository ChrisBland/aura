/*
 * Copyright (C) 2012 salesforce.com, inc.
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
package org.auraframework.builder;

import org.auraframework.def.DefDescriptor;
import org.auraframework.def.DependencyDef;
import org.auraframework.def.RootDefinition;

/**
 * @since 0.0.196
 */
public interface DependencyDefBuilder extends DefBuilder<DependencyDef, DependencyDef> {
    DependencyDefBuilder setParentDescriptor(DefDescriptor<? extends RootDefinition> parentDescriptor);
    DependencyDefBuilder setResource(String resource);
    DependencyDefBuilder setType(String type);
}