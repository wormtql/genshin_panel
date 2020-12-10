# 函数


## compose

```typescript
function compose(
    character: string | CharacterInterface,
    weapon: string | WeaponInterface,
    artifacts?: IArtifact[],
    params?: Param
): Attribute | null
```

返回最终计算得到的面板，如果预设不存在，则返回null  
character: 代表角色的预设字符串或者角色结构  
weapon: 代表武器预设的字符串或者武器结构  
artifacts: 圣遗物列表，可以为空列表或者为undefined  
params: 计算圣遗物的参数


## getCharacterAttribute
```typescript
function getCharacterAttribute(what: string): CharacterInterface | null
```
what: 代表角色预设的字符串，该字符串由三部分组成，<角色全拼>-<等级>-<是否突破>  
例如
```typescript
getCharacterAttribute("keqing-70-0") // 刻晴70级未突破
getCharacterAttribute("keqing-70-1") // 刻晴70级突破
```


## getWeaponAttribute
```typescript
function getAttribute(what: string): WeaponInterface | null
```
同[getCharacterAttribute](#getcharacterattribute)


## supportedCharacters
```typescript
supportedCharacters() // 返回支持的所有角色预设的字符串列表
```

## supportedWeapons
同[supportedCharacters](#supportedcharacters)


## applyArtifacts
```typescript
function applyArtifacts(attribute: Attribute, artifacts: IArtifact[], param: Param)
```

attribute: 要应用圣遗物的当前面板
artifacts: 圣遗物列表
param: 圣遗物参数


## newAttribute
```typescript
function newAttribute(): Attribute
```

返回空的属性结构  
其中，包括初始暴击率*5%*、初始充能效率*1*。其余都是0